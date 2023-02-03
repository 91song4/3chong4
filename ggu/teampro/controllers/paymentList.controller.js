const PaymentListService = require("../services/paymentList.service");

class PaymentListController {
    PaymentListService = new PaymentListService();

    findPaymentAll = async (req, res, next) => {
        const PaymentList = await this.PaymentListService.findPaymentAll();

        res.status(201).json({ data: PaymentList })
    }
}

module.exports = PaymentListController;