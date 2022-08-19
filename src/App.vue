<template>
  <div>
    <Navigation/>
    <games-lab/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/plugins/app/_layout/Navigation'
import Footer from '@/plugins/app/_layout/Footer'
import GamesLab from '@/plugins/app@gameslab/games-lab'

export default {
  name: 'App',
  components: { GamesLab, Footer, Navigation }
}
</script>

<style>
</style>
