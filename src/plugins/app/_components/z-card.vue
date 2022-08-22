<template>
  <div>
    <h5>{{title}}</h5>
    <p>{{description}}</p>
    <icon name="arrow-right"/>
  </div>
</template>

<script>
import icon from '../_components/z-icon/z-icon'

export default {
  name: 'card',
  components: { icon },
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
