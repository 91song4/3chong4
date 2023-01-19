const ReviewRepository = require("../repositories/review.repository");

class ReviewService {
  reviewRepository = new ReviewRepository();

  reviewList = async (shop_name) => {
    try {
      const reviewData = await this.reviewRepository.reviewList(shop_name);

      return reviewData.map((data) => {
        return {
          review_id: data.review_id,
          content: data.content,
          star_rating: data.star_rating,
          // Image: data.Image,
          user_id: data.user_id,
          shop_name: data.shop_name,
        };
      });
    } catch (error) {
      throw error;
    }
  };
}

module.exports = ReviewService;
