const MemberListService = require("../services/memberList.service");

class MemberListController {
    memberListService = new MemberListService();

    findMemberList = async(req, res, next) => {
        const memberList = await this.memberListService.findMemberList();

        res.status(201).json({ data: memberList })
    }
}

module.exports = MemberListController;