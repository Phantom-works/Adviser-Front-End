<template>
  <div v-for="category in categories" :key="category.id" class="categories-container">
    <CoCategory :category="category" @DeleteCategory="DeleteCategory"/>
  </div>
</template>

<script lang="ts" setup>
import type Category from '@/BLL/Category'
import CoCategory from '@/components/category/GameCategory.vue'

defineProps<{ categories: Category[] }>()

const emit = defineEmits(['DeleteCategory'])
function DeleteCategory (_id: number) {
  emit("DeleteCategory", _id)
}
</script>

<style scoped>
.categories-container {
  display: inline-block; /* or display: inline-flex; */
}
</style>
