const MemberListRepository = require("../repositories/menberList.repository");

class MemberListService {
    memberListRepository = new MemberListRepository();

    findMemberList = async() => {
        const memberList = await this.memberListRepository.findMemberList();

        return memberList
    }
};

module.exports = MemberListService;