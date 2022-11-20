<script setup>
defineProps({
  notificationName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
});
</script>

<template>
    <span :class="color">{{notificationName}}</span>
</template>

<style>
  .red{
    color:red
  }
  .blue{
    color:blue
  }
  .green{
    color:green
  }
</style>