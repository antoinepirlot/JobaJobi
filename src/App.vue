<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "./router";
import NavbarVue from "./components/Navbar.vue";
import api_requests from "./utils/api_requests";
import { useCounterStore } from "./stores/counterPages.js";

const token = localStorage.getItem("token");
if (!token) {
  router.push("/login");
} else {
  router.push("/");
}

const user = ref([]);
//Get User Session
user.value = api_requests.getUserByToken();

const store = useCounterStore();
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
  <footer>
    <p>Nombre de page(s) consultée(s) : {{ store.counterPages }}</p>
  </footer>
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
