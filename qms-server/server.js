const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

let questions = [
  {
    id: Date.now().toString(),
    body: 'Pergunta Teste Numero 1',
    a: 'Alternativa A',
    b: 'Alternativa B',
    c: 'Alternativa C',
    d: 'Alternativa D',
    e: 'Alternativa E',
    correctAnswer: 'a',
    createdAt: new Date().toLocaleString(),
    editedAt: ''
  }
];

const typeDefs = gql`
  type Query {
    questions: [Question]!
  }
  type Question {
    id: String
    body: String
    a: String
    b: String
    c: String
    d: String 
    e: String
    correctAnswer: String
    createdAt: String
    editedAt: String
  } 
  type Mutation {
    createQuestion(
      body: String!
      a: String!
      b: String!
      c: String!
      d: String!
      e: String!
      correctAnswer: String!
      createdAt: String
      editedAt: String
      ):String
    removeQuestion(id: String!):String
    updateQuestion(
      id: String! 
      body: String! 
      a: String! 
      b: String!
      c: String! 
      d: String! 
      e: String! 
      correctAnswer: String! 
      createdAt: String!
      ):String
  }
`;

const resolvers = {
  Query: {
    questions: () => questions,
  },
  Mutation: {
   createQuestion: (parent, args, context, info) => {
      return questions.push({
        id: Date.now().toString(),
        body: args.body,
        a: args.a,
        b: args.b,
        c: args.c,
        d: args.d,
        e: args.e,
        correctAnswer: args.correctAnswer,
        createdAt: new Date().toLocaleTimeString(),
      });
    },
    removeQuestion: (parent, args, context, info) => {      
      for (let i in questions) {
        if (questions[i].id === args.id) {
          questions.splice(i, 1);
        }
      }
      return args.id;
    },
    updateQuestion: (parent, args, context, info) => {
      for (let i in questions) {
        if (questions[i].id === args.id) {
          questions[i] = args;
          questions[i].editedAt = new Date().toLocaleString();
        }
      }
      return args.id;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(cors());

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);