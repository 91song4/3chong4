class PostRepository {
  constructor(PostsModel) {
    this.PostsModel = PostsModel;
  }
  findAllPost = async () => {
    return await this.PostsModel.findAll({});
  }

  createPost = async (nickname, password, title, content) => {
    return await this.PostsModel.create({ nickname, password, title, content });
  }
}

module.exports = PostRepository;