const main = async function () {
    async function test1() {
        return 'test1';
    }

    const test2 = async function () {
        return 'test2';
    }

    const test3 = async () => {
        return 'test3';
    }

    console.log(test1());
    console.log(test2());
    console.log(test3());
    
    test1().then(console.log);
    test2().then(console.log);
    test3().then(console.log);














}();