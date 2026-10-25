import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// 간단한 암호화 유틸리티 예시 (실무에서는 환경 변수 키 사용 권장)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;

function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, inflowDate, path, phone, carModel, status } = req.body;

        // 💡 연락처 암호화 실행
        const encryptedPhone = encrypt(phone);

        // Prisma를 이용해 DB에 저장
        const newUser = await prisma.user_db.create({
            data: {
                name : name,
                phone: encryptedPhone, // 암호화된 연락처 저장
                into_date : inflowDate,
                into_path : path,
                step : status,
                notice_car : carModel,
            },
        });

        return res.status(200).json({ success: true, data: newUser });
    } catch (error) {
        console.error('DB Insert Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}