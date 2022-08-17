<template>
  <div>
    <h2>Vypočuj si úvodné epizódy</h2>
    <b-row>
      <b-col class="col-6">
        <div>VIDEO</div>
        <h5>Unikátny učebný program OpenLab očami študentov #06</h5>
        <p>
          V dnešnej epizóde boli hosťami študentka Dominika a absolvent Marek, ktorí porozprávali o tom aké to je študovať v OpenLabe.
          Opísali rozdiely klasického študijného odboru na strednej škole a odboru kde pôsobí OpenLab, ako sa dostali k svojej prvej práci, či mnohé ďalšie skúsenosti.
          Absolventi OpenLabu sú častokrát lepšie pripravení ako ich rovesníci.
          OpenLab je inštitút stredoškolského odborného vzdelávania na princípoch open source a demokratickej triedy.
          S podporou LabMastra študenti pracujú na reálnych projektoch v tímoch, čím získavajú mäkké a digitálne zručnosti pre 21. storočie.
        </p>
      </b-col>
    </b-row>
    <div>
      <button>
        Prejsť sa Youtube
        <img src="../_icons/youtube.svg" alt="youtube">
      </button>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'episodes',
  components: { BRow, BCol }
}
</script>

<style scoped>

</style>
