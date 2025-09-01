import fastify from 'fastify'
import pingRoute from './routes/ping'


const server = fastify()

server.register(pingRoute);

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`ℹ️ | FlopToday backend luistert op ${address}`)
})