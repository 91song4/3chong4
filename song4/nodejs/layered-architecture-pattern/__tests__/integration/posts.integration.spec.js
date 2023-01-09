const supertest = require('supertest');
const app = require('../../app.js');
const { sequelize } = require('../../models/index.js');

// 통합 테스트(Integration Test)를 진행하기에 앞서 Sequelize에 연결된 모든 테이블의 데이터를 삭제합니다.
//  단, NODE_ENV가 test 환경으로 설정되어있는 경우에만 데이터를 삭제합니다.
beforeAll(async () => {
  if (process.env.NODE_ENV === 'test') await sequelize.sync();
  else throw new Error('NODE_ENV가 test 환경으로 설정되어 있지 않습니다.');
});


describe('Layered Architecture Pattern, Posts Domain Integration Test', () => {
  test('GET /api/posts API (getPosts) Integration Test Success Case, Not Found Posts Data', async () => {
    const response = await supertest(app)
      .get(`/api/posts`); // API의 HTTP Method & URL

    expect(response.status).toEqual(200);

    expect(response.body).toEqual({ data: [] });
  });

  test('POST /api/posts API (createPost) Integration Test Success Case', async () => {
    const createPostRequestBodyParams = {
      nickname: 'nickname',
      password: '1234',
      title: 'title',
      content: 'content'
    }
    const response = await supertest(app)
      .post('/api/posts')
      .send(createPostRequestBodyParams);


    expect(response.status).toEqual(201);

    expect(response.body).toMatchObject({
      data: {
        // postId: 1,
        nickname: createPostRequestBodyParams.nickname,
        title: createPostRequestBodyParams.title,
        content: createPostRequestBodyParams.content,
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      }
    });
  });

  test('POST /api/posts API (createPost) Integration Test Error Case, Invalid Params Error', async () => {
    const response = await supertest(app)
      .post('/api/posts');

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({ errorMessage: 'InvalidParamsError' });
  });

  test('GET /api/posts API (getPosts) Integration Test Success Case, is Exist Posts Data', async () => {
    const res = await supertest(app)
      .get('/api/posts');

    expect(res.status).toEqual(200);
    expect(res.body).toMatchObject({
      data: [{
        postId: 1,
        nickname: 'nickname',
        title: 'title',
        createdAt: expect.anything(),
        updatedAt: expect.anything(),
      }]
    });
  });
});


afterAll(async () => {
  // 통합 테스트가 완료되었을 경우 sequelize의 연결된 테이블들의 정보를 초기화합니다.
  if (process.env.NODE_ENV === 'test') await sequelize.sync({ force: true });
  else throw new Error('NODE_ENV가 test 환경으로 설정되어 있지 않습니다.');
});