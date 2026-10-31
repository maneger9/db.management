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
        const { name, phone, path, status, startDate, endDate, content } = req.query;

        // 1. user_db 검색 조건 설정
        const userWhere = {};
        if (name) {
            userWhere.name = { contains: name, mode: 'insensitive' }; // 대소문자 무시 검색
        }
        if (phone) {
            userWhere.phone = { contains: phone };
        }
        if (path) {
            userWhere.path = path;
        }
        if (status) {
            userWhere.status = status;
        }

        // 2. user_note (다이어리) 내부 검색 조건 설정
        const noteWhere = {};
        if (startDate || endDate) {
            noteWhere.date = {};
            if (startDate) noteWhere.date.gte = startDate; // 이상
            if (endDate) noteWhere.date.lte = endDate;     // 이하
        }
        if (content) {
            noteWhere.content = { contains: content, mode: 'insensitive' };
        }

        // 3. Prisma를 통한 조인 및 데이터 조회
        const users = await prisma.user_db.findMany({
            where: userWhere,
        });

        // 프론트엔드가 기존에 사용하던 구조(diaries 이름)로 매핑해서 전달
        const formattedResult = users.map(user => ({
            id: user.id,
            name: user.name,
            phone: user.phone,
            path: user.path,
            status: user.status,
            diaries: user.user_note.map(note => ({
                id: note.id,
                date: note.date,
                content: note.content
            }))
        }));

        return res.status(200).json(formattedResult);
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}