<template>
  <div>
    <Navigation/>
    <teachers-page/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import TeachersPage from '@/plugins/app@teacher/TeachersPage'

export default {
  name: 'App',
  components: { TeachersPage, Footer, Navigation }
}
</script>

<style>
</style>
