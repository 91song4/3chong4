const { review, wash_list, shop, user } = require("../models");

class ReviewPostRepository {
  // constructor(ReviewPost) {
  //   this.ReviewPost = ReviewPost;
  // }
  // 라우트 -> 컨트롤러 -> 서비스 -> 레파짓토리 (디비에서 외래키로 shop테이블에서 shop_name 가져오기) -> 서비스  -> 레파짓토리(디비에 리뷰 저장) - > 서비스 -> 컨트롤러
  // 리뷰 작성하기
  findUser = async (nickname) => {
    const userData = await user.findOne({});
    return userData;
  };

  reviewPost = async (shop_name, image, star_rating, content, user_id) => {
    const reviewPostData = await review.create({
      shop_name,
      image,
      star_rating,
      content,
      user_id,
    });
    return reviewPostData;
  };
}

module.exports = ReviewPostRepository;
