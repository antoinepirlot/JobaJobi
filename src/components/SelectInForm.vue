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
  },
  modelValue: {
    type: String
  }
});
</script>

<template>
  <div>
    <label v-bind:for="name">{{labelName}} :</label>
    <select v-bind:name="name" v-bind:value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <option v-for="op in options">
        {{ op }}
      </option>
    </select>
  </div>
</template>
