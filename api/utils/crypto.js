import crypto from 'crypto';

// const KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const KEY = crypto.createHash('sha256').update(process.env.ENCRYPTION_KEY).digest();

export function encryptECB(text) {
    if (!text) return '';
    const cipher = crypto.createCipheriv('aes-256-ecb', KEY, null);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

export function decryptECB(encryptedText) {
    if (!encryptedText) return '';
    try {
        const decipher = crypto.createDecipheriv('aes-256-ecb', KEY, null);
        let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    } catch (error) {
        console.error('복호화 실패:', error);
        return ''; // 복호화 에러 시 빈 문자열 반환 등의 방어 코드
    }
}