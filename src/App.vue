<template>
  <div>
    <a-header/>
    <app-lab/>
    <a-footer/>
  </div>
</template>

<script>
import AHeader from '@/plugins/app/_layout/a_header'
import AFooter from '@/plugins/app/_layout/a_footer'
import AppLab from '@/plugins/app@applab/app-lab'

export default {
  name: 'App',
  components: { AppLab, AFooter, AHeader }
}
</script>

<style>
</style>
