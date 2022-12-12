const main = async function() {
    const countPromise = Promise.resolve(0);

    function increment(val) {
        return val + 1;
    }
    
    let resultPromise;
    console.log(resultPromise);
    resultPromise = countPromise.then(increment).then(increment);
    console.log(countPromise);
    console.log(resultPromise);
    resultPromise.then(console.log);
}();