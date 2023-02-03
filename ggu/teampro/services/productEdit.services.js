const ProductEditRepository = require("../repositories/productEdit.repository");

class ProductEditService {
    productEditRepository = new ProductEditRepository();

    productEdit = async (image, name, info, price, productId) => {
        const productEditData = await this.productEditRepository.productEdit(image, name, info, price, productId);

        return productEditData;
    }
};

module.exports = ProductEditService;