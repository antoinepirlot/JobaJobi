<script setup>
import OfferCard from "../components/OfferCard.vue";
import { ref } from "vue";
import api_requests from "../utils/api_requests";
import utils from "@/utils/utils";

const titleClass = ref("Toutes les offres");
const token = localStorage.getItem("token");
const offers = ref([]);
const user = ref([]);

//Click on intrested button --> add intrest to an offer
const onIntrestedClick = async (idOffer, idUser) => {
  await api_requests.addInterest(idOffer, idUser);
};

//Get User Session
user.value = await api_requests.getUserByToken();

//Get all offers

offers.value = await api_requests.getAllJobOffers();
</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
      <div v-for="offer in offers" :key="offer.idJobOffer">
        <OfferCard
          class="offerCard"
          :offer="offer"
          :user-type="user.type"
          :is-intrested="
            !!offer.interestedUsersId.some((value) => value.idUser === user.id)
          "
          @on-button-click="utils.goToOfferDetails($event)"
          @on-intrested-click="onIntrestedClick($event, user.id)"
          :display-favourite-case="ref(true)"
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
