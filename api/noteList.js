import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { seq, startDate, endDate, content } = req.query;

        // 2. user_note (다이어리) 내부 검색 조건 설정
        const noteWhere = {};
        noteWhere.user_db_seq = Number(seq);
        noteWhere.del_yn = "N";
        if (startDate || endDate) {
            noteWhere.tell_date = {};
            if (startDate) noteWhere.tell_date.gte = startDate; // 이상
            if (endDate) noteWhere.tell_date.lte = endDate;     // 이하
        }
        if (content) {
            noteWhere.content = { contains: content, mode: 'insensitive' };
        }

        // 3. Prisma를 통한 조인 및 데이터 조회
        const userNotes = await prisma.user_note.findMany({
            where: noteWhere,
            orderBy: [
                { tell_date: 'asc' },
                { create_date: 'asc' },
            ]
        });

        // 프론트엔드가 기존에 사용하던 구조(diaries 이름)로 매핑해서 전달
        const formattedResult = userNotes.map(note => ({
            date: note.tell_date,
            content: note.content
        }));

        return res.status(200).json(formattedResult);
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}