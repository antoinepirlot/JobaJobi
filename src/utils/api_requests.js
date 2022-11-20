import utils from "@/utils/utils";

async function getFavorites(userId) {
  const request = {
    method: "GET",
    headers: {
      "Authorize": utils.getToken(),
      "Content-Type": "application/json"
    }
  }
  const response = await fetch(`/api/jobOffers/favorites/${userId}`, request);
  if (!response.ok) {
    throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
    );
  }
  return await response.json();
}

async function getInterestedByIdJobOffer(id) {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/jobOffers/getAllInterested/"+id, options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};

async function getJobOfferById(id) {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/jobOffers/id/"+id, options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};

async function getUserByToken() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
    };
    const response = await fetch("/api/users/getUserSession/", options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};

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
  getInterestedByIdJobOffer,
  getJobOfferById,
  getUserByToken,
  signup,
};