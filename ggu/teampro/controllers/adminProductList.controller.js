const AdminProductListService = require("../services/adminProductList.service");

class AdminProductListController {
    adminProductListService = new AdminProductListService();

    findProductList = async (req, res, next) => {
        const productList = await this.adminProductListService.findProductList();

        res.status(201).json({ data: productList })
    }
}

module.exports = AdminProductListController;