<script setup>
import { ref } from "vue";
import SelectInFormVue from "../components/SelectInForm.vue";
import InputInFormVue from "../components/InputInForm.vue";
import TextAreaInFormVue from "../components/TextAreaInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import NotificationSpanVue from "../components/NotificationSpan.vue";

import router from "../router/index.js";
import api_requests from "@/utils/api_requests";

const user = await api_requests.getUserByToken();
const titleClass = "Créer une offre d'emploi";
const typesContract = ["CDI", "CDD", "Stage non rémunéré", "Stage rémunéré"];
const offerTitle = ref("");
const mailContact = ref(user.email);
const typeContract = ref(typesContract[0]);
const description = ref("");
const isVisible = ref(false);

const fieldsContainsEmpty = () => {
  const tabFields = [offerTitle, mailContact, typeContract, description];
  for (let i = 0; i < tabFields.length; i++) {
    if (tabFields[i].value.trim().length === 0) {
      return true;
    }
  }
  return false;
};

const addJobOffer = async (e) => {
  e.preventDefault();
  //Verify empty fields
  if (fieldsContainsEmpty()) {
    isVisible.value = true;
    return;
  }
  //create the new job offer
  const newJobOffer = {
    title: offerTitle.value,
    contactMail: mailContact.value,
    contractType: typeContract.value,
    description: description.value,
    idCompany: user.id,
  };
  await api_requests.createJobOffer(newJobOffer);
  router.push("/");
  return;
};
</script>

<template>
  <h1 class="centerElementsOnThePage">{{ titleClass }}</h1>

  <form @submit="addJobOffer" id="formAddJobOffer">
    <InputInFormVue
      class="centerElementsOnThePage"
      name="offerTitle"
      labelName="Titre de l'offre"
      typeInput="text"
      v-model="offerTitle"
    />
    <InputInFormVue
      class="centerElementsOnThePage"
      name="contact_email"
      labelName="Mail de contact"
      typeInput="email"
      v-model="mailContact"
    />
    <SelectInFormVue
      class="centerElementsOnThePage"
      name="contract_type"
      labelName="Type de contrat"
      v-bind:options="typesContract"
      v-model="typeContract"
    />
    <TextAreaInFormVue
      class="centerElementsOnThePage"
      name="description"
      labelName="Description"
      rows="8"
      cols="50"
      v-model="description"
    />
    <NotificationSpanVue
      v-if="isVisible"
      class="centerElementsOnThePage"
      notificationName="Vous devez remplir tous les champs du formulaire"
      color="red"
    />
    <SubmitButtonInFormVue class="centerElementsOnThePage" name="Créer" />
  </form>
</template>

<style>

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
