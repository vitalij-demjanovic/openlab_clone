<template>
  <div class="card-technology position-relative mt-5">
    <img class="position-absolute card-technology_image" :src="image">
    <h5 class="pt-5 fw-bold mb-3">{{title}}</h5>
    <p class="text-gray fw-bold">{{description}}</p>
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

<style lang="sass">
.card-technology
  box-shadow: 0px 11px 40px 3px rgb(0 0 0 / 5%)
  border-radius: 16px
  padding: 3rem

.card-technology_image
  top: -50px
  left: 20px
</style>
