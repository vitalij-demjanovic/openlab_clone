<template>
  <div class="pd-wrapper container">
    <b-row>
      <b-col class="text-center">
        <h1 class="mb-5">
          Prečo
          <span class="span-weight">OpenLab?</span>
        </h1>
        <p class="text-gray mx-md-5">V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.</p>
      </b-col>
    </b-row>
    <b-row class="pt-5 justify-content-center">
      <b-col class="col-12 col-md-3 text-center text-md-start mb-0 mb-4">
        <img class="mb-2" src="../_icons/select.svg" alt="selct">
        <h5 class="fw-bold mb-2">Celospoločenský rozvoj</h5>
        <p class="text-gray">Osnovy aj učebné materiály pre všetky tech oblasti sú open source</p>
      </b-col>
      <b-col class="col-12 col-md-3 text-center text-md-start mb-0 mb-4">
        <img class="mb-2" src="../_icons/support.svg" alt="select">
        <h5 class="fw-bold mb-2">Učenie praxou</h5>
        <p class="text-gray">Študentov vedieme k tímovému riešeniu problémov.</p>
      </b-col>
      <b-col class="col-12 col-md-3 text-center text-md-start">
        <img class="mb-2" src="../_icons/intership.svg" alt="select">
        <h5 class="fw-bold mb-2">Rozvoj talentu</h5>
        <p class="text-gray">Vytvárame šikovné tímy schopné riešiť veľké problémy.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-why-opnelab',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
