<script setup>
import { ref } from "vue";
import router from "../router/index.js";
import InputInFormVue from "../components/InputInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import NotificationSpanVue from "../components/NotificationSpan.vue";
import api_requests from "@/utils/api_requests";

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
  const newUser = await api_requests.login(user);
  if(!newUser) return;
  localStorage.token=newUser.token;
  router.push("/");
  return;
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
                <span @click="goToSignUpPage" class="goToAPage">Inscription</span>
            </div>
            <NotificationSpanVue :notificationName="notification" color="red"/>
            <SubmitButtonInFormVue name="Se connecter" />
        </form>
    </div>
</template>

<style>


</style>
