function setTimeoutFunc(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${time}ms에 해당하는 시간이 지났습니다.`);
            resolve();
        },time)
    })
}

const main = async function () {
    console.log('start');
    setTimeoutFunc(2000);
    await setTimeoutFunc(1000);
    console.log('end');
}();