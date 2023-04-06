<template>
  <div class="input-container">
    <input v-model="text" class="rounded-input" placeholder="Enter text here" type="text" />
    <DefaultButton text="+" @click="AddCategory" />
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
}

.rounded-input {
  background-color: #333;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  flex: 1;
}
</style>
