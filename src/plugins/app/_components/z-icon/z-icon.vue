<template>
  <component :is="iconName"></component>
</template>

<script>
import * as icons from '../z-icon/_components'

export default {
  name: 'z-icon',
  components: { ...icons },
  props: {
    iconName: {
      type: String,
      required: true,
      validator (value) {
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>

<style scoped>

</style>
