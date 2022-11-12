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
//Retrieve session data
//TODO
//Check if the user is a Company or an Individual
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
  <template v-else-if="user.type === 'individual'">
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
  margin: auto;
  width: 50%;
}
</style>
