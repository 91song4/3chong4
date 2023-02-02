const MemberListService = require("../services/memberList.service");

class MemberListController {
    memberListService = new MemberListService();

    findMemberList = async() => {
        const memberList = await this.memberListService.findMemberList();

        return memberList
    }
}

module.exports = MemberListController;