<script setup>
import SignUp from "@/components/forms/SignUp.vue";
import utils from "@/utils/utils";
import router from "@/router";
if(!utils.isConnected()) {
  router.push("/");
}
</script>

<template>
  <SignUp/>
</template>