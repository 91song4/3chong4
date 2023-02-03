const ProductEditService = require("../services/productEdit.services");

class ProductEditController {
    productEditService = new ProductEditService();

    productEdit = async (req, res, next) => {
        const { image, name, info, price } = req.body;
        const { productId } = req.params;
        const productEditData = await this.productEditService.productEdit(image, name, info, price, productId);

        res.status(201).json({ data: productEditData })
    }
};

module.exports = ProductEditController;