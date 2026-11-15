import { PrismaClient } from '@prisma/client';
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
        const { userSeq, date, content } = req.body;

        // Prisma를 이용해 DB에 저장
        const newUser = await prisma.user_note.create({
            data: {
                user_db_seq : userSeq,
                tell_date: date, // 암호화된 연락처 저장
                content : content
            },
        });

        return res.status(200).json({ success: true, data: newUser });
    } catch (error) {
        console.error('DB Insert Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}