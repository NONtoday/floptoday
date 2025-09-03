import { FastifyInstance } from "fastify";
import { prisma } from "@/utils/prisma";

export default async function resultatenRoute(server: FastifyInstance) {
  server.get("/rest/v1/resultaten/huidigVoorLeerling/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    return { leerlingId: id, items: [] }; // op dit moment mock response
  });
}