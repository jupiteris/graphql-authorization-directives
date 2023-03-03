import { ApolloServer } from 'apollo-server';
import User from './User';
import Message from './Message';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import AuhtDirective from './AuthDirective';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuhtDirective,
  },
  context: ({ req }) => {
    const token = req.headers.authorization;
    console.log(token)
    const currentUser = User.getUserByToken(token);
    return { user: currentUser, User, Message }
  },
});

server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));



// const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

// console.log(`🚀 Server listening at: ${url}`);
