<script setup>
import {ref} from "vue";
import api_requests from "@/utils/api_requests";
import OfferCard from "@/components/OfferCard.vue";
import utils from "@/utils/utils";

const favorites = ref([]);
favorites.value = await api_requests.getFavorites();

</script>

<template>
  <h1>Vos offres d'emplois favorites</h1>
  <div>
    <div v-for="favorite in favorites" :key="favorite.id">
      <OfferCard
          class="offerCard"
          :offer="favorite"
          @on-button-click="utils.goToOfferDetails($event)"
          :display-favourite-case="ref(false)"
      />
    </div>
  </div>
</template>