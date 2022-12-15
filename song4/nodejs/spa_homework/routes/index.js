// 보통 index.js에 어떤 내용을 담나요?
// 프로그램마다 다르지만 보통 속해있지 않거나, 공용적인 내용을 적습니다.
const ADD_KOREA_TIME = 32400000;

// UTC to KST
function dbUtcToKst(dbTimes)
{
    for (const utcTime of dbTimes)
    {
        const dbUTC = utcTime.createdAt;
        const toKST = dbUTC.getTime() + ADD_KOREA_TIME;
        utcTime.createdAt = new Date(toKST)
    }
    return dbTimes;
}

module.exports = dbUtcToKst;