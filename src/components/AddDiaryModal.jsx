import React, { useState } from 'react';

function AddDiaryModal({ userSeq, userName, onClose, onSuccess }) {
    const todayStr = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(todayStr);
    const [content, setContent] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!content.trim()) {
            alert('상담 내용을 입력해주세요.');
            return;
        }

        setSubmitting(true);
        try {
            // 전달받은 userSeq 값을 활용하여 해당 사용자의 이력 저장 API 호출
            const response = await fetch(`/api/addNotice`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userSeq, date, content }),
            });

            if (!response.ok) {
                throw new Error('기록 저장 실패');
            }

            alert('기록 추가하였습니다.');
            onSuccess(); // 성공 시 모달 닫기 및 데이터 새로고침
        } catch (error) {
            console.error('기록을 추가하는 중 오류가 발생했습니다:', error);
            alert('기록 추가에 실패했습니다.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" style={modalOverlayStyle}>
            <div className="modal-content" style={modalContentStyle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0 }}>📝 [{userName}] 상담 기록 추가</h3>
                    <button type="button" onClick={onClose} style={closeBtnStyle}>✕</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 'bold' }}>날짜</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="form-input"
                            style={{ width: '100%', padding: '0.5rem' }}
                            required
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.4rem', fontWeight: 'bold' }}>상담 내용</label>
                        <textarea
                            placeholder="상담 내용을 입력하세요..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="form-input"
                            rows={5}
                            style={{ width: '100%', padding: '0.5rem', resize: 'vertical' }}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button type="button" className="btn-set" onClick={onClose} style={{ background: '#ccc', color: '#333' }}>
                            취소
                        </button>
                        <button type="submit" className="btn-set" disabled={submitting}>
                            {submitting ? '저장 중...' : '저장'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// 모달 스타일 정의
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
    maxWidth: '90%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
};

const closeBtnStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
};

export default AddDiaryModal;