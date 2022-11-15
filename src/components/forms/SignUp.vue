<script setup>
import {ref} from "vue";
import InputInForm from "@/components/InputInForm.vue";
import SelectInForm from "@/components/SelectInForm.vue";
import router from "@/router";

const options = ["Particulier", "Entreprise"];
const selectedOption = ref(options[0])

function goToConnectionPage() {
  router.push("/login")
}
</script>

<template>
  <form>
    <InputInForm type-input="text" label-name="Nom" name="lastname"/>
    <InputInForm type-input="text" label-name="Prénom" name="firstname"/>
    <InputInForm type-input="date" label-name="Date de naissance" name="birthday"/>
    <InputInForm type-input="tel" label-name="Numéro de téléphone" name="phone"/>
    <input-in-form type-input="email" label-name="Adresse email" name="email"/>
    <input-in-form type-input="password" label-name="Mot de passe" name="password"/>
    <input-in-form type-input="password" label-name="Confirmer le mot de passe" name="confirm_password"/>
    <SelectInForm v-bind:options="options" label-name="Type utilisateur" name="type"/>
    <input id="submit_signup" type="submit" value="S'inscrire">
  </form>
  <p>Déjà un compte? <button @click="goToConnectionPage">Connexion</button></p>
</template>

<style>
  #submit_signup {
    background-color: blue;
    color: white;
    border-radius: 30px;
  }
</style>