<script setup>
import {ref} from "vue";
import router from "@/router";
import api_requests from "@/utils/api_requests";
import Favorite from "@/components/Favorite.vue";

// if(!utils.isConnected()) {
//   router.push("/login")
// }

const tempFav = api_requests.getFavorites();
const favorites = ref([]);

</script>

<template>
  <h1>Vos offres d'emplois favorites</h1>
  <Favorite/>
</template>