<script setup>
import { ref } from "vue";
import router from "../router/index.js";
import InputInFormVue from "../components/InputInForm.vue";
import SubmitButtonInFormVue from "../components/SubmitButtonInForm.vue";
import NotificationSpanVue from "../components/NotificationSpan.vue";
import api_requests from "@/utils/api_requests";

const email = ref('');
const password = ref('');
const notification = ref('');
const stayConencted = ref(false);

const goToSignUpPage = () => {
  router.push("/signup")
  return;
};

function toggleStayConnected() {
  stayConencted.value = !stayConencted.value;
}

const login = async (e) => {
  e.preventDefault();
  const user = {
    email: email.value,
    password: password.value
  };
  const newUser = await api_requests.login(user);
  if(typeof newUser !=="object") {
    notification.value=newUser;
    return;
  }
  if (stayConencted.value) {
    window.localStorage.setItem("token", newUser.token);
  } else {
    window.sessionStorage.setItem("token", newUser.token);
  }
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
            <InputInFormVue
                @click="toggleStayConnected"
                type-input="checkbox"
                label-name="Rester connecter"
                name="stay_connected"
                :required="false"
            />
            <NotificationSpanVue :notificationName="notification" color="red"/>
            <SubmitButtonInFormVue name="Se connecter" />
            <div>
                <span>Pas encore de compte ? </span>
                <span @click="goToSignUpPage" class="goToAPage">Inscription</span>
            </div>
        </form>
    </div>
</template>

<style>


</style>
