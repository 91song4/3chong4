const main = async function() {
    const resolvePromise = new Promise((resolve, rejent) => {
        setTimeout(() => {
            console.log('First');
            resolve('Resolve!');
        }, 1000);
    });

    resolvePromise.then((data) => {
        console.log('Middle');
        console.log('Last');
        console.log(data);
    })
}();