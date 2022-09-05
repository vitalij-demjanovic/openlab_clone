<template>
  <div class="bg-light-blue pd-wrapper">
    <div class="container">
      <div v-if="showTab === 0">
          <h1 class="mb-2">Tech Partner</h1>
          <p class="text-gray mb-3">Prioritný prístup k talentom a dennému vyučovaniu.</p>
          <div>
            <b-row>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/trophy.svg" alt="thropy">
                  <h5>Prístup k talentom</h5>
                  <p>Príležitosť spolupracovať a formovať najväčšie IT talenty na Slovensku. Možnosť organizovať prednášky a workshopy pre študentov.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/mortarboard.svg" alt="mortarboard">
                  <h5>Custom searching</h5>
                  <p>Príležitosť dostať starostlivo vybraných študentov na stáž, projekt alebo pracovný úväzok.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/keynote.svg" alt="idea">
                  <h5>Prístup k projektovým tímom</h5>
                  <p>Príležitosť inovovať a vyvíjať firemné projekty mimo svojho core teamu, ale zároveň priniesť vyvíjaný projekt naspäť do firmy.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/discussion.svg" alt="computer">
                  <h5>Marketingová podpora</h5>
                  <p>Podpora OpenLabu s budovaním pozitívnej PR agendy, awareness a goodwill Vašej firmy.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/computer.svg" alt="computer">
                  <h5>Možnosť využívať produkty OpenAcademy a Drilleo</h5>
                </div>
              </b-col>
            </b-row>
          </div>
          <button class="btn-lg g-btn mt-5">Chcem sa stať Tech Partnerom</button>
        </div>
      <div v-if="showTab === 1">
          <h1 class="mb-2">Project Partner</h1>
          <p class="text-gray mb-3">Prístup k projektovým tímom s možnosťou robiť prototypy.</p>
          <div>
            <b-row>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/mortarboard.svg" alt="discussion">
                  <h5>Prístup k projektovým tímom</h5>
                  <p>Príležitosť inovovať a vyvíjať firemné projekty mimo svojho core teamu, ale zároveň priniesť vyvíjaný projekt naspäť do firmy.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/discussion.svg" alt="mortarboard">
                  <h5>Marketingová podpora</h5>
                  <p>Príležitosť dostať starostlivo vybraných študentov na stáž, projekt alebo pracovný úväzok.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/idea.svg" alt="idea">
                  <h5>Spolupráca so študentmi a custom searching</h5>
                  <p>Príležitosť spolupracovať a vybrať si študentov na letnú stáž alebo počas školského roku.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/computer.svg" alt="computer">
                  <h5>Možnosť využívať produkty OpenAcademy a Drilleo</h5>
                </div>
              </b-col>
            </b-row>
          </div>
          <button class="g-btn btn-lg mt-5">Chcem sa stať Project Partnerom</button>
        </div>
      <div v-if="showTab === 2">
          <h1 class="mb-2">Marketing Partner</h1>
          <p class="text-gray mb-3">Marketingová podpora na eventoch, sociálnych sieťach a v médiách.</p>
          <div>
            <b-row>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/discussion.svg" alt="discussion">
                  <h5>Marketingová podpora</h5>
                  <p>Podpora OpenLabu s budovaním pozitívnej PR agendy, awareness a goodwill Vašej firmy.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/mortarboard.svg" alt="mortarboard">
                  <h5>Custom searching</h5>
                  <p>Príležitosť dostať starostlivo vybraných študentov na stáž, projekt alebo pracovný úväzok.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/idea.svg" alt="idea">
                  <h5>Spolupráca so študentmi a custom searching</h5>
                  <p>Príležitosť spolupracovať a vybrať si študentov na letnú stáž alebo počas školského roku.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/computer.svg" alt="computer">
                  <h5>Možnosť využívať produkty OpenAcademy a Drilleo</h5>
                </div>
              </b-col>
            </b-row>
          </div>
          <button class="btn-lg g-btn mt-5">Chcem sa stať Marketing Partnerom</button>
        </div>
      <div v-if="showTab === 3">
          <h1 class="mb-2">HR Partner</h1>
          <p class="text-gray mb-3">Prioritný prístup k talentom a dennému vyučovaniu.</p>
          <div>
            <b-row>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/trophy.svg" alt="thropy">
                  <h5>Prístup k talentom</h5>
                  <p>Príležitosť spolupracovať a formovať najväčšie IT talenty na Slovensku. Možnosť organizovať prednášky a workshopy pre študentov.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/mortarboard.svg" alt="mortarboard">
                  <h5>HR podpora</h5>
                  <p>Aktívna podpora od OpenLabu pri obsadzovaní pracovných pozícií vo Vašej firme. Možnosť inzerovať pracovné ponuky medzi študentami.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/mortarboard.svg" alt="idea">
                  <h5>Custom searching</h5>
                  <p>Príležitosť dostať starostlivo vybraných študentov na stáž alebo pracovný úväzok.</p>
                </div>
              </b-col>
              <b-col class="mt-4 col-lg-3 col-md-6">
                <div class="partner-card px-4 py-5 h-100">
                  <img src="../_icons/computer.svg" alt="computer">
                  <h5>Možnosť využívať produkty OpenAcademy a Drilleo</h5>
                </div>
              </b-col>
            </b-row>
          </div>
          <button class="btn-lg g-btn mt-5">Chcem sa stať HR Partnerom</button>
        </div>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'a-partner-tabs',
  components: { BCol, BRow },
  props: {
    showTab: Number
  }
}
</script>

<style lang="sass">
.partner-card
  background-color: #ffffff
</style>
