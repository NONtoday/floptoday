import { FastifyInstance } from "fastify";
import { prisma } from "@/utils/prisma";

export default async function pingRoute(server: FastifyInstance) {
  server.get("/rest/v1/afspraken", async () => {
    return { "items": [] }; // op dit moment mock response
  });
}