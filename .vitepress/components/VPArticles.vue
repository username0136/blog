<script setup>
import {data as data} from "../blog.data.ts";
</script>

<template>
  <div class="articles flex flex-col gap-4 justify-center">
    <div v-for="(article, index) in data" :key="index">
      <VPArticle
        :title="article.title"
        :authors="article.authors"
        :tags="article.tags"
        :href="article.url"
      />
    </div>
  </div>
</template>
