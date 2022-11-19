<script setup>
import { ref } from "vue";
import router from "../router/index.js";
import InputInFormVue from "../components/InputInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";

const email = ref('')
const password = ref('')

const login = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value
  };
  const newUser = await loginToBackend(user);
  //router.push("/");
  console.log(newUser);
  return;
};

const loginToBackend = async (user) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("/api/auths/login", options);
    if (!response.ok) {
      throw new Error(
        "fetch error : " + response.status + " : " + response.statusText
      );
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};
</script>

<template>
    <h1 class="centerFormElements">Connexion</h1>

    <form @submit="login" id="formLogin">
        <InputInFormVue
            class="centerFormElements"
            name="email"
            labelName="Adresse email"
            typeInput="text"
            v-model="email"
        />
        <InputInFormVue
            class="centerFormElements"
            name="password"
            labelName="Mot de passe"
            typeInput="password"
            v-model="password"
        />
        <SubmitButtonInFormVue class="centerFormElements" name="Se connecter" />
    </form>
</template>

<style>

</style>
