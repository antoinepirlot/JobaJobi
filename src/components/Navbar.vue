<script setup>
import {ref} from "vue";
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
      <ul class="navbarLink">
        <RouterLink to="/login">
          <li>
            Connexion
          </li>
        </RouterLink>
        <RouterLink to="/signup">
          <li>
            S'inscrire
          </li>
        </RouterLink>
      </ul>
    </nav>
  </div>

  <div v-else-if="user.type === 'Particulier'" class="wrapper">
    <nav>
      <ul class="navbarLink">
        <RouterLink to="/">
          <li>
            Home
          </li>
        </RouterLink>
        <RouterLink to="/favorites">
          <li>
            Mes favoris
          </li>
        </RouterLink>
        <RouterLink to="/profile">
          <li>
            Profil
          </li>
        </RouterLink>
        <RouterLink to="/logout">
          <li>
            Déconnexion
          </li>
        </RouterLink>
      </ul>
    </nav>
  </div>

  <div v-else class="wrapper">
    <nav>
      <ul>
        <RouterLink to="/">
          <li>
            Home
          </li>
        </RouterLink>
        <RouterLink to="/createJobOffer">
          <li>
            Créer une offre d'emploi
          </li>
        </RouterLink>
        <RouterLink to="/profile">
          <li>
            Profil
          </li>
        </RouterLink>
        <RouterLink to="/logout">
          <li>
            Déconnexion
          </li>
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>
