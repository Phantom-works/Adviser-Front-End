<template>
  <div class="input-container">
      <input v-model="text" class="rounded-input" placeholder="Enter text here" type="text" />
      <DefaultButton class="button" text="+" @click="AddCategory"/>
  </div>
</template>

<script lang="ts" setup>
import DefaultButton from '@/components/default/DefaultButton.vue'
import { ref } from 'vue'
const emit = defineEmits(['AddCategory'])

const text = ref()
function AddCategory() {
  if (!text.value) {
    alert('type category first')
    return
  }
  emit('AddCategory', text.value)

  text.value = ''
}
</script>

<style scoped>
.input-container {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
}

.rounded-input {
  background-color: #333;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
  flex: 1;
}

.button{
  font-size: x-large;
}
</style>
