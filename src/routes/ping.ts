import { FastifyInstance } from "fastify";

export default async function pingRoute(server: FastifyInstance) {
  server.get("/ping", async () => {
    const start = Date.now();

    const duration = Date.now() - start;
    return `pong! ${duration}ms\n`;
  });
}