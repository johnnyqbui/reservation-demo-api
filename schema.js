import { gql } from 'apollo-server-express'
import reservationModel from './models.js'

export const typeDefs = gql`
  type Reservation {
    id: ID!,
    name: String,
    hotelName: String,
    arrivalDate: String,
    departureDate: String
  }

  type Query {
    reservations: [Reservation]
    reservation(id: ID!): Reservation
  }

  type Mutation {
    createReservation(
      id: ID!,
      name: String!,
      hotelName: String,
      arrivalDate: String,
      departureDate: String
    ): Reservation
  }
`

export const resolvers = {
  Query: {
    reservations: () => reservationModel.getAll(),
    reservation: (source, { id }) => reservationModel.get(id)
  },

  Mutation: {
    createReservation: (source, args) => {
      return reservationModel.create(args)
    }
  }
}