<script setup>
import { ref } from "vue";
import SelectInFormVue from "../components/SelectInForm.vue";
import InputInFormVue from "../components/InputInForm.vue";
import TextAreaInFormVue from "../components/TextAreaInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import router from "../router/index.js";

const titleClass = ref("Créer une offre d'emploi");
const typesContract = ["CDI", "CDD", "Stage non rémunéré", "Stage rémunéré"];
let offerTitle;
let mailContact;
let typeContract = typesContract[0];
let description;
const addJobOffer = (e) => {
  e.preventDefault();
  const newJobOffer = {
    title: offerTitle,
    contactMail: mailContact,
    contractType: typeContract,
    description: description,
    idCompany: 1, //TODO : changer l'id
  };
  addJobOfferToBackend(newJobOffer);
  router.push("/");
  return;
};

const addJobOfferToBackend = async (newJobOffer) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newJobOffer),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/jobOffers/create", options);
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
</script>

<template>
  <h1 class="centerFormElements">{{ titleClass }}</h1>

  <form @submit="addJobOffer" id="formAddJobOffer">
    <InputInFormVue
      class="centerFormElements"
      name="offerTitle"
      labelName="Titre de l'offre"
      typeInput="text"
      v-model="offerTitle"
    />
    <InputInFormVue
      class="centerFormElements"
      name="contact_email"
      labelName="Mail de contact"
      typeInput="email"
      v-model="mailContact"
    />
    <SelectInFormVue
      class="centerFormElements"
      name="contract_type"
      labelName="Type de contrat"
      v-bind:options="typesContract"
      v-model="typeContract"
    />
    <TextAreaInFormVue
      class="centerFormElements"
      name="description"
      labelName="Description"
      rows="8"
      cols="50"
      v-model="description"
    />
    <SubmitButtonInFormVue class="centerFormElements" name="Créer" />
  </form>
</template>

<style>
.centerFormElements {
  padding-inline: 33%;
  line-height: 2em;
}

/***************************************************************************************
* Title: Comment faire un bouton Css arrondi?
* Author: ZoneCSS.fr
* Date: Unknown
* Code version: Unknown
* Availability: https://www.zonecss.fr/faq/les-boutons-en-css.html#:~:text=Mon%20bouton%20Css-,
                Accessibilité%20et%20le%20bouton%20Css,HTML%20role%3D"button"%20.
*
***************************************************************************************/
button[type="submit"] {
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  width: 150px;
}

button[type="submit"]:hover {
  cursor: pointer;
  background-color: cornflowerblue;
}

label {
  margin-right: 10px;
}
</style>
