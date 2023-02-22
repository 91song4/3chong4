const OwnerWashService = require("../../../services/owner_wash_servive");

let mockWashListRepository = {
  findOwnerWashById: jest.fn(),
  findUserWashById: jest.fn(),
  statusUpdate: jest.fn(),
};

let ownerWashService = new OwnerWashService();
// ownerWashService의 Repository를 Mock Repository로 변경합니다.
ownerWashService.ownerWashRepository = mockWashListRepository;

describe("Layered Architecture Pattern Owner_wash_detail Service Unit Test", () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  });

  test("OwnerWash Service findOwnerWashById Method", async () => {
    const findOwnerWashByIdValue = [
      {
        wash_id: 1,
        status: "상태",
        extra: "요청사항",
        image: "이미지",
        createdAt: new Date("11 October 2022 00:00"),
        updatedAt: new Date("11 October 2022 00:00"),
        user_id: 1,
        // nickname: "닉네임",
        // address: "주소",
        // phone_number: "010-1231-1234",
      },
    ];
    const findUserWashByIdValue = [
      {
        nickname: "닉네임",
        address: "주소",
        phone_number: "010-1231-1234",
      },
    ];
    mockWashListRepository.findOwnerWashById = jest.fn(() => {
      return findOwnerWashByIdValue;
    });
    mockWashListRepository.findUserWashById = jest.fn(() => {
      return findUserWashByIdValue;
    });

    const findWashData = await ownerWashService.findOwnerWashById(1);
    // const findUserData = await ownerWashService.findUserWashById(1);

    expect(findWashData).toMatchObject({
      wash_id: findOwnerWashByIdValue.wash_id,
      status: findOwnerWashByIdValue.status,
      extra: findOwnerWashByIdValue.extra,
      image: findOwnerWashByIdValue.image,
      createdAt: findOwnerWashByIdValue.createdAt,
      updatedAt: findOwnerWashByIdValue.updatedAt,
      user_id: findOwnerWashByIdValue.user_id,
      // nickname: findOwnerWashByIdValue.nickname,
      // address: findOwnerWashByIdValue.address,
      // phone_number: findOwnerWashByIdValue.phone_number,
      nickname: findUserWashByIdValue.nickname,
      address: findUserWashByIdValue.address,
      phone_number: findUserWashByIdValue.phone_number,
    });
    expect(mockWashListRepository.findOwnerWashById).toHaveBeenCalledTimes(1);
    expect(mockWashListRepository.findOwnerWashById).toHaveBeenCalledWith(1);

    // expect(findUserData).toMatchObject({
    //   nickname: findUserWashByIdValue.nickname,
    //   address: findUserWashByIdValue.address,
    //   phone_number: findUserWashByIdValue.phone_number,
    // });
    // expect(mockWashListRepository.findUserWashById).toHaveBeenCalledTimes(1);
  });

  test("OwnerWash Service statusUpdate Method By Success", async () => {
    const statusUpdateReturnValue = {
      wash_id: 1,
      status: "수거중",
    };
    mockWashListRepository.findOwnerWashById = jest.fn(() => {
      return statusUpdateReturnValue;
    });
    const updateStatus = "수거완료";
    const statusUpdate = ownerWashService.statusUpdate(1, "수거완료");

    expect(mockWashListRepository.findOwnerWashById).toHaveBeenCalledTimes(1);
    expect(mockWashListRepository.findOwnerWashById).toHaveBeenCalledWith(1);
    // expect(statusUpdate).toMatchObject({
    //   wash_id: statusUpdateReturnValue.wash_id,
    //   status: updateStatus,
    // });
  });
});
