const UserViewService = require("../services/user_view_service");

class userViewController {
  userViewService = new UserViewService();
  // 유저 화면
  getUserViewById = async (req, res, next) => {
    const { user_id } = res.locals.user;
    const userView = await this.userViewService.findUserViewById(user_id);

    res.status(200).json({ data: userView });
  };
}

module.exports = userViewController;
