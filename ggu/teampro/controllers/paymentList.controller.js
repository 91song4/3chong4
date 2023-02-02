const PaymentListService = require("../services/paymentList.service");

class PaymentListController {
    PaymentListService = new PaymentListService();

    findPaymentAll = async () => {
        const PaymentList = await this.PaymentListService.findPaymentAll();

        return PaymentList
    }
}

module.exports = PaymentListController;