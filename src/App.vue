<template>
  <div>
    <a-header/>
    <router-view/>
    <a-footer/>
  </div>
</template>

<script>
import AHeader from '@/plugins/app/_layout/a-header'
import AFooter from '@/plugins/app/_layout/a-footer'

export default {
  name: 'App',
  components: { AFooter, AHeader }
}
</script>

<style>
</style>
