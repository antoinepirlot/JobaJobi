<script setup>
import router from "@/router";
import navbar_variables from "@/utils/navbar_variables";

window.localStorage.removeItem("token");
window.sessionStorage.removeItem("token");
router.push("/login");
await navbar_variables.changeIsUser();
</script>

<template>

</template>