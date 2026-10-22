import { useState } from 'react'
import './App.css'
import Settings from './components/Settings'

function App() {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // 💡 메인 화면 메뉴(탭) 상태 관리: 기본값 1번째 메뉴 ('diary')
    const [activeTab, setActiveTab] = useState('setting');

    // 비밀번호 제출 처리 함수
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!password.trim()) {
            setErrorMessage('비밀번호를 입력해 주세요.');
            return;
        }

        setIsLoading(true);
        setErrorMessage('');

        try {
            const response = await fetch('/api/check-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsAuthenticated(true); // 인증 성공
                setActiveTab('setting');    // 진입 시 첫 번째 메뉴로 초기화
            } else {
                setErrorMessage(data.message || '비밀번호가 틀렸습니다.');
            }
        } catch (error) {
            console.error('로그인 에러:', error);
            setErrorMessage('서버와의 통신에 실패했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    // 잠그기 (로그아웃) 처리
    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword('');
        setActiveTab('setting');
    };

    // 1. 비밀번호 입력 (로그인) 화면
    if (!isAuthenticated) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh'
            }}>
                <div className="diary-card" style={{ width: '100%', maxWidth: '500px', textAlign: 'center' }}>
                    <h1 className="diary-title-main" style={{ fontSize: 'var(--font-2xl)' }}>비밀번호를 입력해야 진입할 수 있습니다.</h1>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <input
                            type="password"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: '0.75rem',
                                fontSize: 'var(--font-base)',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)',
                                outline: 'none'
                            }}
                            autoFocus
                        />

                        {errorMessage && (
                            <p style={{ color: '#EF4444', fontSize: 'var(--font-sm)', margin: 0 }}>
                                {errorMessage}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isLoading}
                            style={{ padding: '0.75rem', marginTop: '0.5rem' }}
                        >
                            {isLoading ? '확인 중...' : '입력'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // 2. 인증 완료 후 메인 화면
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* 상단 헤더 영역 */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem'
            }}>
                <h1 className="diary-title-main" style={{ margin: 0 }}>상담 관리</h1>
                <button className="btn-secondary bg_col" onClick={handleLogout}>
                    로그아웃
                </button>
            </header>

            <main>
                {activeTab === 'setting' && <Settings />}
            </main>
        </div>
    );
}

export default App;