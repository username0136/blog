<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    class="rounded-3xl"
    alt="Screenshot"
  />
</template>

<script>
export default {
  name: "DeviceScreenshot",
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 230,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
};
</script>
