import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'
import cors from 'cors'

const PORT = process.env.PORT || 4000
const app = express()

// app.use(cors())

// app.use((req, res, next) => {
//   const token = req.get('Authorization')

//   if (token) {
//     req.token = token
//     next()
//   } else {
//     res.status(403).send({
//       error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
//     })
//   }
// })

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  // mocks: true
})

server.applyMiddleware({ app })

app.get('/', (req, res) => {
  res.send({ hello: 'there!' })
})

app.listen(PORT, () =>
  console.log(`Listening at http://localhost:${PORT}/graphql`)
)