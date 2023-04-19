<template>
  <CategorySelect/>
  <GamePreviewList :games="games"/>
</template>

<script lang="ts" setup>
import Game from '@/Model/Game'
import { ref } from 'vue'
import CategorySelect from "@/components/category/CategorySelect.vue";
import GamePreviewList from "@/components/Game/GamePreviewList.vue";

let games = ref<Game[]>([
  new Game(
    1,
    'The Legend of Zelda: Breath of the Wild',
    'Nintendo',
    'March 3, 2017',
    'Action-adventure',
    ['Nintendo Switch', 'Wii U'],
    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg'
  ),
  new Game(
    1,
    'The Legend of Zelda: Breath of the Wild',
    'Nintendo',
    'March 3, 2017',
    'Action-adventure',
    ['Nintendo Switch', 'Wii U'],
    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg/220px-The_Legend_of_Zelda_Breath_of_the_Wild.jpg'
  )
])
</script>
