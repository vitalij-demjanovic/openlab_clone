<template>
  <div>
    <b-row>
      <b-col class="col-6">
        <h2>Nie je moderná škola</h2>
        <span>ako moderná škola</span>
        <p>
          Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je rozobrať svet štandardného vzdelávania a spôsob
          ako môže fungovať moderné vzdelávanie v technológiach.
        </p>
        <color-social/>
      </b-col>
      <b-col class="col-6">
        <img src="../_modern-school/_icons/modern.png" alt="Moderna skola">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
import ColorSocial from '@/plugins/app/_components/color-social'

export default {
  name: 'modern-school',
  components: { ColorSocial, BRow, BCol }
}
</script>

<style scoped>

</style>
