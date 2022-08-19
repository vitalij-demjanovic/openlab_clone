<template>
  <div>
    <Navigation/>
    <app-lab/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import AppLab from '@/plugins/app@applab/app-lab'

export default {
  name: 'App',
  components: { AppLab, Footer, Navigation }
}
</script>

<style>
</style>
