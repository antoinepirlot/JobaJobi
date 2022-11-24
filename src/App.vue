<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "./router";
import NavbarView from "./views/NavbarView.vue";
import api_requests from "./utils/api_requests";
import { useCounterStore } from "./stores/counterPages.js";
import utils from "./utils/utils";

const store = useCounterStore();
</script>

<template>
  <header>
    <Suspense>
      <NavbarView :is-connected="utils.isConnected()"></NavbarView>
    </Suspense>
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
.navbarLink li {
  padding: 1rem 2rem 1.15rem;
  text-transform: uppercase;
  cursor: pointer;
  min-width: 80px;
}

.navbarLink li:hover {
  background-color: cornflowerblue;
  background-size: 100% 100%;
  color: #27262c;
  font-weight: bold;
}
</style>
