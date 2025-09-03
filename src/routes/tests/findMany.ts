import { FastifyInstance  } from "fastify";
import { prisma } from "@/utils/prisma"


export default async function findManyRoute(server: FastifyInstance) {
    server.get("/returnusers", async (request, reply) => {
        const users = await prisma.user.findMany();
        return users;
    });
}