<script setup>
import data from "/data.json";
</script>

<template>
  <div class="articles flex flex-col gap-4 justify-center">
    <div v-for="(article, index) in data" :key="index">
      <VPArticle
        :title="article.title"
        :authors="article.authors"
        :tags="article.tags"
        :href="article.path"
      />
    </div>
  </div>
</template>
