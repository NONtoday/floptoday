import { FastifyInstance } from "fastify";
import { prisma } from "../../utils/prisma";

export default async function registrationsRoute(server: FastifyInstance) {
  server.get("/registraties", async () => {
    try {
      await prisma.$connect();
      return { status: "ok", message: "✅| Database Is Up And Running (rooster werkt)" };
    } catch (error) {
      return { status: "error", message: "❌| Problemen bij het laden van het rooster", error };
    } finally {
      await prisma.$disconnect();
    }
  });
}
