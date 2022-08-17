<template>
  <div>
    <Navigation/>
    <hybrid-lab/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import HybridLab from '@/plugins/app@hybridlab/hybrid-lab'

export default {
  name: 'App',
  components: { HybridLab, Footer, Navigation }
}
</script>

<style>
</style>
