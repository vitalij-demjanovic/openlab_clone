<template>
  <div>
    <img :src="image">
    <h5>{{title}}</h5>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'technology-card',
  props: {
    image: String,
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
