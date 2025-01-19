<script setup>
import data from "/data.json";
</script>

<template>
  <div class="articles">
    <div v-for="(article, index) in data" :key="index">
      <VPArticle
        :title="article.title"
        :image="article.image"
        :authors="article.authors"
        :tags="article.tags"
        :href="article.path"
      />
    </div>
  </div>
</template>

<style scoped>
.articles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}
</style>
