import React, { useState, useEffect } from 'react';
import RegisterUser from './RegisterUser';

function Settings() {
    const [userDataMap, setUserDataMap] = useState([]);
    const [loading, setLoading] = useState(false);

    const [nameSearch, setNameSearch] = useState('');
    const [phoneSearch, setPhoneSearch] = useState('');
    const [pathSelect, setPathSelect] = useState('ALL');
    const [statusSelect, setStatusSelect] = useState('ALL');

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [contentSearch, setContentSearch] = useState('');

    const [selectedUser, setSelectedUser] = useState(null);

    // 화면 전환 상태 관리 (true면 등록 화면, false면 메인 화면)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    useEffect(() => {
        // 등록 화면일 때는 데이터를 불러올 필요가 없으므로 최적화 차단 가능
        if (isRegisterOpen) return;

        const fetchUserData = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (nameSearch) params.append('name', nameSearch);
                if (phoneSearch) params.append('phone', phoneSearch);
                if (pathSelect !== 'ALL') params.append('path', pathSelect);
                if (statusSelect !== 'ALL') params.append('status', statusSelect);
                if (startDate) params.append('startDate', startDate);
                if (endDate) params.append('endDate', endDate);
                if (contentSearch) params.append('content', contentSearch);

                const response = await fetch(`/api/users?${params.toString()}`);
                const result = await response.json();

                setUserDataMap(result);

                if (result.length > 0) {
                    const exists = result.find(user => selectedUser && user.id === selectedUser.id);
                    if (!exists) {
                        setSelectedUser(result[0]);
                    }
                } else {
                    setSelectedUser(null);
                }
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [nameSearch, phoneSearch, pathSelect, statusSelect, startDate, endDate, contentSearch, isRegisterOpen]);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    // 💡 핵심: 컴포넌트 최상단이 아니라, 조건에 따라 렌더링할 뷰를 return 안에서 분기 처리합니다.
    if (isRegisterOpen) {
        return (
            <RegisterUser
                onCancel={() => setIsRegisterOpen(false)}
                onSuccess={() => {
                    setIsRegisterOpen(false); // 등록 성공 시 메인으로 복귀
                    // 필요시 데이터 새로고침 트리거 추가 가능
                }}
            />
        );
    }

    return (
        <div>
            {/* 1. [상단] 인물 목록 검색 조건 */}
            <div className="diary-card search-box-top">
                <div className="search-title">검색</div>

                <div className="search-grid-top">
                    {/* 이름 */}
                    <div className="form-group">
                        <label>이름</label>
                        <input
                            type="text"
                            placeholder="이름 입력"
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    {/* 연락처 */}
                    <div className="form-group">
                        <label>연락처</label>
                        <input
                            type="text"
                            placeholder="연락처 입력"
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    {/* 경로 */}
                    <div className="form-group">
                        <label>경로</label>
                        <select
                            value={pathSelect}
                            onChange={(e) => setPathSelect(e.target.value)}
                            className="form-select"
                        >
                            <option value="ALL">전체 경로</option>
                            <option value="광고">광고</option>
                            <option value="기존 DB">기존 DB</option>
                            <option value="당근">당근</option>
                            <option value="소개">소개</option>
                            <option value="신디비">신디비</option>
                            <option value="오픈">오픈</option>
                        </select>
                    </div>

                    {/* 상태 */}
                    <div className="form-group">
                        <label>상태</label>
                        <select
                            value={statusSelect}
                            onChange={(e) => statusSelect(e.target.value)}
                            className="form-select"
                        >
                            <option value="ALL">전체 상태</option>
                            <option value="부재">부재</option>
                            <option value="재통">재통</option>
                            <option value="관리">관리</option>
                            <option value="부결">부결</option>
                            <option value="계약">계약</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* 버튼 영역 */}
            <div className="button-wrapper">
                <button className="btn-set" onClick={() => setIsRegisterOpen(true)}>DB 등록</button>
            </div>

            {/* 2. [하단] 2단 영역 */}
            <div className="layout-grid">

                {/* [왼쪽] 인물 목록 영역 */}
                <div className="diary-card user-list-container">
                    <h3 className="user-list-title">
                        목록 ({userDataMap.length}건)
                    </h3>

                    <ul className="user-list-ul">
                        {loading ? (
                            <li className="empty-message">불러오는 중...</li>
                        ) : userDataMap.length > 0 ? (
                            userDataMap.map((user) => {
                                const isSelected = selectedUser && selectedUser.id === user.id;
                                return (
                                    <li key={user.id} style={{ marginBottom: '0.5rem' }}>
                                        <button
                                            onClick={() => handleUserClick(user)}
                                            className={`user-item-btn ${isSelected ? 'selected' : ''}`}
                                        >
                                            <div className="user-item-row">
                                                <span style={{ fontSize: 'var(--font-base)' }}>{user.name}</span>
                                                <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)' }}>{user.status}</span>
                                                <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-primary)' }}>{user.path}</span>
                                            </div>
                                            <div className="user-item-phone">
                                                {user.phone}
                                            </div>
                                        </button>
                                    </li>
                                );
                            })
                        ) : (
                            <li className="empty-message">
                                검색 조건에 해당 인물이 없습니다.
                            </li>
                        )}
                    </ul>
                </div>

                {/* [오른쪽] 기록 내부 검색 조건 + 상세 기록 영역 */}
                <div className="diary-card diary-right-container">
                    <div className="diary-header-box">
                        <h3 className="col_primary" style={{ fontSize: 'var(--font-base)' }}>
                            {selectedUser ? selectedUser.name : '-'} 님 /
                            유입경로: {selectedUser ? selectedUser.path : "-"} /
                            상태: {selectedUser ? selectedUser.status : "-"}
                        </h3>
                        <h3 className="col_accent" style={{ fontSize: 'var(--font-xs)' }}>
                            {selectedUser && selectedUser.diaries ? selectedUser.diaries.length : 0}건
                        </h3>
                    </div>

                    <div className="button-wrapper">
                        <button className="btn-set">추가</button>
                    </div>

                    {/* [기록 내부 검색 조건] */}
                    <div className="diary-search-box">
                        <div style={{ fontSize: 'var(--font-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-sub)' }}>
                            검색
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.75rem', alignItems: 'end' }}>
                            {/* 날짜 범위 */}
                            <div className="form-group">
                                <label>날짜 범위</label>
                                <div className="diary-date-wrapper">
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="form-input"
                                    />
                                    <span>~</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            {/* 내용 검색 */}
                            <div className="form-group">
                                <label>내용 검색</label>
                                <input
                                    type="text"
                                    placeholder="상담 내용"
                                    value={contentSearch}
                                    onChange={(e) => setContentSearch(e.target.value)}
                                    className="form-input"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 기록 내용 출력 목록 */}
                    <div className="diary-items-list">
                        {selectedUser && selectedUser.diaries && selectedUser.diaries.length > 0 ? (
                            selectedUser.diaries.map((diary) => (
                                <div key={diary.id} className="diary-item-card">
                                    <div style={{ fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)', marginBottom: '0.3rem', fontWeight: 'var(--weight-medium)' }}>
                                        📅 {diary.date}
                                    </div>
                                    <div style={{ fontSize: 'var(--font-base)', color: 'var(--color-text-main)' }}>
                                        {diary.content}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-message">
                                조건에 일치하는 기록이 없습니다.
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Settings;