import fastify from 'fastify'
import fs from 'fs';
import path from 'path';

const server = fastify()

// Dynamisch alle routes registreren
function registerRoutes(dir: string) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      registerRoutes(fullPath)
    } else if (file.endsWith('.ts')) {
      try {
        const route = require(fullPath).default
        server.register(route)
      } catch (err) {
        console.error(`❌ | Oeps! Gefaald met route ${fullPath} te registreren, met fout:`, err)
      }
    }
  })
}

registerRoutes(path.join(__dirname, 'routes'))

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`ℹ️  | FlopToday backend luistert op ${address}`)
})