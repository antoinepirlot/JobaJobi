<script setup>
import { ref } from "vue";
import router from "../router/index.js";
import InputInFormVue from "../components/InputInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import NotificationSpanVue from "../components/NotificationSpan.vue";

if(localStorage.token) router.push("/");

const email = ref('')
const password = ref('')
const notification = ref('')

const goToSignUpPage = () => {
  router.push("/signup")
  return;
};

const login = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value
  };
  const newUser = await loginToBackend(user);
  if(!newUser) return;
  localStorage.token=newUser.token;
  router.push("/");
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
      if(response.status===401) notification.value="L'adresse email ou le mot de passe est incorrect";
      return;
    }
    return await response.json();
  } catch (err) {
    console.error("error: ", err);
  }
};
</script>

<template>
    

    <div class="form">
        <h1>Connexion</h1>
        <form @submit="login" id="formLogin">
            <InputInFormVue
                name="email"
                labelName="Adresse email"
                typeInput="email"
                v-model="email"
            />
            <InputInFormVue
                name="password"
                labelName="Mot de passe"
                typeInput="password"
                v-model="password"
            />  
            <div>
                <span>Pas encore de compte ? </span>
                <span @click="goToSignUpPage" id="goToSignUpPage">Inscription</span>
            </div>
            <NotificationSpanVue :notificationName="notification" color="red"/>
            <SubmitButtonInFormVue name="Se connecter" />
        </form>
    </div>
</template>

<style>
    #goToSignUpPage{
        text-decoration: underline;
        cursor: pointer;
    }

</style>
