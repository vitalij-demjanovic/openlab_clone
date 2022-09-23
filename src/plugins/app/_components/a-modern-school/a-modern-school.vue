<template>
  <div class="container">
    <b-row class="align-items-center justify-content-between">
      <b-col class=" col-12 col-md-5 order-2 order-md-0">
        <h1 class="mb-3">
          Nie je moderná škola <br>
          <span class="fw-bold">ako moderná škola</span>
        </h1>
        <p class="text-gray">
          Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je rozobrať svet štandardného vzdelávania a spôsob
          ako môže fungovať moderné vzdelávanie v technológiach.
        </p>
        <color-social/>
        <button class="g-btn btn-lg mt-5">Moderná škola</button>
      </b-col>
      <b-col class="col-12 col-md-6 mb-4 mb-lg-0">
        <img src="../a-modern-school/_icons/modern.png" alt="Moderna skola">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
import ColorSocial from '@/plugins/app/_components/a-color-social'

export default {
  name: 'a-modern-school',
  components: { ColorSocial, BRow, BCol }
}
</script>

<style scoped>

</style>
