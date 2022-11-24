<script setup>
defineProps({
  message: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="path">
    <li>
      {{ message }}
    </li>
  </RouterLink>
</template>