const main = async function() {
    const resolvePromise = new Promise((resolve, rejent) => {
        setTimeout(() => {
            // console.log(First);
            // rejent('Error!!');

            // try {
            //     console.log(First);
            // } catch(err) {
            //     rejent(err);
            // }
            console.log('resolve test');
            // resolve('resolve()');
        }, 1000);
    });

    resolvePromise.then((data) => {
        console.log('Middle');
        console.log('Last');
        console.log(data);
    }).catch((err) => {
        console.log('에러 발생!\n', err)
    })
}();