const { wash_list, user } = require("../models");

class UserViewRepository {
  // 유저 화면
  findUserViewById = async (user_id) => {
    const userView = await wash_list.findOne({
      where : {user_id:user_id}
    })

    return userView;
  };
}

module.exports = UserViewRepository;
