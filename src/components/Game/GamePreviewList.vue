<template>
  <div class="game-list">
    <div v-for="game in games" :key="game.id" class="game-preview-container">
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
  flex-wrap: wrap;
  justify-content: center; /* center horizontally */
  gap: 20px; /* add gap between previews */
  margin: 0 auto; /* center vertically */
  max-width: 1200px; /* limit width */
}

.game-preview-container {
  width: calc(33.33% - 20px); /* reduce width to add more gap */
}
</style>

