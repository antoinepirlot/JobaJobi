<script async setup>
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
    <h1 class="littleSpace">{{offer.title}}</h1>
    <h3 class="littleSpace">Date de publication : {{offer.publicationDate}}</h3>
    <h4 class="littleSpace">Description de l'entreprise : </h4>
    <p class="littleSpace">Nom de l'entreprise : {{companyOfTheOffer.companyName}}</p>
    <p class="littleSpace">{{companyOfTheOffer.companyDescription}}</p>
    <h4 class="littleSpace">Description de l'offre : </h4>
    <p class="littleSpace">{{offer.description}}</p>
    <h4 class="littleSpace">Mail de contact : {{offer.contactMail}}</h4>
    <ListInterested class="littleSpace" v-if="isCompanyOwnerOfJobOffer && allInterested.length!=0" v-bind:allInterested="allInterested"/>
</template>

<style>
.littleSpace{
  padding-inline: 10px;
  line-height: 1em;
}
</style>