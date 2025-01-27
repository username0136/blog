<template>
  <a
    :href="href"
    class="card-container !no-underline group block h-full rounded-xl p-4"
  >
    <h1 class="group group-hover:underline">{{ title }}</h1>
    <p class="inline-flex gap-1.5">
      Authors:
      <span v-for="(author, index) in authors" :key="index">
        {{ author }}
        <span v-if="index < authors.length - 1">, </span>
      </span>
    </p>
    <p class="!my-0 flex flex-row flex-nowrap gap-2">
      <span v-for="tag in tags" :key="tag">
        <Badge type="tip">{{ tag }}</Badge>
      </span>
    </p>
  </a>
</template>

<style scoped>
.card-container {
  border: 1px solid var(--vp-c-bg-soft);
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.card-container:hover {
  border-color: var(--vp-text-color);
}

a {
  color: var(--vp-text-color);
}

a:hover {
  color: var(--vp-text-color);
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    authors: {
      type: Array,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>
