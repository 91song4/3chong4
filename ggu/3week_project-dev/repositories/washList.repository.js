const { wash_list, shop } = require("../models");

class WashListRepository {
  findWashAll = async () => {
    try {
      const washList = await wash_list.findAll({
        where: { status: 0 },
      });

      return washList;
    } catch (error) {
      throw error;
    }
  };

  statusUpdate = async (shop_id, wash_id, status) => {
    const statusUpdate = await wash_list.update(
      { shop_id, status },
      { where: { wash_id } }
    );
    return statusUpdate;
  };

  shopStatusUpdate = async (shop_id, shop_status) => {
    console.log("레퍼짓 shop_status = ", shop_status);
    const shopStatusUpdate = await shop.update(
      { shop_status },
      { where: { shop_id } }
    );
    return shopStatusUpdate;
  };
}

module.exports = WashListRepository;
