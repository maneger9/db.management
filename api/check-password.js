export default function handler(req, res) {
    // CORS 허용 설정 (필요한 경우)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: '허용되지 않는 메서드입니다.' });
    }

    const { password } = req.body;
    // Vercel 대시보드(Settings > Environment Variables)에 등록된 비밀번호를 가져옴
    const DIARY_PASSWORD = process.env.DIARY_PASSWORD;
    console.log("현재 설정된 비밀번호:", process.env.DIARY_PASSWORD);
    console.log("사용자가 입력한 비밀번호:", password);
    console.log("사용자가 입력한 비밀번호 DIARY_PASSWORD :", DIARY_PASSWORD);

    if (password === DIARY_PASSWORD) {
        return res.status(200).json({ success: true, message: '비밀번호 일치' });
    } else {
        return res.status(401).json({ success: false, message: '비밀번호가 틀렸습니다.' });
    }
}