<template>
  <button
      :style="{ background, color,}"
      :class="{'disable-button': disabled}"
  >
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RoundedButton',
  props: {
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
  },
});
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
  filter: brightness(120%);
}
</style>