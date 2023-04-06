<template>
  <button :class="{ 'disable-button': disabled }" :style="{ background, color }">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String
  },
  color: {
    type: String
  },
  background: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})
</script>

<style scoped>
.disable-button {
  opacity: 0.5;
}

button {
  background-color: #3f8b72;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  margin-left: 10px;
}

button:hover {
  filter: brightness(85%);
}
</style>
