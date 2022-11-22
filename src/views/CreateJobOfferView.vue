<script setup>
import { ref } from "vue";
import SelectInFormVue from "../components/SelectInForm.vue";
import InputInFormVue from "../components/InputInForm.vue";
import TextAreaInFormVue from "../components/TextAreaInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import router from "../router/index.js";
import api_requests from "@/utils/api_requests";

const titleClass = "Créer une offre d'emploi";
const typesContract = ["CDI", "CDD", "Stage non rémunéré", "Stage rémunéré"];
const offerTitle = ref("");
const mailContact = ref("");
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
  const user = await api_requests.getUserByToken();
  //create the new job offer
  const newJobOffer = {
    title: offerTitle.value,
    contactMail: mailContact.value,
    contractType: typeContract.value,
    description: description.value,
    idCompany: user.id,
  };
  addJobOfferToBackend(newJobOffer);
  router.push("/");
  return;
};

const addJobOfferToBackend = async (newJobOffer) => {
  let token = localStorage.getItem("token");
  if(token === null) token = sessionStorage.getItem("token");
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(newJobOffer),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
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
    <p v-if="isVisible" id="errorMsgFormCreate" class="centerFormElements">
      Vous devez remplir tous les champs du formulaire
    </p>
    <SubmitButtonInFormVue class="centerFormElements" name="Créer" />
  </form>
</template>

<style>
#errorMsgFormCreate {
  color: red;
}

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
