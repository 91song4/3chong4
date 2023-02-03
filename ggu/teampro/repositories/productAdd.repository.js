const { product } = require("../models");

class ProductAddRepository {
    productAdd = async (image, name, info, price) => {
        const productAddData = await product.create({
            image,
            name,
            info,
            price
        });
        
        return productAddData;
    }
}

module.exports = ProductAddRepository;