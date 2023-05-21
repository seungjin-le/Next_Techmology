const Product = require("../models/Product.js");
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const { awsS3 } = require("../config/config");

const s3 = new AWS.S3({
  accessKeyId: awsS3.accessKeyId,
  secretAccessKey: awsS3.secretAccessKey,
  region: awsS3.region,
});

// AWS S3이미지 업로드 요청
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "testimagesstorage",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      const ext = file.mimetype.split("/")[1];
      if (!["png", "jpg", "jpeg", "gif", "bmp"].includes(ext)) {
        return cb(new Error("Only images are allowed"));
      }
      cb(
        null,
        "images/" + Date.now() + "." + file.originalname.split(".").pop()
      );
    },
  }),
  acl: "public-read-write",
});
exports.uploadProductImage = upload.single("productImage");

// 상품 생성
exports.createProduct = async (req, res) => {
  console.log(req);
  try {
    // JSON으로 데이터를 보낼떄
    const { productId, productName, description, price } = req.body;

    // if (description.length > 60)
    //   return res
    //     .status(400)
    //     .send({ message: "Description length exceeds limit." });

    const productImage = req.file ? req.file.location : "";

    // 상품 데이터 생성
    const product = new Product({
      productId,
      productName,
      description,
      price,
      productImage,
    });
    console.log(product);
    // 상품 저장
    await product.save();

    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 제품 검색
exports.getProducts = async (req, res) => {
  // 페이지 계산
  // const page = parseInt(req.query.page || "1", 10);

  try {
    // 데이터베이스에서 모든 제품을 조회
    const products = await Product.find();

    // 10개씩 보여주기
    // const products = await Product.find()
    //   .limit(10)
    //   .skip((page - 1) * 10)
    //   .exec();

    res.status(200).json({ length: products.length, products });
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
};

// 제품 상세 검색
exports.getDetailProducts = async (req, res) => {
  const { id } = req.params;

  try {
    // 모든 제품을 데이터베이스에서 조회
    const product = await Product.findById(id).exec();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
};

// 제품 데이터 수정
exports.upDateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // 데이터 수정
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    if (!product) return (req.status = 404);
    console.log("update success");

    req.body = product;
    res
      .status(200)
      .json({ success: true, message: "Product update successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 데이터 삭제
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    // 데이터 삭제
    await Product.findByIdAndRemove(id).exec();
    console.log("delete success");
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
