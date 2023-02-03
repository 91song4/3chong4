const ProductDeleteService = require("../services/productDelete.service");

class ProductDeleteController {
    productDeleteService = new ProductDeleteService();

    productDelete = async (req, res, next) => {
        const { productId } = req.params;
        const productDeleteData = await this.productDeleteService.productDelete(productId);

        res.status(201).json({ data: productDeleteData })
    }
};

module.exports = ProductDeleteController;