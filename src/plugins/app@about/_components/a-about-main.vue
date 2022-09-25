<template>
  <div class="bg-blue position-relative">
    <div class="container">
      <b-row class="align-items-center position-relative">
        <b-col class="z-index-1 col-12 col-lg-5 my-md-5 py-5">
          <h1>Inštitút stredoškolského odborného vzdelávania</h1>
          <span class="title-span fw-bold">zameraný na IT & AI</span>
          <p class="text-width mt-4">Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
        </b-col>
        <b-col class="col-12 col-lg-7 d-flex justify-content-center">
          <img class="image-vid" src="../_icons/introduction-img.png" alt="introduction">
        </b-col>
      </b-row>
    </div>
    <div class="d-none d-md-block overflow-hidden position-absolute shape">
      <img src="../_icons/o_letter.png" alt="shape">
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'

export default {
  name: 'a-about-main',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
