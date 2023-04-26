<template>
  <div v-for="category in categories" :key="category.id" class="categories-container">
    <CoCategory :category="category" @DeleteCategory="DeleteCategory"/>
  </div>
</template>

<script lang="ts" setup>
import type Category from '@/Model/Category'
import CoCategory from '@/components/category/CategoryBubble.vue'

defineProps<{ categories: Category[] }>()

const emit = defineEmits(['DeleteCategory'])
function DeleteCategory (_id: number) {
  emit("DeleteCategory", _id)
}
</script>

<style scoped>
.categories-container {
  display: inline-block;
}
</style>
