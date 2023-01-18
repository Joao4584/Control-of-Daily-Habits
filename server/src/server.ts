import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

/**
 *  Método HTTP: Get, Post, Put, Patch, Delete
 */

app.get('/hello', async () => {
    const habits = await prisma.habit.create({
        where: {
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})


app.listen({
    port: 4584,
}).then(() => {
    console.log('HTTP Server running!');
})