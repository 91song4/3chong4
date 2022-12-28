module.exports = {
  isEmail: (email) => {
    const checkEmail = (email || ' ');

    if (checkEmail.split('@').length !== 2) {
      return false;
    } else if (checkEmail.includes(' ')) {
      return false;
    } else if (checkEmail[0] === '-') {
      return false;
    }

    return true;
  }
}