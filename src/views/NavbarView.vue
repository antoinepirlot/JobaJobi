<script setup>
import {ref} from "vue";
import api_requests from "../utils/api_requests";
import NavbarElement from "@/components/NavbarElement.vue";
import utils from "@/utils/utils";

defineProps({
  // userType: String,
  isConnected: Boolean,
});

const user = ref();
if (utils.isConnected()) {
  user.value = await api_requests.getUserByToken();
}

async function isParticular() {
  if (!user.value) {
    user.value = await api_requests.getUserByToken();
  }
  return user.value.type === "Particulier";
}
</script>

<template>
  <!-- Not connected navbar-->
  <div class="wrapper">
    <nav>
      <ul class="navbarLink">
        <NavbarElement v-if="isConnected" path="/" message="Home"/>
        <NavbarElement v-if="isConnected" path="/profile" message="Profil"/>

        <NavbarElement v-if="!isConnected" path="/login" message="Connexion"/>
        <NavbarElement v-if="!isConnected" path="/signup" message="S'inscrire"/>

        <NavbarElement v-if="isConnected && isParticular()" path="/favorites" message="Mes favoris"/>

        <NavbarElement v-if="isConnected && !isParticular()" path="/myOffers" message="Mes offres d'emplois"/>
        <NavbarElement v-if="isConnected && !isParticular()" path="/createJobOffer" message="Créer une offre d'emploi"/>

        <NavbarElement v-if="isConnected" path="/logout" message="Déconnexion"/>
      </ul>
    </nav>
  </div>
</template>
