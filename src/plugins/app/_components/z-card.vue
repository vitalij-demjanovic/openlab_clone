<template>
  <div class="card-body px-4 pt-4 pb-5 px-xl-5 slider-scroll_item">
    <h5 class="fw-bold">{{title}}<span class="fw-light">Lab</span></h5>
    <p class="text-gray">{{description}}</p>
    <div class="card-body_icon">
      <z-icon iconName="arrow-right"/>
    </div>
  </div>
</template>

<script>
import ZIcon from '../_components/z-icon/z-icon'

export default {
  name: 'card',
  components: { ZIcon },
  props: {
    title: String,
    description: String
  }
}
</script>

<style lang="sass">
.card-body
  max-width: 300px !important
  min-width: 288px !important
  border-radius: 5px
  transition: all 0.5s ease
  cursor: pointer
  &:hover
    box-shadow: 0 0 15px 4px rgba(0,0,0,0.1)
    .card-body_icon
      color: #3597ff !important
</style>
