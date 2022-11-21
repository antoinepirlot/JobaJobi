import utils from "@/utils/utils";

async function getFavorites() {
  const token = utils.getItem("token");
  const request = {
    method: "GET",
    headers: {
      "Authorize": token,
      "Content-Type": "application/json"
    }
  }
  const response = await fetch(`/api/users/favorites`, request);
  if (!response.ok) {
    throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
    );
  }
  return await response.json();
}

async function signup(user) {
  const request = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch("/api/auths/signup", request);
  if (!response.ok) {
    throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
    );
  }
  return await response.json();
}

export default {
  getFavorites,
  signup,
};