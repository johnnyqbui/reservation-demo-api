import { gql } from 'apollo-server-express'
import { reservations } from './models.js'

export const typeDefs = gql`
  type reservations {
    id: ID!,
    name: String,
    hotelName: String,
    arrivalDate: String,
    departureDate: String
  }

  type Query {
    status: String
    reservations: [reservations]
    reservation(id: ID!): reservations
  }

  type Mutation {
    createReservation(
      id: ID!,
      name: String!,
      hotelName: String,
      arrivalDate: String,
      departureDate: String
    ): reservations
  }
`

export const resolvers = {
  Query: {
    reservations: () => {
      return reservations
    },
    reservation: (source, { id }) => data.reservations.find(reservation => reservation.id === id)
  },

  Mutation: {
    createReservation: (source, args) => {
      return reservations.create(args)
    }
  }
}