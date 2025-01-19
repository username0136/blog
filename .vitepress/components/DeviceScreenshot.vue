<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    :style="{ borderRadius: radius + 'px' }"
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
    radius: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
};
</script>
