const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // JSON 요청 바디 파싱

// 💡 다이어리 비밀번호 설정 (원하는 비밀번호로 변경하세요)
const DIARY_PASSWORD = process.env.DIARY_PASSWORD;

// 비밀번호 검증 API
app.post('/api/check-password', (req, res) => {
    const { password } = req.body;

    if (password === DIARY_PASSWORD) {
        // 비밀번호 일치 시 성공 응답
        return res.json({ success: true, message: '인증 성공' });
    } else {
        // 비밀번호 불일치 시 401 에러 응답
        return res.status(401).json({ success: false, message: '비밀번호가 올바르지 않습니다.' });
    }
});

app.listen(PORT, () => {
    console.log(`백엔드 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});