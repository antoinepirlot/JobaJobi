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
  rows: {
    type: String,
  },
  cols: {
    type: String,
  },
});
</script>

<template>
  <div>
    <label v-bind:for="name" class="leftLabel">{{ labelName }}:</label>
    <textarea
      v-bind:name="name"
      v-bind:id="name"
      v-bind:rows="rows"
      v-bind:cols="cols"
      required
    >
    </textarea>
  </div>
</template>

<style>
.leftLabel {
  vertical-align: top;
}
</style>
