const { product } = require("../models");

class ProductEditRepository {
    productEdit = async (image, name, info, price, productId) => {
        const productEditData = await product.update({
            image,
            name,
            info,
            price,
        },{
            where: { productId: productId },
        });
        return productEditData;
    }
};

module.exports = ProductEditRepository;