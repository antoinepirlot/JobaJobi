<script setup>
import OfferCard from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "@/router";
import api_requests from "../utils/api_requests";

const titleClass = ref("Toutes les offres");
const token = localStorage.getItem("token");
const offers = ref([]);
const user = ref([]);

//Click on view more button --> go to JobOfferDetailsView
const onButtonClick = (id) => {
  router.push(`/jobOfferDetails?id=${id}`);
};

//Click on intrested button --> add intrest to an offer
const onIntrestedClick = (idOffer, idUser) => {
  // Backend Request /api/jobOffers/createIntrested
  //add authorize

  const addIntrestedToBackend = async (idOffer, idUser) => {
    try {
      console.log(idOffer, idUser);
      const body = {
        idOffer: idOffer,
        idUser: idUser,
      };
      const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          Authorize: token,
          //TODO : add authorization
          Authorization: token,
        },
      };
      const response = await fetch("/api/jobOffers/createIntrested", options);
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
  addIntrestedToBackend(idOffer, idUser);
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
          @on-button-click="onButtonClick($event)"
          @on-intrested-click="onIntrestedClick($event, user.id)"
          :display-favourite-case="false"
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
