const ProductListRepository = require("../repositories/productList.repository");

class ProductListService {
    productListRepository = new ProductListRepository();

    findProductAll = async () => {
        const productList = await this.productListRepository.findProductAll();

        return productList;
    };
}

module.exports = ProductListService;
