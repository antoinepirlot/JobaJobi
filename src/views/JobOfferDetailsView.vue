<script async setup>
import { ref, reactive } from "vue";
import ListInterested from "@/components/ListInterested.vue"
import router from "../router/index.js";
import api_requests from "@/utils/api_requests";

const offer = await api_requests.getJobOfferById(router.currentRoute.value.params.id);
console.log(offer)
const isCompanyOwnerOfJobOffer = true; //TODO : change call the back with the token
let allInterested = [];
if(isCompanyOwnerOfJobOffer){
  allInterested = await api_requests.getInterestedByIdJobOffer(router.currentRoute.value.params.id);
  console.log(allInterested)
}

</script>

<template>
    <h1>{{offer.title}}</h1>
    <h4>Date de publication : {{offer.publicationDate}}</h4>
    <h4>Description de l'entreprise : </h4>
    <p>Insérer paragraphe entreprise</p> <!-- TODO -->
    <p>Insérer infos entreprise</p> <!-- TODO -->
    <h4>Description de l'offre : </h4>
    <p>{{offer.description}}</p>
    <h4>Mail de contact : {{offer.contactMail}}</h4>
    <!-- TODO : add button to mark interest-->
    <ListInterested v-if="isCompanyOwnerOfJobOffer" v-bind:allInterested="allInterested"/>
</template>