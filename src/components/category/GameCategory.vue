<template>
  <div class="gameCategory">
    <h3>{{ category.title }} <i class="fa-solid fa-x" @click="OnDelete(category.id)"></i></h3>
  </div>
</template>

<script lang="ts" setup>
import Category from '@/Model/Category'

defineProps<{ category: Category }>()

const emit = defineEmits(['DeleteCategory'])
function OnDelete (_id: number) {
  emit('DeleteCategory', _id)
}
</script>

<style scoped>
.fa-solid {
  color: #3f8b72;
  filter: brightness(40%);
}

.gameCategory {
  background: #3f8b72;
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  margin: 10px;
  position: relative;
  display: inline-block;
}
</style>
