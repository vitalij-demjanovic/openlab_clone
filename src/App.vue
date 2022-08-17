<template>
  <div>
    <Navigation/>
    <partners-page/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import PartnersPage from '@/plugins/app@partners/PartnersPage'

export default {
  name: 'App',
  components: { PartnersPage, Footer, Navigation }
}
</script>

<style>
</style>
