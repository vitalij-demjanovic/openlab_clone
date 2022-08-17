<template>
  <div>
    <Navigation/>
    <SchoolPage/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import SchoolPage from '@/plugins/app@school/SchoolPage'

export default {
  name: 'App',
  components: { SchoolPage, Footer, Navigation }
}
</script>

<style>
</style>
