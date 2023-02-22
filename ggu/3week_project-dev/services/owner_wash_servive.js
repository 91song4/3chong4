const OwnerWashRepository = require("../repositories/owner_wash.repository");
const { wash_list, user } = require("../models");

class OwnerWashService {
  ownerWashRepository = new OwnerWashRepository(wash_list);

  findOwnerWashById = async (wash_id, shop_id) => {
    console.log("2");
    // console.log("res.locals.user = ", res.locals.user);
    // const { shop_id } = res.locals.user;
    console.log("2-1");

    const findWashData = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    if (findWashData.shop_id !== shop_id) {
      // console.log("findWashData.shop_id =", findWashData.shop_id);
      // console.log("shop_id =", shop_id);
      return res.status(400).json({ success: false });
    }
    const findUserData = await this.ownerWashRepository.findUserWashById(
      wash_id
    );
    return {
      wash_id: findWashData.wash_id,
      status: findWashData.status,
      extra: findWashData.extra,
      image: findWashData.image,
      createdAt: findWashData.createdAt,
      updatedAt: findWashData.updatedAt,
      user_id: findWashData.user_id,
      nickname: findUserData.user.nickname,
      address: findUserData.user.address,
      phone_number: findUserData.user.phone_number,
      // test 코드용
      // nickname: findUserData.nickname,
      // address: findUserData.address,
      // phone_number: findUserData.phone_number,
    };
  };

  statusUpdate = async (wash_id, status) => {
    const findWash = await this.ownerWashRepository.findOwnerWashById(wash_id);
    if (!findWash) throw new Error("Wash_list doesn't exist");

    const statusUpdate = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    let updateStatus = "";
    if (statusUpdate.status === 1) {
      updateStatus = 2;
    }
    if (statusUpdate.status === 2) {
      updateStatus = 3;
    }
    if (statusUpdate.status === 3) {
      updateStatus = 4;
    }
    if (statusUpdate.status === 4) {
      // 상태 업데이트 버튼 숨기기
    }

    await this.ownerWashRepository.statusUpdate(wash_id, updateStatus);
    return {
      wash_id: statusUpdate.wash_id,
      status: updateStatus,
    };
  };
}

module.exports = OwnerWashService;
