const main = async function() {
    const resolve_promise = Promise.resolve('test resolve()');

    resolve_promise.then(console.log);
    
}();