<script async setup>
import { ref, reactive } from "vue";
import router from "../router/index.js";
const getOfferFromBackend = async (id) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/jobOffers/id/"+id, options);
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
let offer = await getOfferFromBackend(router.currentRoute.value.params.id)
console.log(offer)
let date = "Aujourd'hui" //TODO : insérer vrai date
</script>

<template>
    <h1>Job Offer Details</h1>
    <h1>{{offer.title}}</h1>
    <h4>Date de publication : {{date}}</h4>
    <h4>Description de l'entreprise : </h4>
    <p>Insérer paragraphe entreprise</p>
    <p>Insérer infos entreprise</p>
    <h4>Description de l'offre : </h4>
    <p>{{offer.description}}</p>
    <h4>Mail de contact : {{offer.contactMail}}</h4>
    <!--TODO insérer liste des intéressés SI c'est l'entreprise qui a publié l'offre-->
</template>