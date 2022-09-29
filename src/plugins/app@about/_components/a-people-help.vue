<template>
  <div class="container">
    <div class="pd-wrapper">
      <b-row class="align-items-center">
        <b-col class="col-12 col-md-6">
          <img src="../_icons/people.png" alt="people">
        </b-col>
        <b-col class="col-12 col-md-6">
          <h2 class="fw-bold">Podporte nás</h2>
          <p>OpenLab postupne rozširujeme ako neziskový vzdelávací projekt s cieľom otvoriť OpenLab-y zamerané na rôzne IT technológie na čo najväčší počet škôl vo všetkých slovenských regiónoch. Veríme, že OpenLab bude natoľko úspešný, že sa stane štandardom vzdelávania na Slovensku!</p>
          <a href="https://www.ludialudom.sk/profil/detail/41588" class="d-flex align-items-center">Chcem podporiť <z-icon iconName="arrow-right"/></a>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-people-help',
  components: { BCol, BRow, ZIcon }
}
</script>

<style scoped>

</style>
