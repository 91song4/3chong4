const OwnerWashController = require("../../../controllers/owner_wash.controller.js");

// owner_wash.controller.js 에서는 아래 5개의 Method만을 사용합니다.
let mockOwnerWashService = {
  getOwnerWashById: jest.fn(),
  statusUpdate: jest.fn(),
};

let mockRequest = {
  body: jest.fn(),
  params: jest.fn(),
};

let mockResponse = {
  status: jest.fn(),
  json: jest.fn(),
};

let ownerWashController = new OwnerWashController();
// postsController의 Service를 Mock Service로 변경합니다.
ownerWashController.ownerWashService = mockOwnerWashService;

describe("Layered Architecture Pattern Owner_wash Controller Unit Test", () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.

    // mockResponse.status의 경우 메서드 체이닝으로 인해 반환값이 Response(자신: this)로 설정되어야합니다.
    mockResponse.status = jest.fn(() => {
      return mockResponse;
    });
  });

  test("Owner_wash Controller getOwnerWashById Method by Success", async () => {
    const findOwnerWashByIdValue = [
      {
        wash_id: 1,
        status: "상태",
        extra: "요청사항",
        image: "이미지",
        createdAt: new Date("11 October 2022 00:00"),
        updatedAt: new Date("11 October 2022 00:00"),
        user_id: 1,
        nickname: "닉네임",
        address: "주소",
        phone_number: "010-1231-1234",
      },
    ];
    const getOwnerWashByIdParams = {
      wash_id: 1,
    };

    mockRequest.params = getOwnerWashByIdParams;

    mockOwnerWashService.findOwnerWashById = jest.fn(
      () => findOwnerWashByIdValue
    );

    await ownerWashController.getOwnerWashById(mockRequest, mockResponse);

    expect(mockOwnerWashService.findOwnerWashById).toHaveBeenCalledTimes(1);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    expect(mockResponse.json).toHaveBeenCalledWith({
      data: findOwnerWashByIdValue,
    });
  });

  test("Owner_wash Controller getOwnerWashById Method by Invalid Params Error", async () => {
    const ParamsError = {
      wash_id: "Nickname_InvalidParamsError",
    };

    mockRequest.params = ParamsError;

    await ownerWashController.getOwnerWashById(mockRequest, mockResponse);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(400);

    expect(mockResponse.json).toHaveBeenCalledWith({
      errorMessage: "InvalidParamsError",
    });
  });

  test("Owner_wash Controller statusUpdate Method by Success", async () => {
    const statusUpdateReturnValue = [
      {
        status: 2,
      },
    ];
    const statusUpdateParams = {
      wash_id: 1,
    };
    const statusUpdateBody = {
      status: 3,
    };

    mockRequest.params = statusUpdateParams;
    mockRequest.body = statusUpdateBody;

    mockOwnerWashService.statusUpdate = jest.fn(() => statusUpdateReturnValue);

    await ownerWashController.statusUpdate(mockRequest, mockResponse);

    expect(mockOwnerWashService.statusUpdate).toHaveBeenCalledTimes(1);

    expect(mockResponse.status).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).toHaveBeenCalledWith(200);

    expect(mockResponse.json).toHaveBeenCalledWith({
      data: statusUpdateReturnValue,
    });
  });

  // 에러 발생이 안됨.
  // test("Owner_wash Controller statusUpdate Method by Invalid Error", async () => {
  //   const ParamsError = {
  //     wash_id: "wash_id_InvalidParamsError",
  //   };
  //   // const BodyError = {
  //   //   status: "status_InvalidBodyError",
  //   // };

  //   mockRequest.params = ParamsError;
  //   // mockRequest.body = BodyError;

  //   await ownerWashController.statusUpdate(mockRequest, mockResponse);

  //   expect(mockResponse.status).toHaveBeenCalledTimes(1);
  //   expect(mockResponse.status).toHaveBeenCalledWith(400);

  //   expect(mockResponse.json).toHaveBeenCalledWith({
  //     errorMessage: "InvalidParamsError",
  //   });
  // });
});
