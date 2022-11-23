<script setup>
import router from "@/router";

window.localStorage.removeItem("token");
window.sessionStorage.removeItem("token");
router.push("/login");
</script>

<template>

</template>