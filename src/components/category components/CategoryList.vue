<template>
  <div v-for="category in categories" :key="category.id">
    <GameCategory :category="category"/>
  </div>
</template>

<script setup lang = ts>

import type Category from "@/components/Interfaces/Category";
import GameCategory from "@/components/category components/GameCategory.vue";

defineProps<{categories: Category[]}>()
</script>

<style scoped>

</style>

