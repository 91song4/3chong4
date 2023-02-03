const { product } = require("../models");

class ProductDeleteRepository {
    productDelete = async (productId) => {
        const productDeleteData = await product.destroy({
            where: { productId: productId }
        });
        return productDeleteData;
    }
};

module.exports = ProductDeleteRepository;