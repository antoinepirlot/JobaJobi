<script setup>
import OfferCardVue from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "../router/index.js";
import api_requests from "../utils/api_requests";


const titleClass = "Mes offres d'emplois";
const user = await api_requests.getUserByToken();
const idJobOffer = ref(1);

const myJobOffers = await api_requests.getAllMyJobOffers();
console.log(myJobOffers);

</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
      <div v-for="offer in myJobOffers" :key="offer.idJobOffer">
        <OfferCardVue class="offerCard"
          :offer="offer"  :display-favourite-case="false"
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
