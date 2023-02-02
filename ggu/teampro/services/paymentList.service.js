const PaymentListRepository = require("../repositories/paymentList.repository");

class PaymentListService {
    PaymentListRepository = new PaymentListRepository();

    findPaymentAll = async () => {
        const PaymentList = await this.PaymentListRepository.findPaymentAll();

        return PaymentList
    }
}

module.exports = PaymentListService;