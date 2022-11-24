<script setup>
import { ref } from "vue";
import api_requests from "../utils/api_requests";

defineProps({
  // userType: String,
  isConnected: Boolean,
});

const user = ref([]);
user.value = api_requests.getUserByToken;
</script>

<template>
  <div v-if="!isConnected" class="wrapper">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li><RouterLink to="/login">Connexion</RouterLink></li>
        <li><RouterLink to="/signup">S'inscrire</RouterLink></li>
      </ul>
    </nav>
  </div>

  <div v-else-if="userType === 'Particulier'" class="wrapper">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li><RouterLink to="/favorites">Mes favoris</RouterLink></li>
        <li><RouterLink to="/profile">Profil</RouterLink></li>
        <li><RouterLink to="/logout">Déconnexion</RouterLink></li>
      </ul>
    </nav>
  </div>

  <div v-else class="wrapper">
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/createJobOffer"
            >Créer une offre d'emploie</RouterLink
          >
        </li>
        <li><RouterLink to="/profile">Profil</RouterLink></li>
        <li><RouterLink to="/logout">Déconnexion</RouterLink></li>
      </ul>
    </nav>
  </div>
</template>
