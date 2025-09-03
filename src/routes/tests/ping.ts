import { FastifyInstance } from "fastify";

export default async function pingRoute(server: FastifyInstance) {
  server.get("/ping", async () => {
    return { status: "ok", message: "pong" };
  });
}