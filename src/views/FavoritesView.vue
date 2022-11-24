<script setup>
import {markRaw, ref} from "vue";
import router from "@/router";
import api_requests from "@/utils/api_requests";
import OfferCard from "@/components/OfferCard.vue";

const favorites = ref([]);

async function loadFavorites() {
  const temp = await api_requests.getFavorites();
  favorites.value = temp;
}
loadFavorites().then();
</script>

<template>
  <h1>Vos offres d'emplois favorites</h1>
  <div>
    <div v-for="favorite in favorites" :key="favorite.id">
      <OfferCard class="offerCard" v-bind:offer="favorite"/>
    </div>
  </div>
</template>