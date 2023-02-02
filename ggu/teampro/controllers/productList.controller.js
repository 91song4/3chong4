const ProductListService = require("../services/productList.service");

class ProductListController {
    productListService = new ProductListService();

    findProductAll = async (req, res, next) => {
        productList = await this.productListService.findProductAll();

        resizeBy.status(201).json({ data: findProductAll })
    }
}

module.exports = ProductListController;