const PaymentListRepository = require("../repositories/paymentList.repository");

class PaymentListService {
    paymentListRepository = new PaymentListRepository();

    findPaymentAll = async () => {
        const PaymentList = await this.paymentListRepository.findPaymentAll();

        return PaymentList
    }
}

module.exports = PaymentListService;