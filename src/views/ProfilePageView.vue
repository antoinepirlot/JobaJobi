<script setup>
import { ref, onMounted } from "vue";

if (!localStorage.getItem("token")) {
  router.push("/login");
}
let user = ref([]);

//Get the token in the localStorage
const token = localStorage.getItem("token");

//fetch the user session
onMounted(async () => {
  //Set the header of the request
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append(
    "Authorization",

    token
  );
  //Set the options of the request
  const options = {
    method: "GET",
    headers: header,
  };
  await fetch("/api/users/getUserSession", options)
    .then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response statusText
        throw new Error(
          "fetch error : " + response.status + " : " + response.statusText
        );
      }
      //Assign the data to the user ref
      user.value = data;
    })
    .catch((error) => {
      console.error("There was an error : ", error);
    });
});
</script>

<template>
  <!-- Company View -->

  <template v-if="user.type === 'company'">
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
