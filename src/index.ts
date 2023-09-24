// index.ts
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { resolvers } from "@generated/type-graphql"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = async () => {
  const schema = await tq.buildSchema({ resolvers })

  const context = () => {
    return {
      prisma
    }
  }

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: <http://localhost:4000>')
  )
}

app()
