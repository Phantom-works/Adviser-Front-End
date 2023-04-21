<template>
  <div class="game-list">
    <div v-for="game in games" :key="game.id">
      <GamePreview :game="game" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Game from '@/Model/Game'
import GamePreview from "@/components/Game/GamePreview.vue";

defineProps<{ games: Game[] }>()
</script>

<style scoped>
.game-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center; /* center horizontally */
  margin-top: 5%;
}
</style>

