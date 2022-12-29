const PostService = require('../services/posts.service');

// Post의 컨트롤러(Controller)역할을 하는 클래스
class PostsController {
  postService = new PostService();  // PostService클래스를 컨트롤러 클래스의 멤버 변수로 할당합니다.

  getPosts = async (req, res, next) => {
    const posts = await this.postService.findAllPost();

    res.status(200).json({ data: posts });
  }

  createPost = async (req, res, next) => {
    const { nickname, password, title, content } = req.body;

    const createPostData = await this.postService.createPost({ nickname, password, title, content });
    res.status(201).json({ data: createPostData });
  }
}

module.exports = PostsController;