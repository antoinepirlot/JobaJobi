import {ref} from "vue";
import api_requests from "@/utils/api_requests";
import utils from "@/utils/utils";

const user = ref()
const isConnected = ref(window.localStorage.getItem("token")
    || window.sessionStorage.getItem("token"));
const isParticular = ref();


function getIsConnected() {
  return isConnected;
}

function getIsParticular() {
  return isParticular;
}

function getUser() {
  return user;
}

function changeIsConnected() {
  isConnected.value = window.localStorage.getItem("token")
      || window.sessionStorage.getItem("token");
}

function changeIsParticular() {
  if(!user.value) {
    isParticular.value = null;
  } else {
    isParticular.value = user.value.type === "Particulier";
  }
}

async function changeIsUser() {
  if (!utils.isConnected()) {
    user.value = null;
  } else {
    user.value = await api_requests.getUserByToken()
  }
  changeIsConnected();
  changeIsParticular();
}

export default {
  getIsConnected,
  getIsParticular,
  getUser,
  changeIsUser,
}