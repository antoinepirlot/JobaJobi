<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  labelName: {
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
    <label v-bind:for="name">{{labelName}} :</label>
    <select v-bind:name="name">
      <option v-for="op in options">
        {{ op }}
      </option>
    </select>
  </div>
</template>
