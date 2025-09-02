import { FastifyInstance } from "fastify";

// in-memory cache for organisaties
const CACHE_TTL = 1000 * 60 * 60 * 24; // 1 day
let cachedOrganisaties: any = null;
let cacheTimestamp = 0;

export default async function organisatiesRoute(server: FastifyInstance) {
  server.get("/organisaties.json", async () => {
    const now = Date.now();
    if (cachedOrganisaties && now - cacheTimestamp < CACHE_TTL) {
      return cachedOrganisaties;
    }
    try {
      const response = await fetch("https://raw.githubusercontent.com/NONtoday/organisaties.json/refs/heads/main/organisaties.json");
      const organisatiesJson = await response.json();
      cachedOrganisaties = organisatiesJson;
      cacheTimestamp = Date.now();
      return organisatiesJson;
    } catch (error) {
      return { status: "error", message: "❌| Problemen bij het laden van de organisaties", error };
    }
  });
}