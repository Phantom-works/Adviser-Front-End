<template>
  <div class="game-preview">
    <img :alt="game.title" :src="game.imageURL" class="game-image"/>
  </div>
</template>

<script lang="ts" setup>
import Game from '@/Model/Game'

defineProps<{ game: Game }>()
</script>

<style scoped>
.game-preview {
  display: flex;
  flex-wrap: wrap;
  align-items: self-start;
  justify-content: center;
  width: 200px;
  height: 300px;
  border-radius: 10px;
  margin: 0 1rem 1rem;
}

.game-image {
  object-fit: cover; /* add object-fit */
  width: 100%; /* adjust width */
  height: 100%; /* adjust height */
  border-radius: 10px; /* add border-radius */
}
</style>

