<script setup>
import OfferCard from "../components/OfferCard.vue";
import { ref } from "vue";
import router from "@/router";

const titleClass = ref("Toutes les offres");

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
      const body = {
        idOffer: idOffer,
        idUser: idUser,
      };
      const options = {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
          //TODO : add authorization
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
const getUserFromSession = async () => {
  //Set the header of the request
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2Vib2tAZ21haWwuY29tIiwiaWF0IjoxNjY4Nzg0Mzg3LCJleHAiOjE3NTUxODQzODd9.39V_8TOGeop3GMDPqOrDVo431iyFkwdxMwFmIVcKrcA"
  );
  //Set the options of the request
  const options = {
    method: "GET",
    headers: header,
  };
  await fetch("/api/users/getUserSession", options)
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      //Assign the data to the user ref
      user.value = data;

      console.log(user.value);
    })
    .catch((error) => {
      console.error("There was an error : ", error);
    });
};

getUserFromSession();

//Get all offers
const getAllOffers = async () => {
  //Set the header of the request
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZhY2Vib2tAZ21haWwuY29tIiwiaWF0IjoxNjY4ODc3MDAwLCJleHAiOjE3NTUyNzcwMDB9.S0yeXyvlfJLVO7oDWDPNgv_JS3PS-YdhJjCTGe3tbdw"
  );
  //Set the options of the request
  const options = {
    method: "GET",
    headers: header,
  };
  await fetch("/api/jobOffers/getAll", options)
    .then(async (response) => {
      const data = await response.json();
      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      //Assign the data to the user ref
      offers.value = data;
    })
    .catch((error) => {
      console.error("There was an error : ", error);
    });
};
const isIntrested = () => {};
getAllOffers();
</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
      <div v-for="offer in offers" :key="offer.id">
        <OfferCard
          :offer="offer"
          @on-button-click="onButtonClick($event)"
          @on-intrested-click="onIntrestedClick($event, user.idUser)"
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
