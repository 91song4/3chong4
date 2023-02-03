const { product } = require("../models");

class AdminProductListRepository {
    findProductList = async () => {
        console.log("1234")
        const productList = await product.findAll();
        console.log(productList, 321)
        return productList
    }
}

module.exports = AdminProductListRepository;