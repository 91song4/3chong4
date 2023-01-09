const PostsController = require("../../controllers/posts.controller.js");


// posts.service.js 에서는 아래 5개의 Method만을 사용합니다.
let mockPostService = {
  findAllPost: jest.fn(),
  findPostById: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn(),
}

let mockRequest = {
  body: jest.fn(),
};

let mockResponse = {
  status: jest.fn(),
  json: jest.fn(),
};

let postsController = new PostsController();
// postsController의 Service를 Mock Service로 변경합니다.
postsController.postService = mockPostService;

describe('Layered Architecture Pattern Posts Controller Unit Test', () => {

  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.

    // mockResponse.status의 경우 메서드 체이닝으로 인해 반환값이 Response(자신: this)로 설정되어야합니다.
    mockResponse.status = jest.fn(() => {
      return mockResponse
    });
  })

  test('Posts Controller getPosts Method by Success', async () => {
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

    mockPostService.findAllPost = jest.fn(() => {
      return findAllPostReturnValue;
    })

    await postsController.getPosts(mockRequest, mockResponse);

    expect(mockPostService.findAllPost).toHaveBeenCalledTimes(1);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: findAllPostReturnValue });
  });

  test('Posts Controller createPost Method by Success', async () => {
    const createPostBodyParams = {
      nickname: 'nickname',
      password: '1234',
      title: 'title',
      content: 'content'
    };

    const createPostReturnValue = {
      postId: 1,
      nickname: 'nickname',
      title: 'title',
      content: 'content',
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
    }

    mockPostService.createPost = jest.fn(() => {
      return createPostReturnValue;
    });

    mockRequest.body = createPostBodyParams;

    await postsController.createPost(mockRequest, mockResponse);

    expect(mockPostService.createPost).toHaveBeenCalledTimes(1);
    expect(mockPostService.createPost).toHaveBeenCalledWith(
      createPostBodyParams.nickname,
      createPostBodyParams.password,
      createPostBodyParams.title,
      createPostBodyParams.content,
    );

    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith({ data: createPostReturnValue });

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
  });

  test('Posts Controller createPost Method by Invalid Params Error', async () => {
    mockResponse.body = {};

    await postsController.createPost(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(400);

    expect(mockResponse.json).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith({ errorMessage: 'InvalidParamsError' });
  });

});