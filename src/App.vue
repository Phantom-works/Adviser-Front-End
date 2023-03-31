<template>

    <div>
      <GameAdviserHeader
          text="Game Adviser"
      />

      <category-list
      />
    </div>

  <div>
    <RoundedButton
    text="hello world"
    background="lightgreen"
    color="black"
    />
  </div>


</template>

<script setup lang="ts">
import RoundedButton from "./components/buttons/RoundedButton.vue"
import GameAdviserHeader from "@/components/GameAdviserHeader.vue";
import CategoryList from "@/components/category components/CategoryList.vue";
import ICategory from "@/components/Interfaces/ICategory.vue";

import { defineComponent } from 'vue';

defineComponent({
      name: "app",
      components:{
        RoundedButton,
        GameAdviserHeader,
        CategoryList,
      },
      data(){
        return{
          categories: ICategory,
        }
      },
      created(){
        this.categories = [
          {
            name: "platformer",
          },
          {
            name: "rougelike"
          },
          {
            name: "puzzle"
          },
          {
            name: "open world"
          }
        ]
      }
    });

</script>

<style scoped>

</style>
