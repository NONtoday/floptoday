import { FastifyInstance } from "fastify";

// https://github.com/elisaado/somtoday-api-docs/blob/master/Authentication.md#authentication-by-mimicking-the-somtoday-appwebapp
// https://github.com/DVDdisk7/SomtodayLogin/blob/v1.1.0/src/main/index.ts

export default async function route(server: FastifyInstance) {
  server.get("/oauth2/authorize", async () => {

  });
}