const ProductListService = require("../services/productList.service");

class ProductListController {
    productListService = new ProductListService();

    findProductAll = async (req, res, next) => {
        const productList = await this.productListService.findProductAll();

        res.status(201).json({ data: productList });
    }
}

module.exports = ProductListController;