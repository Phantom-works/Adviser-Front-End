<template>
  <div class="game-container">
    <div>
      <CategorySelect/>
    </div>
    <div>
      <GamePreviewList :games="games"/>
    </div>
  </div>
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
      2,
      'Super Mario Odyssey',
      'Nintendo',
      'October 27, 2017',
      'Platformer',
      ['Nintendo Switch'],
      'https://gaming-cdn.com/images/products/2618/orig-fallback-v1/super-mario-odyssey-switch-switch-spel-nintendo-eshop-europe-cover.jpg?v=1649857014'
  ),
  new Game(
      3,
      'Red Dead Redemption 2',
      'Rockstar Games',
      'October 26, 2018',
      'Action-adventure',
      ['PlayStation 4', 'Xbox One', 'Google Stadia'],
      'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png'
  ),
  new Game(
      4,
      'The Last of Us Part II',
      'Naughty Dog',
      'June 19, 2020',
      'Action-adventure',
      ['PlayStation 4', 'PlayStation 5'],
      'https://gaming-cdn.com/images/products/2561/orig-fallback-v1/the-last-of-us-part-ii-ps4-ps5-action-spel-naughty-dog-cover.jpg?v=1649858966'
  ),
  new Game(
      5,
      'Hades',
      'Supergiant Games',
      'September 17, 2020',
      'Action-roguelike',
      ['Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S', 'PC'],
      'https://cdn.mobygames.com/covers/10377246-hades-windows-apps-front-cover.jpg'
  ),
])
</script>

<style scoped>
.game-container{
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
</style>
