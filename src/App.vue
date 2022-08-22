<template>
  <div>
    <a-header/>
    <about/>
    <a-footer/>
  </div>
</template>

<script>
import AHeader from '@/plugins/app/_layout/a-header'
import AFooter from '@/plugins/app/_layout/a-footer'
import About from '@/plugins/app@about/about'

export default {
  name: 'App',
  components: { About, AFooter, AHeader }
}
</script>

<style>
</style>
