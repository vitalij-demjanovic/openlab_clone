<template>
  <div>
    <h5>{{title}}</h5>
    <p>{{description}}</p>
    <arrow-right/>
  </div>
</template>

<script>
import arrowRight from '@/plugins/app/_components/arrow-right'

export default {
  name: 'card',
  components: { arrowRight },
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
