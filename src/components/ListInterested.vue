<script setup>
defineProps({
  allInterested: {
    type: Array,
    required: true,
  },
});
</script>

<template>
    <h4>Liste des intéressés : </h4>
    <ul>
        <li v-for="interested in allInterested">
            <p>Prénom et nom : {{ interested.firstName  }} {{interested.lastName}}</p>
            <p>Numéro de téléphone : {{interested.phone}}</p>
            <p>Email : {{interested.email}}</p>
        </li>
    </ul>
</template>
