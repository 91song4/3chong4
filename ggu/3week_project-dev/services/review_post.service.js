const ReviewPostRepository = require("../repositories/review_post.repository");
const { review } = require("../models");

class ReviewPostService {
  reviewPostRepository = new ReviewPostRepository(review);
  // 리뷰 작성하기
  reviewPost = async (shop_name, image, star_rating, content, nickname) => {
    const userData = await this.reviewPostRepository.findUser(nickname);
    const reviewData = await this.reviewPostRepository.reviewPost(
      shop_name,
      image,
      star_rating,
      content,
      userData.user_id
    );
    return {
      shop_name: reviewData.shop_name,
      image: reviewData.image,
      star_rating: reviewData.star_rating,
      content: reviewData.content,
      user_id: userData.user_id,
    };
  };
}

module.exports = ReviewPostService;
