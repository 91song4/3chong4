const ReviewPostService = require("../services/review_post.service");

class ReviewPostController {
  reviewPostService = new ReviewPostService();
  // 리뷰 작성하기
  reviewPost = async (req, res, next) => {
    const { shop_name } = req.params;
    const { image, star_rating, content, nickname } = req.body;
    const reviewPostData = await this.reviewPostService.reviewPost(
      shop_name,
      image,
      star_rating,
      content,
      nickname
    );
    res.status(201).json({ data: reviewPostData });
  };
}

module.exports = ReviewPostController;
