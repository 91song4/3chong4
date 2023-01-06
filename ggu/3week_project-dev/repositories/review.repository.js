const { review } = require("../models");

class ReviewRepository {
  reviewList = async (shop_name) => {
    try {
      const shopReview = await review.findAll({
        where: { shop_name: shop_name },
      });

      return shopReview;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = ReviewRepository;
