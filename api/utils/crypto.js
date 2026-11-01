import crypto from 'crypto';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // 32바이트 (환경 변수)
const IV_LENGTH = 16; // AES는 항상 16바이트 IV 사용

export function decrypt(text) {
    if (!text) return '';

    try {
        // 1. 저장된 형태("iv:encryptedData")에서 iv와 암호문 분리
        const textParts = text.split(':');
        const iv = Buffer.from(textParts.shift(), 'hex');
        const encryptedText = Buffer.from(textParts.join(':'), 'hex');

        // 2. 대칭키와 iv를 이용해 복호화 객체 생성
        const decipher = crypto.createDecipheriv(
            'aes-256-cbc',
            Buffer.from(ENCRYPTION_KEY),
            iv
        );

        // 3. 복호화 실행
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();
    } catch (error) {
        console.error('Decryption failed:', error);
        return '복호화 실패'; // 또는 마스킹 처리된 문자열 반환
    }
}