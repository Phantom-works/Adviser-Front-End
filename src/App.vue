<template>

    <div>
      <GameAdviserHeader
          text="Game Adviser"/>
      <CategoryList :categories = "categories" />
    </div>

  <div>
    <RoundedButton
    text="hello world"
    />
  </div>


</template>

<script setup lang="ts">
import RoundedButton from "./components/buttons/RoundedButton.vue"
import GameAdviserHeader from "@/components/GameAdviserHeader.vue";
import CategoryList from "@/components/category components/CategoryList.vue";
import type Category from "@/components/Interfaces/Category";

import {ref} from 'vue';

const categories = ref<Category[]>([{
      id: 1,
      title: "sandbox",
    },
    {
      id: 2,
      title: "roguelike"
    },
    {
      id: 3,
      title: "puzzle"
    },
    {
      id: 4,
      title: "open world"
    }])

</script>

<style scoped>

</style>
