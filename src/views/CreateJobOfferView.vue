<script setup>
import { ref } from "vue";
import SelectInFormVue from "../components/SelectInForm.vue";
import InputInFormVue from "../components/InputInForm.vue";
import TextAreaInFormVue from "../components/TextAreaInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import router from "../router/index.js"

const titleClass = ref("Créer une offre d'emploi");
const typesContract = ["CDI", "CDD", "Stage non rémunéré", "Stage rémunéré"];

const addJobOffer = (e) => {
  e.preventDefault();
  //TODO : request to add a job offer
  router.push('/')
  return;
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
    />
    <InputInFormVue
    class="centerFormElements"
      name="contact_email"
      labelName="Mail de contact"
      typeInput="email"
    />
    <SelectInFormVue
    class="centerFormElements"
      name="contract_type"
      labelName="Type de contrat"
      v-bind:options="typesContract"
    />
    <TextAreaInFormVue
    class="centerFormElements"
      name="description"
      labelName="Description"
      rows="8"
      cols="50"
    />
    <SubmitButtonInFormVue class="centerFormElements" name="Créer"/>
  </form>
</template>

<style>
.centerFormElements{
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
button[type=submit]{
  -moz-border-radius : 6px;
  -webkit-border-radius : 6px;
  border-radius : 6px;
  width: 150px;
}

button[type=submit]:hover{
  cursor: pointer;
  background-color: cornflowerblue;
}

label{
  margin-right: 10px;
}

</style>
