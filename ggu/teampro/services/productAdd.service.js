const ProductAddRepository = require("../repositories/productAdd.repository");

class ProductAddService {
    productAddRepository = new ProductAddRepository();

    productAdd = async (image, name, info, price) => {
        const productAddData = await this.productAddRepository.productAdd(image, name, info, price);

        return productAddData;
    }
};

module.exports = ProductAddService;