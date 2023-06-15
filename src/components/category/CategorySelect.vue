<template>
  <div class="categories-container">
    <category-input-field @AddCategory="AddCategory"/>
    <CategoryList :categories="categories" @DeleteCategory="DeleteCategory" />
    <label>Quantity (between 1 and 5):</label>
    <input v-model="quantity" type="number" min="1" max="5">
  </div>
</template>

<script lang="ts" setup>
import CategoryList from '@/components/category/CategoryList.vue'
import type Category from '@/Model/Category'

import { ref } from 'vue'
import CategoryInputField from '@/components/category/CategoryInputField.vue'
const emit = defineEmits(['SetGames'])
const quantity = ref(5);
function DeleteCategory(_id: number) {
  categories.value = categories.value.filter((category) => category.id !== _id)

  emit("SetGames", categories.value, quantity.value)
}

function AddCategory(_title: string) {
  let category = ref<Category>({
    id: categories.value.length + 1,
    title: _title
  })

  categories.value.push(category.value)

  emit("SetGames", categories.value, quantity.value)
}

let categories = ref<Category[]>([
])
</script>

<style scoped>
.categories-container{
  width: 100%;
}
</style>

