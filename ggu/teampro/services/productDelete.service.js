const ProductDeleteRepository = require("../repositories/productDelete.repository");

class ProductDeleteService {
    productDeleteRepository = new ProductDeleteRepository();

    productDelete = async (productId) => {
        const productDeleteData = await this.productDeleteRepository.productDelete(productId);

        return productDeleteData;
    }
};

module.exports = ProductDeleteService;