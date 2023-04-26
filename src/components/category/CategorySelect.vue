<template>
  <div class="categories-container">
    <category-input-field @AddCategory="AddCategory"/>
    <CategoryList :categories="categories" @DeleteCategory="DeleteCategory" />
  </div>
</template>

<script lang="ts" setup>
import CategoryList from '@/components/category/CategoryList.vue'
import type Category from '@/Model/Category'

import { ref } from 'vue'
import CategoryInputField from '@/components/category/CategoryInputField.vue'
function DeleteCategory(_id: number) {
  categories.value = categories.value.filter((category) => category.id !== _id)
}

function AddCategory(_title: string) {
  let category = ref<Category>({
    id: categories.value.length + 1,
    title: _title
  })

  categories.value.push(category.value)
}

let categories = ref<Category[]>([
])
</script>

<style scoped>
.categories-container{
  width: 100%;
}
</style>

