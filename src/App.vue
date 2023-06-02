<template>
  <div class="game-container">
    <div>
      <CategorySelect @set-games="SetGames" />
    </div>
    <div>
      <GamePreviewList :games="games" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type Game from '@/Model/Game'
import { ref } from 'vue'
import CategorySelect from '@/components/category/CategorySelect.vue'
import GamePreviewList from '@/components/Game/GamePreviewList.vue'
import GameService from '@/Service/GameService'
import type Category from '@/Model/Category'
let games = ref<Game[]>([])

async function SetGames(_categories: Category[]) {
  console.log(_categories)
  games.value = await GameService.FetchGames(_categories)
}
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
