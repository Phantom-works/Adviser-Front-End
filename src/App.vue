<template>
  <div>
    <GameAdviserHeader text="Game Adviser" />
    <CategoryList :categories="categories" @DeleteCategory="DeleteCategory" />
  </div>

  <div>
    <RoundedButton text="hello world" />
  </div>
</template>

<script lang="ts" setup>
import RoundedButton from './components/default/DefaultButton.vue'
import GameAdviserHeader from '@/components/GameAdviserHeader.vue'
import CategoryList from '@/components/category/GameCategoryList.vue'
import type Category from '@/BLL/Category'

import { ref } from 'vue'
const DeleteCategory = (_id: number) => {
  categories.value = categories.value.filter((category) => category.id !== _id)
}

let categories = ref<Category[]>([
  {
    id: 1,
    title: 'sandbox'
  },
  {
    id: 2,
    title: 'roguelike'
  },
  {
    id: 3,
    title: 'puzzle'
  },
  {
    id: 4,
    title: 'open world'
  }
])
</script>

<style scoped></style>
