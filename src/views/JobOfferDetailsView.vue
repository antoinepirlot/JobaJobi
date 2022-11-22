<script async setup>
import { ref, reactive } from "vue";
import ListInterested from "@/components/ListInterested.vue"
import router from "../router/index.js";
import api_requests from "@/utils/api_requests";

const offer = await api_requests.getJobOfferById(router.currentRoute.value.params.id);
const companyOfTheOffer = await api_requests.getUserById(offer.idCompany);
const userConnected = await api_requests.getUserByToken();
const isCompanyOwnerOfJobOffer = userConnected.id === offer.idCompany; 
let allInterested = [];
if(isCompanyOwnerOfJobOffer){
  allInterested = await api_requests.getInterestedByIdJobOffer(router.currentRoute.value.params.id);
}
</script>

<template>
    <h1>{{offer.title}}</h1>
    <h4>Date de publication : {{offer.publicationDate}}</h4>
    <h4>Description de l'entreprise : </h4>
    <p>Nom de l'entreprise : {{companyOfTheOffer.companyName}}</p>
    <p>{{companyOfTheOffer.companyDescription}}</p>
    <h4>Description de l'offre : </h4>
    <p>{{offer.description}}</p>
    <h4>Mail de contact : {{offer.contactMail}}</h4>
    <ListInterested v-if="isCompanyOwnerOfJobOffer" v-bind:allInterested="allInterested"/>
</template>