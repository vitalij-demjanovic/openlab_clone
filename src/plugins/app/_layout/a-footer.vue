<template>
  <div class="py-5">
    <footer class="container text-gray position-relative">
      <b-row class="align-items-end">
        <b-col class="col-12 col-md-4 mb-3 mb-md-0">
          <img src="../_layout/_icons/openlab-logo.svg" alt="openlab">
          <p class="mt-2 mb-0">
            © 2022 Všetky práva vyhradené
            <span class="fw-bold">OPENLAB, o.z.,</span>
          </p>
        </b-col>
        <b-col class="col-12 col-md-3 mb-3 mb-md-0">
          <p class="mb-0">IČO: 50764675</p>
          <p class="mb-0">Viedenská cesta 257, 805 01 Bratislava</p>
        </b-col>
        <b-col class="col-2 mb-3 mb-md-0">
          <a class="text-gray text-decoration-underline" href="mailto:info@openlab.sk">info@openlab.sk</a>
        </b-col>
        <b-col class="col-12 col-md-3 d-flex footer-social">
          <img src="../_layout/_icons/facebook.svg" alt="facebook">
          <img src="../_layout/_icons/linkedin.svg" alt="linkedin">
          <img src="../_layout/_icons/instagram.svg" alt="instagram">
        </b-col>
      </b-row>
      <div class="footer-cube d-none"/>
    </footer>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'Footer',
  components: { BCol, BRow }
}
</script>

<style lang="sass">
footer
  font-size: 13px !important

.footer-social
  justify-content: flex-end

.footer-cube
  background: #faf15b
  width: 125px
  height: 80px
  position: absolute
  left: 100%
  top: calc(100% - 30px)
</style>
