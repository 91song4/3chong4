const AdminProductListRepository = require("../repositories/adminProductList.repository");

class AdminProductListService {
    adminProductListRepository = new AdminProductListRepository();

    findProductList = async () => {
        const productList = await this.adminProductListRepository

        return productList
    }
}

module.exports = AdminProductListService;