<script setup>
import OfferCardVue from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "../router/index.js";
import api_requests from "../utils/api_requests";


const titleClass = "Mes offres d'emplois";

const myJobOffers = await api_requests.getAllMyJobOffers();

const onButtonClick = (id) => {
  router.push(`/jobOfferDetails/${id}`);
};

</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <h2 v-if="myJobOffers.length===0">Vous n'avez pas d'offres d'emploi</h2>
    <div v-else class="cards-offers">
      <div v-for="offer in myJobOffers" :key="offer.idJobOffer">
        <OfferCardVue class="offerCard"
          :offer="offer"  :display-favourite-case="ref(false)" @on-button-click="onButtonClick($event)"
        />
      </div>
    </div>
  </div>
</template>

<style>
.homepage-display {
  text-align: center;
}

.cards-offers {
  text-align: center;
}
</style>
