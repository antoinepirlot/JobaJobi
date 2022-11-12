<script setup>
import { ref } from "vue";

const titleClass = ref("Toutes les offres");

//Get all offers
const offers = [
  {
    id: 1,
    title: "Job d'été",
    email: "ipl@vinci.be",
    type: "CDI",
    description: "Un super job dans la forêt magique",
    date: Date.now(),
    company: "IPL",
    city: "Bruxelles",
  },
  {
    id: 2,
    title: "Job étudiant",
    email: "embie@embie.be",
    type: "CDD",
    description: "Un super job étudiant",
    date: Date.now(),
    company: "Embie",
    city: "Bruxelles",
  },
];
</script>

<template>
  <div class="homepage-display">
    <h1>{{ titleClass }}</h1>
    <div class="cards-offers">
      <div v-for="offer in offers" :key="offer.id">
        <p>{{ offer.title }}, {{ offer.company }}, {{ offer.city }}</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<style>
.homepage-display {
  text-align: center;
}

.cards-offers {
  text-align: left;
}
</style>
