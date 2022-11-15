<script setup>
import { ref, reactive } from "vue";

//Temporary user object
const user = reactive({
  name: "IPL",
  state: "Belgium",
  phone_number: "0445789865",
  type: "company",
  description: "We are a belgium company",
});

//Get the token in the localStorage
const token = localStorage.getItem("token");

//Set the header of the request
const header = new Headers();
header.append("Content-Type", "application/json");
header.append("Authorization", token);
//Set the options of the request
const options = {
  method: "GET",
  header: header,
};

const getUser = fetch("http://localhost:3000/users/getUserSession", options);
</script>

<template>
  <!-- Company View -->
  <template v-if="user.type === 'company'">
    <div class="profile-display">
      <h1>Profil de l'entreprise</h1>
      <div><span>Nom de l'entreprise :</span> {{ user.name }}</div>
      <div><span>Ville de l'entreprise:</span> {{ user.state }}</div>
      <div><span>Numéro de téléphone : </span>{{ user.phone_number }}</div>
      <div><span>Description :</span> {{ user.description }}</div>
    </div>
  </template>

  <!-- Individual View -->
  <template v-else-if="user.type === 'particular'">
    <div class="profile-display">
      <h1>Profil de l'entreprise</h1>
      <div><span>Nom :</span> {{ user.lastname }}</div>
      <div><span>Prénom :</span> {{ user.name }}</div>
      <div><span> Numéro de téléphone :</span> {{ user.phone_number }}</div>
    </div>
  </template>
</template>

<style>
span {
  font-weight: bold;
}

.profile-display {
  text-align: center;
}
</style>
