import React, { useState, useEffect, useCallback } from 'react';
import RegisterUser from './RegisterUser';
import AddDiaryModal from './AddDiaryModal';
import { PATH_OPTIONS, STATUS_OPTIONS } from '../constants/options.js';

// 1. 검색 필터 분리 (인물 검색용 / 상담 내역 검색용)
const INITIAL_USER_FILTERS = {
    name: '',
    path: '',
    status: '',
};

const INITIAL_DIARY_FILTERS = {
    startDate: '',
    endDate: '',
    content: '',
};

// 💡 옵션 배열에서 value에 해당하는 label을 찾아주는 헬퍼 함수
const getOptionLabel = (options, value) => {
    const found = options.find((item) => item.value === value);
    return found ? found.label : value;
};

function Settings() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userFilters, setUserFilters] = useState(INITIAL_USER_FILTERS);
    const [selectedUser, setSelectedUser] = useState(null);

    // 선택된 유저의 상담 내역 관련 상태
    const [diaries, setDiaries] = useState([]);
    const [diaryLoading, setDiaryLoading] = useState(false);
    const [diaryFilters, setDiaryFilters] = useState(INITIAL_DIARY_FILTERS);

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isDiaryModalOpen, setIsDiaryModalOpen] = useState(false);

    // 인물 검색 필터 변경 핸들러
    const handleUserFilterChange = useCallback((field, value) => {
        setUserFilters((prev) => ({ ...prev, [field]: value }));
    }, []);

    // 상담 내역 검색 필터 변경 핸들러
    const handleDiaryFilterChange = useCallback((field, value) => {
        setDiaryFilters((prev) => ({ ...prev, [field]: value }));
    }, []);

    // [1] 사용자 목록 조회 API
    const fetchUserData = useCallback(async (signal) => {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (userFilters.name) params.append('name', userFilters.name);
            if (userFilters.path) params.append('path', userFilters.path);
            if (userFilters.status) params.append('status', userFilters.status);

            const response = await fetch(`/api/users?${params.toString()}`, { signal });
            const result = await response.json();

            setUsers(result);

            // 선택된 유저 유지 혹은 첫 번째 유저 자동 선택
            setSelectedUser((prevSelected) => {
                if (result.length === 0) return null;
                const stillExists = result.find((u) => u.seq === prevSelected?.seq);
                return stillExists || result[0];
            });
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('사용자 목록을 불러오는 중 오류가 발생했습니다:', error);
            }
        } finally {
            setLoading(false);
        }
    }, [userFilters]);

    // [2] 특정 사용자의 상담 내역(noteList) 조회 API
    const fetchDiaryList = useCallback(async (seq, signal) => {
        if (!seq) {
            setDiaries([]);
            return;
        }

        setDiaryLoading(true);
        try {
            const params = new URLSearchParams();
            params.append('seq', seq);
            if (diaryFilters.startDate) params.append('startDate', diaryFilters.startDate);
            if (diaryFilters.endDate) params.append('endDate', diaryFilters.endDate);
            if (diaryFilters.content) params.append('content', diaryFilters.content);

            const response = await fetch(`/api/noteList?${params.toString()}`, { signal });
            const result = await response.json();

            setDiaries(result);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('상담 내역을 불러오는 중 오류가 발생했습니다:', error);
                setDiaries([]);
            }
        } finally {
            setDiaryLoading(false);
        }
    }, [diaryFilters]);

    // 사용자 목록 불러오기 Effect
    useEffect(() => {
        if (isRegisterOpen) return;
        const controller = new AbortController();
        fetchUserData(controller.signal);
        return () => controller.abort();
    }, [fetchUserData, isRegisterOpen]);

    // 사용자가 변경되거나 상담 내역 검색 조건이 바뀔 때 노트 목록 불러오기 Effect
    useEffect(() => {
        if (!selectedUser?.seq) return;
        const controller = new AbortController();
        fetchDiaryList(selectedUser.seq, controller.signal);
        return () => controller.abort();
    }, [selectedUser?.seq, diaryFilters, fetchDiaryList]);

    // 기록 추가 성공 시 목록 새로고침
    const handleDiaryAddSuccess = async () => {
        setIsDiaryModalOpen(false);
        if (selectedUser?.seq) {
            const controller = new AbortController();
            await fetchDiaryList(selectedUser.seq, controller.signal);
        }
    };

    if (isRegisterOpen) {
        return (
            <RegisterUser
                onCancel={() => setIsRegisterOpen(false)}
                onSuccess={() => setIsRegisterOpen(false)}
            />
        );
    }

    return (
        <div>
            {/* 상단 검색 조건 */}
            <UserSearchSection
                filters={userFilters}
                onFilterChange={handleUserFilterChange}
            />

            <div className="button-wrapper">
                <button className="btn-set" onClick={() => setIsRegisterOpen(true)}>
                    DB 등록
                </button>
            </div>

            {/* 하단 메인 레이아웃 */}
            <div className="layout-grid">
                <UserListSection
                    users={users}
                    loading={loading}
                    selectedUserSeq={selectedUser?.seq}
                    onSelectUser={(user) => {
                        setSelectedUser(user);
                        setDiaryFilters(INITIAL_DIARY_FILTERS); // 유저 변경 시 상세 검색 초기화
                    }}
                />

                <DiaryDetailSection
                    user={selectedUser}
                    diaries={diaries}
                    diaryLoading={diaryLoading}
                    filters={diaryFilters}
                    onFilterChange={handleDiaryFilterChange}
                    onOpenDiaryModal={() => setIsDiaryModalOpen(true)}
                />
            </div>

            {/* 기록 추가 모달 팝업 */}
            {isDiaryModalOpen && selectedUser && (
                <AddDiaryModal
                    userSeq={selectedUser.seq}
                    userName={selectedUser.name}
                    onClose={() => setIsDiaryModalOpen(false)}
                    onSuccess={handleDiaryAddSuccess}
                />
            )}
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/*                               서브 컴포넌트들                               */
/* -------------------------------------------------------------------------- */

function UserSearchSection({ filters, onFilterChange }) {
    return (
        <div className="diary-card search-box-top">
            <div className="search-grid-top">
                <div className="form-group">
                    <label>이름</label>
                    <input
                        type="text"
                        placeholder="이름 입력"
                        value={filters.name}
                        onChange={(e) => onFilterChange('name', e.target.value)}
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label>경로</label>
                    <select
                        value={filters.path}
                        onChange={(e) => onFilterChange('path', e.target.value)}
                        className="form-select"
                    >
                        {PATH_OPTIONS.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>상태</label>
                    <select
                        value={filters.status}
                        onChange={(e) => onFilterChange('status', e.target.value)}
                        className="form-select"
                    >
                        {STATUS_OPTIONS.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

function UserListSection({ users, loading, selectedUserSeq, onSelectUser }) {
    return (
        <div className="diary-card user-list-container">
            <h3 className="user-list-title">목록 ({users.length}건)</h3>

            <ul className="user-list-ul">
                {loading ? (
                    <li className="empty-message">불러오는 중...</li>
                ) : users.length > 0 ? (
                    users.map((user) => {
                        const isSelected = selectedUserSeq === user.seq;
                        return (
                            <li key={user.seq} style={{ marginBottom: '0.5rem' }}>
                                <button
                                    onClick={() => onSelectUser(user)}
                                    className={`user-item-btn ${isSelected ? 'selected' : ''}`}
                                >
                                    <div className="user-item-row">
                                        <span style={{ fontSize: 'var(--font-base)' }}>{user.name}</span>
                                        {/* 상태 값에 상수의 label 매핑 */}
                                        <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)' }}>
                                            {getOptionLabel(STATUS_OPTIONS, user.status)}
                                        </span>
                                        {/* 유입 경로 값에 상수의 label 매핑 */}
                                        <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-primary)' }}>
                                            {getOptionLabel(PATH_OPTIONS, user.path)}
                                        </span>
                                    </div>
                                    <a href={`tel:${user.phone}`} className="user-item-phone" onClick={(e) => e.stopPropagation()}>
                                        {user.phone}
                                    </a>
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <li className="empty-message">검색 조건에 해당 인물이 없습니다.</li>
                )}
            </ul>
        </div>
    );
}

function DiaryDetailSection({ user, diaries, diaryLoading, filters, onFilterChange, onOpenDiaryModal }) {
    return (
        <div className="diary-card diary-right-container">
            <div className="diary-header-box">
                <h3 className="col_primary" style={{ fontSize: 'var(--font-base)' }}>
                    {user?.name ?? '-'} 님 /
                    유입경로: {user?.path ? getOptionLabel(PATH_OPTIONS, user.path) : '-'} /
                    상태: {user?.status ? getOptionLabel(STATUS_OPTIONS, user.status) : '-'}
                </h3>
                <h3 className="col_accent" style={{ fontSize: 'var(--font-xs)' }}>
                    {diaries.length}건
                </h3>
            </div>

            <div className="button-wrapper">
                <button
                    className="btn-set"
                    onClick={onOpenDiaryModal}
                    disabled={!user}
                >
                    추가
                </button>
            </div>

            {/* 기록 내부 검색 조건 */}
            <div className="diary-search-box">
                <div
                    style={{
                        fontSize: 'var(--font-xs)',
                        fontWeight: 'var(--weight-bold)',
                        color: 'var(--color-text-sub)',
                    }}
                >
                    검색
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', alignItems: 'end' }}>
                    <div className="form-group">
                        <label>날짜 범위</label>
                        <div className="diary-date-wrapper">
                            <input
                                type="date"
                                value={filters.startDate}
                                onChange={(e) => onFilterChange('startDate', e.target.value)}
                                className="form-input"
                            />
                            <span>~</span>
                            <input
                                type="date"
                                value={filters.endDate}
                                onChange={(e) => onFilterChange('endDate', e.target.value)}
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>내용 검색</label>
                        <input
                            type="text"
                            placeholder="상담 내용"
                            value={filters.content}
                            onChange={(e) => onFilterChange('content', e.target.value)}
                            className="form-input"
                        />
                    </div>
                </div>
            </div>

            {/* 기록 목록 */}
            <div className="diary-items-list">
                {diaryLoading ? (
                    <div className="empty-message">상담 내역을 불러오는 중...</div>
                ) : diaries.length > 0 ? (
                    diaries.map((diary) => (
                        <div key={diary.seq ?? diary.id} className="diary-item-card">
                            <div
                                style={{
                                    fontSize: 'var(--font-xs)',
                                    color: 'var(--color-text-sub)',
                                    marginBottom: '0.3rem',
                                    fontWeight: 'var(--weight-medium)',
                                }}
                            >
                                📅 {diary.date}
                            </div>
                            <div style={{ fontSize: 'var(--font-base)', color: 'var(--color-text-main)' }}>
                                {diary.content}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="empty-message">조건에 일치하는 기록이 없습니다.</div>
                )}
            </div>
        </div>
    );
}

export default Settings;