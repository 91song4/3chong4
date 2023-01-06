const UserViewRepository = require("../repositories/user_view.repository");
const { wash_list } = require("../models/wash_list.js");
const user = require("../models/user");

class UserViewService {
  userViewRepository = new UserViewRepository(wash_list);
  // 유저 화면
  findUserViewById = async (user_id) => {
    const findWashData = await this.userViewRepository.findUserViewById(
      user_id
    );
    // const findUserData = await this.userViewRepository.findUserViewById(
    //   user_id
    // );
    // console.log({ findUserData });
      console.log(user_id);
      console.log(findWashData);
    return {
      createdAt: findWashData.createdAt,
      status: findWashData.status,
      // wash_id: findWashData.wash_id,
      // extra: findWashData.extra,
      // image: findWashData.image,
      // updatedAt: findWashData.updatedAt,
      // user_id: findWashData.user_id,
      // nickname: findUserData.user.nickname,
      // address: findUserData.user.address,
      // phone_number: findUserData.user.phone_number,
    };
  };
}

module.exports = UserViewService;
