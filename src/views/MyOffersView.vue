<script setup>
import OfferCardVue from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "../router/index.js";
import utils from "@/utils/utils";
import api_requests from "../utils/api_requests";


const titleClass = "Mes offres d'emplois";
const user = await api_requests.getUserByToken();
const idJobOffer = ref(1);

console.log(user);


</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
        <OfferCardVue
          :offer="{offerTitle:'test',
            offerDescription:'description',
            offerType:'contractType',
            id:idJobOffer,
          }" :display-favourite-case="false"
        />
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
