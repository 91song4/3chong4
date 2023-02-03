const ProductAddService = require("../services/productAdd.service");

class ProductAddController {
    productAddService = new ProductAddService();

    productAdd = async (req, res, next) => {
        const { image, name, info, price } = req.body;

        const productAddData = await this.productAddService.productAdd(image, name, info, price);

        res.status(201).json({ data: productAddData });
    };
}

module.exports = ProductAddController;