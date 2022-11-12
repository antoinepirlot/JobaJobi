<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <label v-bind:for="name">Type de contrat:</label>
    <select v-bind:name="name">
      <option v-for="op in options">
        {{ op }}
      </option>
    </select>
  </div>
</template>
