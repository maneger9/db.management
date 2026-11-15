import { PrismaClient } from '@prisma/client';
import { encryptECB } from './utils/crypto.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { name, inflowDate, path, phone, carModel, status } = req.body;

        const searchUser = await prisma.user_db.findFirst({
            where: {
                name: name,
                phone: encryptECB(phone),
                del_yn: 'N'
            }
        });

        if(searchUser != null) {
            return res.status(405).json({ message: '이미 저장한 DB 입니다.' });
        }

        // Prisma를 이용해 DB에 저장
        const newUser = await prisma.user_db.create({
            data: {
                name : name,
                phone: encryptECB(phone), // 암호화된 연락처 저장
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