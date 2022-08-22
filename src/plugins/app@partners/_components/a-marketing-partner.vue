<template>
  <div>
    <h1>Marketing Partner</h1>
    <p>Marketingová podpora na eventoch, sociálnych sieťach a v médiách.</p>
    <div>
      <b-row>
        <b-col class="col-3">
          <img src="../_icons/discussion.svg" alt="discussion">
          <h5>Marketingová podpora</h5>
          <p>Podpora OpenLabu s budovaním pozitívnej PR agendy, awareness a goodwill Vašej firmy.</p>
        </b-col>
        <b-col class="col-3">
          <img src="../_icons/mortarboard.svg" alt="mortarboard">
          <h5>Custom searching</h5>
          <p>Príležitosť dostať starostlivo vybraných študentov na stáž, projekt alebo pracovný úväzok.</p>
        </b-col>
        <b-col class="col-3">
          <img src="../_icons/idea.svg" alt="idea">
          <h5>Spolupráca so študentmi a custom searching</h5>
          <p>Príležitosť spolupracovať a vybrať si študentov na letnú stáž alebo počas školského roku.</p>
        </b-col>
        <b-col class="col-3">
          <img src="../_icons/computer.svg" alt="computer">
          <h5>Možnosť využívať produkty OpenAcademy a Drilleo</h5>
        </b-col>
      </b-row>
    </div>
    <button>Chcem sa stať Marketing Partnerom</button>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'marketing-partner',
  components: { BRow, BCol }
}
</script>

<style scoped>

</style>
