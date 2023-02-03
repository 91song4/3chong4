const { orderInfo } = require("../models");

class PaymentListRepository {
    findPaymentAll = async () => {
        const paymentList = await orderInfo.findAll({
            
        });

        return paymentList;
    }
};

module.exports = PaymentListRepository;