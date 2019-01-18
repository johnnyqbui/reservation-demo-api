import { ApolloServer } from 'apollo-server'
import { resolvers, typeDefs } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  introspection: true,
  playground: true,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});