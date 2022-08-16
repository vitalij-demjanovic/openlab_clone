<template>
  <div>
    <b-row>
      <b-col>
        <img src="../_layout/_icons/openlab-logo.svg" alt="openlab">
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-3">
        © 2022 Všetky práva vyhradené OPENLAB, o.z.,
      </b-col>
      <b-col class="col-3">
        <p>IČO: 50764675</p>
        <p>Viedenská cesta 257, 805 01 Bratislava</p>
      </b-col>
      <b-col class="col-3">
        <a href="mailto:info@openlab.sk">info@openlab.sk</a>
      </b-col>
      <b-col class="col-3">
        <img src="../_layout/_icons/facebook.svg" alt="facebook">
        <img src="../_layout/_icons/linkedin.svg" alt="linkedin">
        <img src="../_layout/_icons/instagram.svg" alt="instagram">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'Footer',
  components: { BCol, BRow }
}
</script>

<style scoped>

</style>
