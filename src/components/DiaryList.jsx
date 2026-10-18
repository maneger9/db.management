import React, { useState } from 'react';

function DiaryList() {
    // 1. 검색 조건 상태 관리 (스케치 그림 기준: 날짜, 이름, 연락처 등)
    const [searchParams, setSearchParams] = useState({
        startDate: '',
        endDate: '',
        name: '',
        phone: '',
    });

    // 2. 임시 다이어리 리스트 데이터 (실제 데이터베이스나 백엔드 연동 전 테스트용)
    const [diaryList, setDiaryList] = useState([
        { id: 1, date: '2026-10-18', name: '김철수', mood: '기쁨', content: 'Vercel 배포와 리액트 세팅 완료!', phone: '010-1234-5678' },
        { id: 2, date: '2026-10-17', name: '영희', mood: '평온', content: 'UI 디자인 구상 및 CSS 변수 정리', phone: '010-9876-5432' },
        { id: 3, date: '2026-10-15', name: '민수', mood: '신남', content: 'IntelliJ와 Github 연동 성공', phone: '010-5555-4444' },
    ]);

    // 화면에 보여줄 필터링된 리스트 데이터
    const [filteredList, setFilteredList] = useState(diaryList);

    // 검색 입력값 변경 처리 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // [조회] 버튼 클릭 시 동작하는 검색 함수
    const handleSearch = (e) => {
        e.preventDefault();

        let result = diaryList.filter(item => {
            // 날짜 조건 필터링 (시작일 ~ 종료일)
            const matchStartDate = searchParams.startDate ? item.date >= searchParams.startDate : true;
            const matchEndDate = searchParams.endDate ? item.date <= searchParams.endDate : true;

            // 이름 조건 필터링 (포함 문자열 검색)
            const matchName = searchParams.name
                ? item.name.toLowerCase().includes(searchParams.name.toLowerCase())
                : true;

            // 연락처 조건 필터링
            const matchPhone = searchParams.phone
                ? item.phone.includes(searchParams.phone)
                : true;

            return matchStartDate && matchEndDate && matchName && matchPhone;
        });

        setFilteredList(result);
    };

    // [일기 등록] 버튼 클릭 시 예시 동작 (모달 오픈 또는 등록 화면 이동으로 확장 가능)
    const handleRegisterClick = () => {
        alert("일기 등록 화면(또는 모달)을 띄우는 로직을 연결할 수 있습니다!");
    };

    return (
        <div>
            {/* 1. 검색 조건 및 조회/등록 영역 (스케치 반영) */}
            <div className="diary-card" style={{ marginBottom: '1.5rem', padding: '1.25rem' }}>
                <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>

                        {/* 날짜 기간 검색 */}
                        <div>
                            <label style={{ display: 'block', fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                                날짜 기간 (~부터 ~까지)
                            </label>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type="date"
                                    name="startDate"
                                    value={searchParams.startDate}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                />
                                <span>~</span>
                                <input
                                    type="date"
                                    name="endDate"
                                    value={searchParams.endDate}
                                    onChange={handleInputChange}
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {/* 이름 검색 */}
                        <div>
                            <label style={{ display: 'block', fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                                이름
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="이름 입력"
                                value={searchParams.name}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                        </div>

                        {/* 연락처 검색 */}
                        <div>
                            <label style={{ display: 'block', fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)', marginBottom: '0.3rem' }}>
                                연락처
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="연락처 입력 (예: 1234)"
                                value={searchParams.phone}
                                onChange={handleInputChange}
                                style={inputStyle}
                            />
                        </div>

                    </div>

                    {/* 하단 버튼 영역 ([조회] 및 우측 [일기 등록]) */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid var(--color-border)' }}>
            <span style={{ fontSize: 'var(--font-xs)', color: 'var(--color-text-sub)' }}>
              총 검색 결과: <strong>{filteredList.length}</strong>건
            </span>

                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button type="submit" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
                                🔍 조회
                            </button>
                            <button type="button" className="btn-secondary" onClick={handleRegisterClick} style={{ padding: '0.5rem 1.25rem' }}>
                                ✏️ 일기 등록
                            </button>
                        </div>
                    </div>

                </form>
            </div>

            {/* 2. 리스트 (테이블) 영역 */}
            <div className="diary-card" style={{ padding: '0', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 'var(--font-sm)' }}>
                    <thead>
                    <tr style={{ backgroundColor: '#F1F5F9', borderBottom: '2px solid var(--color-border)' }}>
                        <th style={thStyle}>번호</th>
                        <th style={thStyle}>날짜</th>
                        <th style={thStyle}>이름</th>
                        <th style={thStyle}>기분</th>
                        <th style={thStyle}>내용</th>
                        <th style={thStyle}>연락처</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredList.length > 0 ? (
                        filteredList.map((item, index) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                                <td style={tdStyle}>{index + 1}</td>
                                <td style={tdStyle}>{item.date}</td>
                                <td style={tdStyle}><strong>{item.name}</strong></td>
                                <td style={tdStyle}><span className="tag-accent">{item.mood}</span></td>
                                <td style={tdStyle}>{item.content}</td>
                                <td style={tdStyle}>{item.phone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-sub)' }}>
                                검색 결과가 없습니다.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// 인라인 스타일 공통 변수 (깔끔한 UI 정렬용)
const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    fontSize: 'var(--font-sm)',
    borderRadius: '6px',
    border: '1px solid var(--color-border)',
    outline: 'none',
    backgroundColor: '#FFFFFF'
};

const thStyle = {
    padding: '0.75rem 1rem',
    fontWeight: 'var(--weight-bold)',
    color: 'var(--color-text-main)'
};

const tdStyle = {
    padding: '0.75rem 1rem',
    color: 'var(--color-text-main)'
};

export default DiaryList;