<template>
  <div>
    <Navigation/>
    <MainPage/>
  </div>
</template>

<script>

import Navigation from '@/plugins/app/_layout/Navigation'
import MainPage from '@/plugins/app@main/MainPage'
export default {
  name: 'App',
  components: { MainPage, Navigation }
}
</script>

<style>
</style>
