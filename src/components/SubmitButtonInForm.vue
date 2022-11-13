<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <div>
      <button type="submit">{{name}}</button>
    </div>
</template>
