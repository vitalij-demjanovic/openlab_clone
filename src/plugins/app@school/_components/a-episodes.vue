<template>
  <div class="container pd-wrapper">
    <h2 class="text-center mb-5 fw-light">
      <span class="fw-bold">Vypočuj si </span>
      úvodné epizódy
    </h2>
    <b-row class="mt-5">
      <b-col class="col-6">
        <div>
          <figure class="position-relative">
            <img src="../../app@school/_icons/episode2.jpeg">
            <img
              class="position-absolute start-50 top-50 translate-middle play-btn"
              src="../_icons/play.svg"
              @click="modalShow = !modalShow"
            >
            <b-modal v-model="modalShow" class="p-0" id="modal-xl" size="xl">
              <iframe width="100%" height="666" src="https://www.youtube.com/embed/tv-5-Rnr_qQ" title="Unikátny učebný program OpenLab očami študentov #06" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-modal>
          </figure>
        </div>
        <h5>Unikátny učebný program OpenLab očami študentov #06</h5>
        <p class="text-gray">
          V dnešnej epizóde boli hosťami študentka Dominika a absolvent Marek, ktorí porozprávali o tom aké to je študovať v OpenLabe.
          Opísali rozdiely klasického študijného odboru na strednej škole a odboru kde pôsobí OpenLab, ako sa dostali k svojej prvej práci, či mnohé ďalšie skúsenosti.
          Absolventi OpenLabu sú častokrát lepšie pripravení ako ich rovesníci.
          OpenLab je inštitút stredoškolského odborného vzdelávania na princípoch open source a demokratickej triedy.
          S podporou LabMastra študenti pracujú na reálnych projektoch v tímoch, čím získavajú mäkké a digitálne zručnosti pre 21. storočie.
        </p>
      </b-col>
      <b-col class="col-6">
        <div>
          <figure class="position-relative">
            <img src="../../app@school/_icons/episode1.jpeg">
            <img
              class="position-absolute start-50 top-50 translate-middle play-btn"
              src="../_icons/play.svg"
              @click="modalShowSecond = !modalShowSecond"
            >
            <b-modal v-model="modalShowSecond" class="p-0 w-100" id="modal-xl" size="xl">
              <iframe width="100%" height="666" src="https://www.youtube.com/embed/eavR8DIIykM" title="Spúšťame aplikáciu na podporu herných vývojárov (podcast Moderná škola #02)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </b-modal>
          </figure>
        </div>
        <h5>Spúšťame aplikáciu na podporu herných vývojárov (podcast Moderná škola #0</h5>
        <p class="text-gray">
          V najnovšej časti podcastu Moderná škola sa Yablko spolu s Grishim rozprávali o tom, že spúšťame novú aplikáciu GameChangers na podporu herných vývojárov.
          Rozoberali otázky ako pre koho je určená aplikácia, čo prinesie hernému developerovi a patrónovi,
          prečo práve GameChangers, ako to môže pomôcť herným vývojárom a mnoho dalších zaujímavých otázok a odpo
        </p>
      </b-col>
    </b-row>
    <div>
      <button class="btn-lg g-btn mt-3">
        Prejsť sa Youtube
        <img src="../_icons/youtube.svg" alt="youtube">
      </button>
    </div>
  </div>
</template>

<script>
import { BRow, BCol, BModal } from 'bootstrap-vue-3'

export default {
  name: 'episodes',
  components: { BModal, BRow, BCol },
  data () {
    return {
      modalShow: false,
      modalShowSecond: false
    }
  }
}
</script>

<style lang="sass">
.play-btn
  cursor: pointer

.modal-content
  background-color: transparent !important
  border: none !important

.modal-body
  border-radius: 10px !important

.modal-footer,
.modal-header
  display: none !important

</style>
