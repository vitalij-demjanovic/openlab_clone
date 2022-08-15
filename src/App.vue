<template>
  <div>
    <Navigation/>
    <MainPage/>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'
import MainPage from '@/pages/MainPage'
export default {
  name: 'App',
  components: { MainPage, Navigation }
}
</script>

<style>
</style>
