import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'

const PORT = 8000
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  introspection: true,
  playground: true,
})

const app = express()

server.applyMiddleware({app, path: '/graphql'})

app.get('/api/status', ((req, res) => {
  res.send({status: 'ok'})
}))

app.listen({ port: PORT },() => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
})