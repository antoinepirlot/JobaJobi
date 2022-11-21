<script setup>
import {ref} from "vue";

const props = defineProps({
  errorMessage: String
})
</script>

<template>
  <p id="errorMessage">{{errorMessage}}</p>
</template>

<style>
#errorMessage {
  color: red;
}
</style>