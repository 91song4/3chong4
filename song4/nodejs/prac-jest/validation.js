module.exports = {
  isEmail: (email) => {
    const checkEmail = (email || ' ');
    
    if (checkEmail.split('@').length !== 2) {
      return false;
    } else if (checkEmail.includes(' ')) {
      return false;
    } else if (checkEmail[0] === '-') {
      return false;
    } else if (!(/^[0-9a-z+_-]+$/ig.test(checkEmail.split('@')[0]))) {
      return false;
    } else if (!(/^[0-9a-z.-]+$/ig.test(checkEmail.split('@')[1]))) {
      return false;
    }

    return true;
  }
}