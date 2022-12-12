const main = async function () {
    const users = ['Lee', 'Kim', 'Park', 2];

    try {
        for (const user of users) {
            console.log(user.toUpperCase());
        }
    } catch (err) {
        console.error(`Error: ${err}`);
    }
}();