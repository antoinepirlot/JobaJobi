<script async setup>
import {ref} from "vue";
import InputInForm from "@/components/InputInForm.vue";
import router from "@/router";
import ErrorMessage from "@/components/ErrorMessage.vue";
import utils from "@/utils/utils";
import api_requests from "@/utils/api_requests";

const options = ["Particulier", "Entreprise"];
const selectedOption = ref(options[0]);

//Form values
const lastName = ref("");
const firstName = ref("");
const birthday = ref(null);
const phone = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const type = ref("");
let errorMessage = ref("");

function goToConnectionPage() {
  router.push("/login")
}

async function signup(e) {
  e.preventDefault();
  errorMessage.value = "";
  if (lastName.value === "") {
    errorMessage.value = "Missing lastname";
    return;
  }
  if (firstName.value === "") {
    errorMessage.value = "Missing firstName";
    return;
  }
  if (birthday.value === null) {
    errorMessage.value = "Missing birthday";
    return;
  }
  if (phone.value === "") {
    errorMessage.value = "Missing phone";
    return;
  }
  if (email.value === "") {
    errorMessage.value = "Missing email";
    return;
  }
  if (password.value === "") {
    errorMessage.value = "Missing password";
    return;
  }
  if (confirmPassword.value === "") {
    errorMessage.value = "Missing Confirmation Password";
    return;
  }
  if (type.value === "") {
    errorMessage.value = "Missing Type";
    return;
  }
  if (!utils.checkPassword(password, confirmPassword)) {
    errorMessage.value = "Passwords don't match";
  }
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthday: birthday.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    type: type.value
  }
  try {
    await api_requests.signUp(user);
  } catch (e) {
    console.error(e.message);
  }
  goToConnectionPage();
}
</script>

<template>
  <form>
    <InputInForm v-model="lastName" type-input="text" label-name="Nom" name="lastname"/>
    <InputInForm v-model="firstName" type-input="text" label-name="Prénom" name="firstname"/>
    <InputInForm
        v-model="birthday"
        type-input="date"
        label-name="Date de naissance"
        name="birthday"
    />
    <InputInForm v-model="phone" type-input="tel" label-name="Numéro de téléphone" name="phone"/>
    <InputInForm v-model="email" type-input="email" label-name="Adresse email" name="email"/>
    <InputInForm
        v-model="password"
        type-input="password"
        label-name="Mot de passe"
        name="password"
    />
    <InputInForm
        v-model="confirmPassword"
        type-input="password"
        label-name="Confirmer le mot de passe"
        name="confirm_password"
    />
    <InputInForm
        v-model="type"
        type-input="list"
        v-bind:options="options"
        label-name="Type utilisateur"
        name="type"
    />
    <input @click="signup" id="submit_signup" type="submit" value="S'inscrire">
    <ErrorMessage v-if="errorMessage !== ''" :error-message="errorMessage"/>
  </form>
  <p>Déjà un compte?
    <button @click="goToConnectionPage">Connexion</button>
  </p>
</template>

<style>
#submit_signup {
  background-color: blue;
  color: white;
  border-radius: 30px;
}
</style>