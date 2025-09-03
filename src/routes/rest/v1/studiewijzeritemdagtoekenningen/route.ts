import { FastifyInstance } from "fastify";
import { prisma } from "@/utils/prisma";

export default async function studiewijzerItemDagtoekenningenRoute(server: FastifyInstance) {
  server.get("/rest/v1/studiewijzeritemdagtoekenningen", async (request, reply) => {
    const authHeader = request.headers['authorization'];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return reply.status(401).send({ error: "Unauthorized: No valid token" });
    }
    const token = authHeader.replace("Bearer ", "");
    return { message: "route working 👍", token };
  });
}
