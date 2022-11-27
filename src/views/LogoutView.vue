<script setup>
import router from "@/router";
import {useNavbarStore} from "@/stores/navbar_variables";

const store = useNavbarStore();
window.localStorage.removeItem("token");
window.sessionStorage.removeItem("token");
router.push("/login");
await store.changeIsUser();
</script>

<template>

</template>