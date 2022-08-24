<template>
  <div>
    <a-header/>
    <teachers/>
    <a-footer/>
  </div>
</template>

<script>
import AHeader from '@/plugins/app/_layout/a-header'
import AFooter from '@/plugins/app/_layout/a-footer'
import Teachers from '@/plugins/app@teacher/teachers'

export default {
  name: 'App',
  components: { Teachers, AFooter, AHeader }
}
</script>

<style>
</style>
