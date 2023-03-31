<template>
  <div class="gameCategory">
    <h3>
      {{category.title}}
      {{category.id}}
    </h3>
  </div>
</template>

<script setup lang="ts">

import Category from "@/components/Interfaces/Category";

defineProps<{category: Category}>()

</script>

<style scoped>

.gameCategory{
  background: #4fc08d;
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

div:hover {
  filter: brightness(85%);
}

</style>

