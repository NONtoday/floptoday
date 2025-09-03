import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { prisma } from "@/utils/prisma";

const testDbRoute: FastifyPluginAsync = async (server: FastifyInstance) => {
  server.get("/test-db", async () => {
    try {
      await prisma.$connect();
      return { status: "ok", message: "✅ Database connection successful!" };
    } catch (error) {
      return { status: "error", message: "❌ Database connection failed", error };
    } finally {
      await prisma.$disconnect();
    }
  });
};

export default testDbRoute;
