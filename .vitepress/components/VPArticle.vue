<template>
  <a :href="href" class="card-container">
    <div class="card">
      <img :src="image" :alt="title" class="media-img" />
      <div class="details">
        <h1 class="title">{{ title }}</h1>
        <p class="name">
          Authors:
          <span v-for="(author, index) in authors" :key="index">
            {{ author }}<span v-if="index < authors.length - 1">, </span>
          </span>
        </p>
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag"
            ><Badge type="tip">{{ tag }}</Badge></span
          >
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card-container {
  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;
}

.card-container:hover {
  border-color: var(--vp-c-brand-1);
}

.details {
  margin: 1rem;
}

a {
  text-decoration: inherit;
  color: var(--vp-text-color);
}

h2 {
  margin: 0;
  padding-top: 0;
}

.media-img {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.name {
  display: inline-flex;
  gap: 0.5rem;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
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
