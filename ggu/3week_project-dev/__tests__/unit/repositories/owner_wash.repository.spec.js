const OwnerWashRepository = require("../../../repositories/owner_wash.repository.js");

// 위에 파일에서 사용하는 Method
let mockWashListModel = {
  findByPk: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
};

let ownerWashRepository = new OwnerWashRepository(mockWashListModel);

describe("Layered Architecture Pattern Owner_wash_detail Repository Unit Test", () => {
  // 각 test가 실행되기 전에 실행됩니다.
  beforeEach(() => {
    jest.resetAllMocks(); // 모든 Mock을 초기화합니다.
  });

  test("Owner_wash Repository findByPk Method", async () => {
    mockWashListModel.findByPk = jest.fn(() => {
      return "findByPk String";
    });

    const washList = await ownerWashRepository.findOwnerWashById();

    expect(mockWashListModel.findByPk).toHaveBeenCalledTimes(1);
    expect(washList).toBe("findByPk String");
  });

  test("Owner_wash Repository findOne Method", async () => {
    mockWashListModel.findOne = jest.fn(() => {
      return "findOne String";
    });

    const washListOne = await ownerWashRepository.findUserWashById();

    expect(mockWashListModel.findOne).toHaveBeenCalledTimes(1);
    expect(washListOne).toBe("findOne String");
  });

  test("Owner_wash Repository update Method", async () => {
    mockWashListModel.update = jest.fn(() => {
      return "update status String";
    });

    const updateStatusParams = {
      status: "updateStatus",
      wash_id: "wash_id",
    };

    const updateStatusData = await ownerWashRepository.statusUpdate(
      updateStatusParams.wash_id,
      updateStatusParams.status
    );

    expect(mockWashListModel.update).toHaveBeenCalledTimes(1);
    expect(updateStatusData).toBe("update status String");
    expect(mockWashListModel.update).toHaveBeenCalledWith(
      { status: updateStatusParams.status },
      { where: { wash_id: updateStatusParams.wash_id } }
    );
  });
});
