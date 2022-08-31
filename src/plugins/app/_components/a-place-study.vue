<template>
  <div class="container pd-wrapper">
    <h1 class="text-center mb-5">
      <span class="fw-bold">Kde môžeš študovať</span>
      GamesLab?
    </h1>
    <b-row class="align-items-center">
      <b-col class="col-4 offset-1">
        <span class="text-gray">V študijnom odbore</span>
        <h2 class="fw-bold mb-4">Programovanie <br> digitálnych technológií</h2>
        <p class="text-gray mb-4">Tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch.</p>
        <button class="g-btn btn-lg">Chcem vedieť viac o odbore</button>
      </b-col>
      <b-col class="col-6 offset-1">
        <img class="mb-4" src="../_icons/school1.png" alt="school">
        <h5 class="fw-bold mb-3">Stredná Priemyselná Škola Elektrotechnická</h5>
        <div class="d-flex justify-content-between">
          <span>Hálova 16, 851 01 Bratislava</span>
          <a href="https://www.spsehalova.sk/">www.spsehalova.sk</a>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'place-study',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
