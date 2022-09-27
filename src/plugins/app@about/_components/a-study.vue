<template>
  <div class="bg-primary-lighter">
    <div class="container pt-5">
      <b-row>
        <b-col class="col-lg-6 col-xl-5 mb-5 z-index-1">
          <h1 class="mb-5">
            <span class="fw-bold">Chceš ísť študovať odbor</span>
            kompletne zameraný na IT?
          </h1>
          <div class="heading fw-bold">2573M</div>
          <span class="fw-bold">Programovanie digitálnych technológií</span>
          <p class="mb-3 text-gray">Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.</p>
          <p class="mb-5 text-gray">Staň sa súčasťou tohto inovatívneho študijného programu aj ty!</p>
          <button class="g-btn btn-lg">Chcem vedieť viac</button>
        </b-col>
        <b-col class="col-lg-6 col-xl-7 d-none d-lg-flex align-items-end">
          <img class="img-fluid" src="../_icons/introduction-img.png" alt="introduction">
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-study',
  components: { BCol, BRow }
}
</script>

<style lang="sass">
.study-img
  position: absolute
  margin-left: 100px
  left: 50%
  bottom: 0
  height: auto !important
  width: auto !important
  max
  z-index: 99

</style>
