const PostService = require("../../services/posts.service.js");

let mockPostsRepository = {
  findAllPost: jest.fn(),
  findPostById: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
}

let postService = new PostService();
// postService의 Repository를 Mock Repository로 변경합니다.
postService.postRepository = mockPostsRepository;

describe('Layered Architecture Pattern Posts Service Unit Test', () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  })

  test('Posts Service findAllPost Method', async () => {
    const findAllPostReturnValue = [
      {
        postId: 1,
        nickname: 'nickname_1',
        title: 'title_1',
        createdAt: 1,
        updatedAt: 1,
      },
      {
        postId: 2,
        nickname: 'nickname_2',
        title: 'title_2',
        createdAt: 2,
        updatedAt: 2,
      }
    ];
    mockPostsRepository.findAllPost = jest.fn(() => {
      return findAllPostReturnValue;
    })

    const allPost = await postService.findAllPost();

    // allPost.sort((a, b) => {
    //   return b.createdAt - a.createdAt;
    // });

    expect(allPost).toEqual(findAllPostReturnValue);

    expect(mockPostsRepository.findAllPost).toHaveBeenCalledTimes(1);
  });

  test('Posts Service deletePost Method By Success', async () => {
    const findPostByIdReturnValue = {
      postId: 1,
      nickname: 'nickname_1',
      title: 'title_1',
      content: 'content_1',
      createdAt: new Date('11 octover 2022 12:00'),
      updatedAt: new Date('11 octover 2022 12:00'),
    }

    mockPostsRepository.findPostById = jest.fn(() => {
      return findPostByIdReturnValue;
    })

    const deletePost = await postService.deletePost(1, '0000');

    expect(deletePost).toMatchObject({
      postId: findPostByIdReturnValue.postId,
      nickname: findPostByIdReturnValue.nickname,
      title: findPostByIdReturnValue.title,
      content: findPostByIdReturnValue.content,
      createdAt: findPostByIdReturnValue.createdAt,
      updatedAt: findPostByIdReturnValue.updatedAt,
    });

    expect(mockPostsRepository.findPostById).toHaveBeenCalledTimes(1);
    expect(mockPostsRepository.findPostById).toHaveBeenCalledWith(1);

    expect(mockPostsRepository.deletePost).toHaveBeenCalledTimes(1);
    expect(mockPostsRepository.deletePost).toHaveBeenCalledWith(1, '0000');

  });

  test('Posts Service deletePost Method By Not Found Post Error', async () => {
    const findPostReturnValue = null;

    mockPostsRepository.findPostById = jest.fn(() => {
      return null;
    })

    try {
      await postService.deletePost(376, '0000');
    } catch (error) {
      expect(mockPostsRepository.findPostById).toHaveBeenCalledTimes(1);
      expect(mockPostsRepository.findPostById).toHaveBeenCalledWith(376);

      expect(error.message).toEqual("Post doesn't exist");
    }

  });
});