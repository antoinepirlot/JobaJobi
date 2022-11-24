<script async setup>
import {ref} from "vue";
import InputInForm from "@/components/InputInForm.vue";
import router from "@/router";
import ErrorMessage from "@/components/ErrorMessage.vue";
import utils from "@/utils/utils";
import api_requests from "@/utils/api_requests";
import SelectInForm from "@/components/SelectInForm.vue";
import SubmitButtonInForm from "@/components/SubmitButtonInForm.vue";
import TextAreaInForm from "@/components/TextAreaInForm.vue";


const options = ["Particulier", "Entreprise"];

//Form values
const birthday = ref(null);
const phone = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const type = ref(options[0]);
const stayConencted = ref(false);
//Particulier
const lastName = ref("");
const firstName = ref("");
//Companies
const companyName = ref("");
const companyTown = ref("");
const companyDescription = ref("");

let errorMessage = ref("");

function goToConnectionPage() {
  router.push("/login")
}

function toggleStayConnected() {
  stayConencted.value = !stayConencted.value;
}

async function signup(e) {
  e.preventDefault();
  errorMessage.value = "";
  if(type.value === options[0]) {
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
  } else {
    if (companyName.value === "") {
      errorMessage.value = "Missing company name";
      return;
    }
    if (companyTown.value === "") {
      errorMessage.value = "Missing company town";
      return;
    }
    if (companyDescription.value === "") {
      errorMessage.value = "Missing company description";
      return;
    }
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
  if (!utils.checkPassword(password.value, confirmPassword.value)) {
    errorMessage.value = "Passwords don't match";
    return;
  }
  const user = {
    birthday: birthday.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    type: type.value
  };
  if(type === options[0]) {
    user.firstName = firstName.value;
    user.lastName = lastName.value;
  } else {
    user.companyName = companyName.value;
    user.companyTown = companyTown.value;
    user.companyDescription = companyDescription.value;
  }
  try {
    const token = await api_requests.signup(user);
    if (stayConencted.value) {
      window.localStorage.setItem("token", token);
    } else {
      window.sessionStorage.setItem("token", token);
    }
  } catch (e) {
    console.error(e.message);
  }
  await router.push("/");
}
</script>

<template>
  <div class="form">
    <h1>Inscription</h1>
    <form>
      <div v-if="type===options[0]">
        <InputInForm v-model="lastName" type-input="text" label-name="Nom" name="lastname"/>
        <InputInForm v-model="firstName" type-input="text" label-name="Prénom" name="firstname"/>
        <InputInForm
            v-model="birthday"
            type-input="date"
            label-name="Date de naissance"
            name="birthday"
        />
      </div>
      <div v-else>
        <InputInForm
            v-model="companyName"
            type-input="text"
            label-name="Nom de l'entreprise"
            name="companyName"
        />
        <InputInForm
            v-model="companyTown"
            type-input="text"
            label-name="Siège Social"
            name="companyTown"
        />
        <TextAreaInForm
            v-model="companyDescription"
            label-name="Description de l'entreprise"
            name="companyDescription"
        />
      </div>
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
      <SelectInForm
          v-model="type"
          label-name="Type d'utilisateur"
          name="type_list"
          v-bind:options="options"
      />
      <InputInForm
          @click="toggleStayConnected"
          type-input="checkbox"
          label-name="Rester connecter"
          name="stay_connected"
      />
      <SubmitButtonInForm @click="signup" name="S'inscrire"/>
      <ErrorMessage v-if="errorMessage !== ''" :error-message="errorMessage"/>
    </form>
    <p>Déjà un compte?
      <span @click="goToConnectionPage" class="goToAPage">Connexion</span>
    </p>
  </div>
</template>