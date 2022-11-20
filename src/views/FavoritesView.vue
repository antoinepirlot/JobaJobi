<script setup>
import {ref} from "vue";
import router from "@/router";
import utils from "@/utils/utils";
import api_requests from "@/utils/api_requests";

// if(!utils.isConnected()) {
//   router.push("/login")
// }

const userId = utils.getItem("user").id;
const tempFav = api_requests.getFavorites();
const favorites = ref([]);

</script>

<template>
  <h1>Vos offres d'emplois favorites</h1>
</template>