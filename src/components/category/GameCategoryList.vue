<template>
  <div v-for="category in categories" :key="category.id">
    <CoCategory :category="category" @DeleteCategory="DeleteCategory"/>
  </div>
</template>

<script lang="ts" setup>
import type Category from '@/BLL/Category'
import CoCategory from '@/components/category/GameCategory.vue'

defineProps<{ categories: Category[] }>()

const emit = defineEmits(['DeleteCategory'])
const DeleteCategory = (_id: number) => {
  emit("DeleteCategory", _id)
}
</script>

<style scoped></style>
