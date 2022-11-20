<script setup>
import OfferCardVue from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "../router/index.js";

const titleClass = ref("Mes offres d'emplois");
const getUserFromSessionBackend = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem('token')
      },
    };
    const response = await fetch("/api/users/getUserSession", options);
    if (!response.ok) {
        throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};
const userSession = ref(await getUserFromSessionBackend());
console.log(userSession.value);
</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
        <OfferCardVue
          offertitle="test"
          offer-description="description"
          offer-type="contractType"
          id="idJobOffer"
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
