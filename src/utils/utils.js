/**
 * Check if the password1 is equal to password2
 * @param password1 string --> the first password to check
 * @param password2 string --> the second password to check
 * @return {boolean} true if both passwords are equals each other
 * and to a non-empty string otherwise false.
 */
function checkPassword(password1, password2) {
  return password1 !== undefined
      && password2 !== undefined
      && password1 !== null
      && password2 !== null
      && password1 !== ""
      && password1 === password2;
}

/**
 * Check if the user is connected and return true or false
 * @return {boolean} true if the user is connected, otherwise false
 */
function isConnected() {
  return !!window.localStorage.getItem("token")
      || !!window.sessionStorage.getItem("token");
}

export default {
  checkPassword,
  isConnected,
};