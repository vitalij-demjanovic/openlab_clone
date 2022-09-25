<template>
  <div class="container">
    <b-row class="align-items-center">
      <b-col class="mb-5 col-12 col-md-6 col-12">
        <h1 class="mb-5">
          Naša vízia
          <span class="span-weight">v OpenLabe</span>
        </h1>
        <p class="text-gray">Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.</p>
        <p class="text-gray">Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.</p>
      </b-col>
      <b-col class="col-lg-6 col-12 d-flex flex-wrap justify-content-center justify-content-lg-end px-1 px-md-2 gap-3">
        <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
          <span class="count fw-bold mb-1 lh-1">11</span>
          <p class="fw-bold type">tried</p>
        </div>
        <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
          <span class="count fw-bold mb-1 lh-1">222</span>
          <p class="fw-bold type">študentov</p>
        </div>
        <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
          <span class="count fw-bold mb-1 lh-1">14</span>
          <p class="fw-bold type">labmastrov</p>
        </div>
        <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
          <span class="count fw-bold mb-1 lh-1">2</span>
          <p class="fw-bold type">školy</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-vision',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
