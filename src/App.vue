<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "./router";
import NavbarVue from "./components/Navbar.vue";

const token = localStorage.getItem("token");
if (!token) {
  router.push("/login");
} else {
  router.push("/");
}

const user = ref([]);
//Get User Session
const getUserFromSession = async () => {
  //Set the header of the request
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Authorization", token);
  //Set the options of the request
  const options = {
    method: "GET",
    headers: header,
  };
  await fetch("/api/users/getUserSession", options)
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      //Assign the data to the user ref
      user.value = data;

      console.log(user.value);
    })
    .catch((error) => {
      console.error("There was an error : ", error);
    });
};

getUserFromSession();
</script>

<template>
  <header>
    <NavbarVue
      :user-type="user.type"
      :is-connected="!token ? false : true"
    ></NavbarVue>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
.wrapper {
  background-color: lightgray;
}

* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul {
  display: flex;
  width: 100%;
  margin: auto;
  max-width: 1000px;
  justify-content: space-between;
  text-align: center;
}
li {
  padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  color: #ebebeb;
  min-width: 80px;
}

li:hover {
  background-color: cornflowerblue;
  background-size: 100% 100%;
  color: #27262c;
  font-weight: bold;
}
</style>
