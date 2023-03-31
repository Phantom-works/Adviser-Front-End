<template>
  <header>
    <h1>
      {{ text }}
    </h1>
  </header>
</template>

<script>
export default {
  name: 'GameAdviserHeader',
  props: {
    text: {
      type: String,
    },
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: auto;
  }
</style>

