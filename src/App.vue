<template>
  <div>
    <Navigation/>
    <MainPage/>
    <Footer/>
  </div>
</template>

<script>

import Navigation from '@/plugins/app/_layout/Navigation'
import MainPage from '@/plugins/app@main/MainPage'
import Footer from '@/plugins/app/_layout/Footer'
export default {
  name: 'App',
  components: { Footer, MainPage, Navigation }
}
</script>

<style>
</style>
