<template>
  <div class="position-relative">
    <div class="container pd-wrapper">
      <h1 class="mb-5 text-center"><span class="span-weight">Nachádzame sa</span> na dvoch školách</h1>
      <b-row class="justify-content-between">
        <b-col class="col-12 col-md-5 mb-5 mb-md-0">
          <img class="mb-4" src="../_icons/school1.png" alt="school">
          <div>
            <img src="../_icons/place.svg" alt="place">
            <span class="text-gray">Hálova 16, Bratislava</span>
          </div>
          <div class="d-flex flex-md-row flex-column align-items-start justify-content-between align-items-md-end mt-3">
            <span class="school-address">Stredná Priemyselná Škola Elektrotechnická</span>
            <a class="fw-bold" href="https://spsehalova.sk/">www.spsehalova.sk</a>
          </div>
        </b-col>
        <b-col class="col-12 col-md-5">
          <img class="mb-4" src="../_icons/school2.png" alt="school">
          <div>
            <img src="../_icons/place.svg" alt="place">
            <span class="text-gray">Nábrežná 1325, Kysucké Nové Mesto</span>
          </div>
          <div class="d-flex flex-md-row flex-column align-items-start justify-content-between align-items-md-end mt-3">
            <span class="school-address">Stredná Priemyselná Škola Informačných Technológií</span>
            <a class="fw-bold" href="https://spsknm.sk">www.spsknm.sk</a>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="d-none d-md-block overflow-hidden position-absolute shape">
      <img src="../_icons/p_letter.png">
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-schools',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
