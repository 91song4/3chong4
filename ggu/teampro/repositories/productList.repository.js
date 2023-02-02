const { product } = require("../models/product");

class ProductListRepository {
    findProductAll = async () => {
        const productList = await product.findAll();

        return productList
    }
};

module.exports = ProductListRepository;