// index.ts
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'

const app = async () => {
  const schema = await tq.buildSchema({})

  new ApolloServer({ schema }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: <http://localhost:4000>')
  )
}

app()
