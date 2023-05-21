require("dotenv").config();

const config = {
  mongodb: {
    url: process.env.MONGODB_URL || "mongodb://localhost:27017/product",
  },
  server: {
    port: process.env.PORT || 4000,
  },
  awsS3: {
    awsAdmin:
      "8a13e7c0d0106894f6dac0eb8fa400f4e10df93e63af57714f3039856caa2db0",
    region: process.env.AWS_REGION || "ap-northeast-2",
    accessKeyId: process.env.AWS_ACCESSKEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESSKEY || "",
  },
};

module.exports = config;
