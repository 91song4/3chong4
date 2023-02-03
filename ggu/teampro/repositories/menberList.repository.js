const { user } = require("../models");

class MemberListRepository {
    findMemberList = async() => {
        console.log(1234);
        const memberList = await user.findAll();
        console.log(memberList, 321)
        return memberList
    }
};

module.exports = MemberListRepository;