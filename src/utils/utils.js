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
 * Get the item from the storage.
 * @param itemName the item's name
 * @return {null|any} the item, null if no item with itemName is stored.
 */
function getItem(itemName) {
  let item = window.localStorage.getItem(itemName);
  if(!!item) {
    item = window.sessionStorage.getItem(itemName);
    if (!!item) {
      return null;
    }
  }
  return JSON.parse(item);
}

/**
 * Check if the user is connected and return true or false
 * @return {boolean} true if the user is connected, otherwise false
 */
function isConnected() {
  return !!window.localStorage.getItem("token")
      || !!window.sessionStorage.getItem("token");
}

/**
 * Stringify the item and stores it in the itemName on the local or session storage.
 * @param itemName the item's name emplacement
 * @param item the item to stores
 * @param localStorage true if the item must be placed in the local storage,
 * false for the session storage.
 */
function store(itemName, item, localStorage) {
  item = JSON.stringify(item);
  if(localStorage) {
    window.localStorage.setItem(itemName, item);
  } else {
    window.sessionStorage.setItem(itemName, item);
  }
}

export default {
  checkPassword,
  getItem,
  isConnected,
  store,
};