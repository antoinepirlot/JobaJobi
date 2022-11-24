<script setup>
import {ref, onMounted} from "vue";
import router from "@/router";
import api_requests from "@/utils/api_requests";
import utils from "@/utils/utils";

let user = ref([]);

//fetch the user session
user.value = await api_requests.getUserByToken();
</script>

<template>
  <!-- Company View -->

  <template v-if="user.type === 'Entreprise'">
    <div class="profile-display">
      <h1>Profil de l'entreprise</h1>
      <div><span>Nom de l'entreprise :</span> {{ user.companyName }}</div>
      <div><span>Ville de l'entreprise:</span> {{ user.companyTown }}</div>
      <div><span>Numéro de téléphone : </span>{{ user.phone }}</div>
      <div><span>Description :</span> {{ user.companyDescription }}</div>
    </div>
  </template>

  <!-- Individual View -->
  <template v-else>
    <div class="profile-display">
      <h1>Profil</h1>
      <div><span>Nom :</span> {{ user.lastName }}</div>
      <div><span>Prénom :</span> {{ user.firstName }}</div>
      <div><span> Numéro de téléphone :</span> {{ user.phone }}</div>
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
