import React, { useState } from 'react';

function Settings() {
    // 1. 인물별 전체 다이어리 데이터 (경로, 상태, 날짜, 내용 포함)
    const [userDataMap, setUserDataMap] = useState([
        {
            id: 1,
            name: '김철수',
            phone: '010-1234-5678',
            path: '지인 추천',
            status: '활성',
            diaries: [
                { id: 101, date: '2026-10-18', content: '철수와 함께 카페에서 리액트 공부 완.' },
                { id: 102, date: '2026-10-15', content: 'Github와 Vercel 배포 연동 방법 공유함.' },
                { id: 103, date: '2026-10-10', content: '프로젝트 초기 세팅 완료 및 커피 한잔.' }
            ]
        },
        {
            id: 2,
            name: '영희',
            phone: '010-9876-5432',
            path: '웹 검색',
            status: '활성',
            diaries: [
                { id: 201, date: '2026-10-17', content: '다이어리 UI 디자인 스케치 구상.' },
                { id: 202, date: '2026-10-12', content: 'CSS 변수 디자인 토큰 정리.' }
            ]
        },
        {
            id: 3,
            name: '민수',
            phone: '010-5555-4444',
            path: '기타',
            status: '대기',
            diaries: [
                { id: 301, date: '2026-10-16', content: 'IntelliJ 툴 단축키 및 연동 확인.' }
            ]
        }
    ]);

    // 2. 상단 인물/목록 검색 조건 상태 관리
    const [nameSearch, setNameSearch] = useState('');           // 이름 (input)
    const [phoneSearch, setPhoneSearch] = useState('');         // 연락처 (input)
    const [pathSelect, setPathSelect] = useState('ALL');        // 경로 (selectBox)
    const [statusSelect, setStatusSelect] = useState('ALL');    // 상태 (selectBox)

    // 3. 우측 기록(다이어리) 내부 검색 조건 상태 관리
    const [startDate, setStartDate] = useState('');             // 시작일 (input date)
    const [endDate, setEndDate] = useState('');                 // 종료일 (input date)
    const [contentSearch, setContentSearch] = useState('');     // 내용 (input text)

    // 4. 현재 선택된 인물 상태 (기본값: 첫 번째 인물)
    const [selectedUser, setSelectedUser] = useState(userDataMap[0]);

    // 상단 검색 조건(이름, 연락처, 경로, 상태)에 따른 인물 목록 필터링
    const filteredUsers = userDataMap.filter(user => {
        const matchName = nameSearch
            ? user.name.toLowerCase().includes(nameSearch.toLowerCase())
            : true;
        const matchPhone = phoneSearch
            ? user.phone.includes(phoneSearch)
            : true;
        const matchPath = pathSelect === 'ALL' ? true : user.path === pathSelect;
        const matchStatus = statusSelect === 'ALL' ? true : user.status === statusSelect;

        return matchName && matchPhone && matchPath && matchStatus;
    });

    // 인물 선택 함수
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    // 선택된 인물의 다이어리 기록 중 우측 검색 조건(날짜 범위, 내용)에 맞는 항목 필터링
    const filteredDiaries = selectedUser ? selectedUser.diaries.filter(diary => {
        const matchStart = startDate ? diary.date >= startDate : true;
        const matchEnd = endDate ? diary.date <= endDate : true;
        const matchContent = contentSearch
            ? diary.content.toLowerCase().includes(contentSearch.toLowerCase())
            : true;

        return matchStart && matchEnd && matchContent;
    }) : [];

    return (
        <div>
            {/* 1. [상단] 인물 목록 검색 조건 (이름, 연락처, 경로, 상태) */}
            <div className="diary-card" style={{ padding: '1.25rem', marginBottom: '0.5rem', backgroundColor: '#F8FAFC' }}>
                <div style={{ fontSize: 'var(--font-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-sub)', marginBottom: '0.75rem' }}>
                    검색
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>

                    {/* 이름 (input) */}
                    <div>
                        <label style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                            이름
                        </label>
                        <input
                            type="text"
                            placeholder="이름 입력"
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    {/* 연락처 (input) */}
                    <div>
                        <label style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                            연락처
                        </label>
                        <input
                            type="text"
                            placeholder="연락처 입력"
                            value={phoneSearch}
                            onChange={(e) => setPhoneSearch(e.target.value)}
                            style={inputStyle}
                        />
                    </div>

                    {/* 경로 (selectBox) */}
                    <div>
                        <label style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                            경로
                        </label>
                        <select
                            value={pathSelect}
                            onChange={(e) => setPathSelect(e.target.value)}
                            style={selectStyle}
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

                    {/* 상태 (selectBox) */}
                    <div>
                        <label style={{ display: 'block', fontSize: '11px', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                            상태
                        </label>
                        <select
                            value={statusSelect}
                            onChange={(e) => setStatusSelect(e.target.value)}
                            style={selectStyle}
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
                <button className="btn-set">
                    DB 등록
                </button>
            </div>

            {/* 2. [하단] 2단 영역 (왼쪽: 인물 목록 / 오른쪽: 기록 및 기록 검색) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '0.5rem', alignItems: 'start' }}>

                {/* [왼쪽] 인물 목록 영역 */}
                <div className="diary-card" style={{ padding: '1rem' }}>
                    <h3 style={{ fontSize: 'var(--font-base)', marginBottom: '0.75rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                        목록 ({filteredUsers.length}건)
                    </h3>

                    <div style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', maxHeight: '480px' }}>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((user) => {
                                const isSelected = selectedUser && selectedUser.id === user.id;
                                return (
                                    <li key={user.id}>
                                        <button
                                            onClick={() => handleUserClick(user)}
                                            style={{
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '0.75rem',
                                                borderRadius: '8px',
                                                border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                                                backgroundColor: isSelected ? '#EEF2FF' : '#FFFFFF',
                                                color: isSelected ? 'var(--color-primary)' : 'var(--color-text-main)',
                                                fontWeight: isSelected ? 'var(--weight-bold)' : 'var(--weight-regular)',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <span style={{ fontSize: 'var(--font-base)' }}>{user.name}</span>
                                                <span style={{ fontSize: 'var(--font-xs)' , color: 'var(--color-text-sub)' }}>{user.status}</span>
                                                <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-primary)' }}>{user.path}</span>
                                            </div>
                                            <div style={{ fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)', marginTop: '0.2rem' }}>
                                                {user.phone}
                                            </div>
                                        </button>
                                    </li>
                                );
                            })
                        ) : (
                            <li style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--color-text-sub)', fontSize: 'var(--font-xs)' }}>
                                검색 조건에 해당 인물이 없습니다.
                            </li>
                        )}
                    </div>
                </div>

                {/* [오른쪽] 기록 내부 검색 조건 + 상세 기록 영역 */}
                <div className="diary-card" style={{padding: '1rem'}}>
                    {/* 헤더 */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '2px solid var(--color-border)',
                        marginBottom: '0.5rem'
                    }}>
                        <h3 className={'col_primary'} style={{fontSize: 'var(--font-base)'}}>
                            {selectedUser ? selectedUser.name : '-'} 님 /
                            유입경로: {selectedUser ? selectedUser.path : "-"} /
                            상태: {selectedUser ? selectedUser.status : "-"}
                        </h3>
                        <h3 className={'col_accent'} style={{fontSize: 'var(--font-xs)'}}>
                            {filteredDiaries.length}건
                        </h3>
                    </div>

                    <div className="button-wrapper">
                        <button className="btn-set">
                            추가
                        </button>
                    </div>


                    {/* 💡 [기록 내부 검색 조건] 날짜(input 2개) + 내용(input) */}
                    <div style={{
                        backgroundColor: '#F8FAFC',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '1px solid var(--color-border)',
                        marginBottom: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem'
                    }}>
                        <div style={{
                            fontSize: 'var(--font-xs)',
                            fontWeight: 'var(--weight-bold)',
                            color: 'var(--color-text-sub)'
                        }}>
                            검색
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1.2fr 1fr',
                            gap: '0.75rem',
                            alignItems: 'end'
                        }}>
                            {/* 날짜 범위 (input 2개) */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    color: 'var(--color-text-sub)',
                                    marginBottom: '0.3rem'
                                }}>
                                    날짜 범위
                                </label>
                                <div style={{display: 'flex', alignItems: 'center', gap: '0.3rem'}}>
                                    <input
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        style={inputStyle}
                                    />
                                    <span>~</span>
                                    <input
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        style={inputStyle}
                                    />
                                </div>
                            </div>

                            {/* 내용 검색 (input) */}
                            <div>
                                <label style={{
                                    display: 'block',
                                    fontSize: '11px',
                                    color: 'var(--color-text-sub)',
                                    marginBottom: '0.3rem'
                                }}>
                                    내용 검색
                                </label>
                                <input
                                    type="text"
                                    placeholder="상담 내용"
                                    value={contentSearch}
                                    onChange={(e) => setContentSearch(e.target.value)}
                                    style={inputStyle}
                                />
                            </div>

                        </div>
                    </div>

                    {/* 기록 내용 출력 목록 */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                        maxHeight: '350px',
                        overflowY: 'auto'
                    }}>
                        {filteredDiaries.length > 0 ? (
                            filteredDiaries.map((diary) => (
                                <div
                                    key={diary.id}
                                    style={{
                                        padding: '1rem',
                                        borderRadius: '8px',
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid var(--color-border)'
                                    }}
                                >
                                    <div style={{
                                        fontSize: 'var(--font-xs)',
                                        color: 'var(--color-text-sub)',
                                        marginBottom: '0.3rem',
                                        fontWeight: 'var(--weight-medium)'
                                    }}>
                                        📅 {diary.date}
                                    </div>
                                    <div style={{fontSize: 'var(--font-base)', color: 'var(--color-text-main)'}}>
                                        {diary.content}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div style={{textAlign: 'center', padding: '2rem', color: 'var(--color-text-sub)'}}>
                                조건에 일치하는 기록이 없습니다.
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}

// 인라인 스타일 공통 변수
const inputStyle = {
    width: '100%',
    marginRight: '1rem',
    padding: '0.5rem',
    fontSize: 'var(--font-sm)',
    color: 'var(--color-text-main)',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    outline: 'none',
};

const selectStyle = {
    width: '100%',
    padding: '0.5rem',
    fontSize: 'var(--font-sm)',
    color: 'var(--color-text-main)',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    outline: 'none',
    cursor: 'pointer'
};

export default Settings;