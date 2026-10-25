import React, { useState } from 'react';
import { PATH_OPTIONS, STATUS_OPTIONS } from '../constants/options';

function RegisterUser({ onCancel, onSuccess }) {
    // 입력폼 상태 관리
    const [formData, setFormData] = useState({
        name: '',
        inflowDate: '',
        path: PATH_OPTIONS[0].value,     // 기본값 첫 번째 항목
        phone: '',
        carModel: '',
        status: STATUS_OPTIONS[0].value  // 기본값 첫 번째 항목
    });

    const [loading, setLoading] = useState(false);

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.phone) {
            alert('이름과 연락처는 필수 입력 항목입니다.');
            return;
        }

        setLoading(true);
        try {
            // 백엔드 API 호출 (연락처는 백엔드나 전송 직전 암호화 처리 진행)
            const response = await fetch('/api/saveUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('등록 중 오류가 발생했습니다.');
            }

            alert('DB가 성공적으로 등록되었습니다.');
            if (onSuccess) onSuccess(); // 성공 시 목록으로 이동 또는 새로고침
        } catch (error) {
            console.error('Register Error:', error);
            alert('등록에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">신규 DB 등록</h2>

            <form onSubmit={handleSubmit} className="register-form">
                {/* 이름 */}
                <div className="form-group">
                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름을 입력하세요"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                {/* 유입일 (캘린더) */}
                <div className="form-group">
                    <label>유입일</label>
                    <input
                        type="date"
                        name="inflowDate"
                        value={formData.inflowDate}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* 유입경로 (SelectBox - Enum 연동) */}
                <div className="form-group">
                    <label>유입경로</label>
                    <select
                        name="path"
                        value={formData.path}
                        onChange={handleChange}
                        className="form-select"
                    >
                        {PATH_OPTIONS.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 연락처 (저장 시 암호화 대상) */}
                <div className="form-group">
                    <label>연락처</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="010-0000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        required
                    />
                </div>

                {/* 문의차량 */}
                <div className="form-group">
                    <label>문의차량</label>
                    <input
                        type="text"
                        name="carModel"
                        placeholder="문의 차량 모델 입력"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="form-input"
                    />
                </div>

                {/* 상담단계 (SelectBox - Enum 연동) */}
                <div className="form-group">
                    <label>상담단계</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="form-select"
                    >
                        {STATUS_OPTIONS.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 버튼 영역 */}
                <div className="button-group">
                    <button type="button" onClick={onCancel} className="btn-cancel">
                        취소
                    </button>
                    <button type="submit" disabled={loading} className="btn-submit">
                        {loading ? '저장 중...' : '저장하기'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;