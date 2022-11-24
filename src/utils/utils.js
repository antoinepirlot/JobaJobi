import router from "@/router";

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
 * get the item from local or session storage.
 * @param itemName the name of the item to return.
 * @returns {item} the item if found in the storage otherwise raises an error.
 */
function getItem(itemName) {
  let item = localStorage.getItem(itemName);
  if(!item) {
    item = sessionStorage.getItem(itemName);
  }
  return item;
}

/**
 * Redirects to the offer with offer's id
 * @param id the offer's id
 */
function goToOfferDetails (id) {
  router.push(`/jobOfferDetails/${id}`);
}

/**
 * Check if the user is connected and return true or false
 * @return {boolean} true if the user is connected, otherwise false
 */
function isConnected() {
  return !!window.localStorage.getItem("token")
      || !!window.sessionStorage.getItem("token");
}

//Click on view more button --> go to JobOfferDetailsView


export default {
  checkPassword,
  getItem,
  goToOfferDetails,
  isConnected,
};