import utils from "@/utils/utils";

async function createJobOffer(newJobOffer) {
  let token = localStorage.getItem("token");
  if (token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newJobOffer),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await fetch("/api/jobOffers/create", options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

async function getFavorites() {
  const token = utils.getItem("token");
  const request = {
    method: "GET",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`/api/users/favorites`, request);
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
    const response = await fetch(
      "/api/jobOffers/getAllInterested/" + id,
      options
    );
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

async function getJobOfferById(id) {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/jobOffers/id/" + id, options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

async function getUserById(id) {
  let token = localStorage.getItem("token");
  if (token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await fetch("/api/users/id/" + id, options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

async function getUserByToken() {
  let token = localStorage.getItem("token");
  if (token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
}

async function signup(user) {
  const request = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api/auths/signup", request);
  if (!response.ok) {
    throw new Error(
      "fetch error : " + response.status + " : " + response.statusText
    );
  }
  return await response.json();
}

async function getAllMyJobOffers() {
  let token = localStorage.getItem("token");
  if (token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await fetch(
      "/api/jobOffers/company/getAllMyJobOffers/",
      options
    );
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

const login = async (user) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/auths/login", options);
    if (!response.ok) {
      if (response.status === 401)
        return "L'adresse email ou le mot de passe est incorrect";
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};

async function getAllJobOffers() {
  let token = localStorage.getItem("token");
  if (token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    const response = await fetch("/api/jobOffers/getAll/", options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
}

export default {
  createJobOffer,
  getFavorites,
  getInterestedByIdJobOffer,
  getJobOfferById,
  getUserById,
  getUserByToken,
  signup,
  getAllMyJobOffers,
  login,
  getAllJobOffers,
};
