<template>
  <div>
    <h2>Nezaujal ťa tento Lab? Pozri si ďalšie</h2>
    <div>
      <card
        v-for="option in options"
        :key="option.id"
        :title="option.title"
        :description="option.description"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/plugins/app/_components/card'
export default {
  name: 'options',
  components: { Card },
  props: {
    options: Array
  }
}
</script>

<style scoped>

</style>
