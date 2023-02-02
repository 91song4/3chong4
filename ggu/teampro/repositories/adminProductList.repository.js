const { product } = require("../models/product");

class AdminProductListRepository {
    findProductList = async () => {
        const productList = await asd.findAll();

        return productList
    }
}

module.exports = AdminProductListRepository;