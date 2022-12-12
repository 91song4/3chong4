const main = async function() {
    const resolvePromise = new Promise((resolve, rejent) => {
        setTimeout(() => {
            // console.log(First);
            // rejent('Error!!');

            try {
                console.log(First);
            } catch {
                rejent('Error!!');
            }
        }, 1000);
    });

    resolvePromise.then((data) => {
        console.log('Middle');
        console.log('Last');
        console.log(data);
    }).catch((err) => {
        console.log('에러 발생!', err)
    })
}();