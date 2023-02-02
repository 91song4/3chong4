const AdminProductListService = require("../services/adminProductList.service");

class AdminProductListController {
    adminProductListService = new AdminProductListService();

    findProductList = async() => {
        const productList = await this.adminProductListService();

        return productList
    }
}

module.exports = AdminProductListController;