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

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => console.log(err));

//MIIEpAIBAAKCAQEAm0lVrMwY55q10Oy3yZHJpOV1cmU9NwrbS0FahKQbkCIPPHqo
// AlXnJNlv2WzCcojOZVc/M3LNy2oQpjpstUkZ9VnV8YstZAyzftVC19bz5ANDs+0t
// m/F3EPzl3PCipbSGlJNwcowYl4p6krcrYCdlZxT+qOS82kxWMHWmg1EvC3eis65A
// Z/T1CKBqYfdSKWO6KBhkt5Ys4luQZJP90px06PEU2rdOQDFWk2ahFs8rKD1BUCCO
// s7hYw71zZoqpuYMEPJjqf+RXlXHOhV1t//c81ZzEyeBqKWP3N0L0mBNBsCb+JK0H
// bnGYqoaYnae+FeHQ1mXBLYDAXrknyMhyDSdRQwIDAQABAoIBAHiICpUucmJLBrcd
// FmbB30c7x9a8WDCCH8cg+hacnrxYg4UJG6F8dgZ3M8cLET7/i1zDxM21XaF3OWcd
// UEXCcQCs81AiHGBdL3HSLKkGMpaYJhPhlBZH7YhlFDJTIZwHLLLkYlK3BVuS5CM/
// Q87FpYLGnAgSS7gRqpDAsTeaay61OWanBWGSKsRNfZXZriuBgsmTkdM6JjoZoQQK
// 9zNJnCFu4tSj/vf5sunH8LKIkggcObIvcpRu9AiCAZF8LrkBzChOc0IyUNA7rfjI
// +ULYhyr3TrCrs5pQJ4cplm2ByiNSkeERor8GKEjppviSiiNCtZL4DK2BAeullCmH
// iy+Oo9kCgYEA8eGaHwqlfvbpyn7WxX8clHiefd3/X46BMU8z+DCnrjapu8Au0dZ5
// 8HeHMoeB3MSX+sCiOLtsQkkzp5j114ObIFZEXHBFYoRhhCuGfxjUChXQJZbodMAh
// FUfX6P30xqGWyyo6Y3svig5D1/4qT3Xv++SnrbshXd7iM/Tvk1RtmLUCgYEApFnC
// OHshZEWTz19b5Jzfc0quyqs1mKu/OGZqAV0gjArAJc81ANRDCYNKx0k3sZO67TNl
// u6H7ReSUH1sSgfSuem6wVJYSf8u3xau9RF3FPuuhWpc1rR+v0+H+7GJ+TUulBdK9
// D/7UDKHbdIj07RQKfK4oTfJ7fUTn+n10gfJA1RcCgYAzfHAP93YuxmQRZFpXA62T
// tPEXna+EKZM6ab+ILuMiZCRRAKF2rQ6brvWqPcnYskgfae2d4dczbN1/6UE7NJpK
// kdJPUt6SD9eqCJHCcAiCdQ4vUiX85ACmxPoicBwwQ6kTadOv5ULDQjISwdlDvLju
// h0dh5Zk+n/jKUnLEi44gmQKBgQCCnH64ikpAOPc934fVCEKgimKc2DGQ8jTWarWl
// /c+m28hWg/SYgxf/kGK2O97R9hig967KzfE2W3DH9oWf18dtr1fc8SMkgs66fkC8
// +1SNK4+gwfi7bCo81ibUz3WWkh5EoXT1KEx2+Y7BbzJO0xV+fp2zTJiNNlyxelBE
// ETUq4wKBgQDjQ6OTW3+N2ro0SjRLChMGLkgUzkjzjNc+JMXx81IY4Mtm6WcdgGpR
// 8NEijJnWl09PBt1CKuqBxLhK5+FC4dpFdIEpp39z4ddwwTFnQ3/lQYdz/XatdpxQ
// zWkqdMgpTVGt+E2T+plPeyofKSavH+ZsZxnZW1WhYkIM9YNQmcmevA==
