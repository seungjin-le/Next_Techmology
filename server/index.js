const { ApolloServer, gql } = require("apollo-server");

const products = [];
// The GraphQL schema
const typeDefs = gql`
  type Product {
    productId: ID!
    product: String!
    price: Float!
    description: String
  }

  type Query {
    product(productId: ID): Product
    hello: String
    getProduct(productId: ID): Product
  }

  type Mutation {
    addProduct(product: String!, price: Float!, description: String): Product
  }
`;

const resolvers = {
  Query: {
    getProduct: (parent, args, context, info) => {
      return {
        productId: args.productId,
        product: args.product,
        price: 123.45,
        description: "This is a dummy product.",
      };
    },
    hello: () => "Hello",
  },
  Mutation: {
    addProduct: (parent, args, context, info) => {
      // 제품 추가
      const product = {
        productId: String(products.length + 1),
        product: args.product,
        price: args.price,
        description: args.description,
      };
      products.push(product);
      return product;
    },
  },
};

const server = new ApolloServer({
  cors: {
    origin: "https://studio.apollographql.com",
    credentials: true,
  },
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => console.log(err));
