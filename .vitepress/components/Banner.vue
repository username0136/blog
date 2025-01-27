<template>
  <img
    :src="src"
    :alt="alt"
    class="rounded-2xl"
    loading="eager"
    :height="height"
    :width="width"
  />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: "Banner",
  },
  height: {
    type: [String, Number],
    default: "auto",
  },
  width: {
    type: [String, Number],
    default: "auto",
  },
});
</script>
