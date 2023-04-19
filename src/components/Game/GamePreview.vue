<template>
  <div class="game-preview">
    <img :src="game.imageURL" alt="Game Cover" class="game-image"/>
  </div>
</template>

<script lang="ts" setup>
import Game from '@/Model/Game'

defineProps<{ game: Game }>()
</script>

<style scoped>
.game-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px; /* add border-radius */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>

