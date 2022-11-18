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
  typeInput: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String
  }
});
</script>

<template>
  <div>
    <label v-bind:for="name">{{labelName}}: </label>
    <input v-bind:type="typeInput" v-bind:name="name" v-bind:id="name" required  v-bind:value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
  </div>
</template>
