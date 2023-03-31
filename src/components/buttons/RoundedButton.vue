<template>
  <button
      :style="{ background, color,}"
      :class="{'disable-button': disabled}"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">

defineProps({
  text: {
    type: String,
  },
  color: {
    type: String,
  },
  background: {
    type: String,
  },
  disabled: {
    type : Boolean,
  }
})

</script>

<style scoped>

.disable-button{
  opacity: 0.5;
}

button {
  background: #4fc08d;
  color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  filter: brightness(85%);
}
</style>