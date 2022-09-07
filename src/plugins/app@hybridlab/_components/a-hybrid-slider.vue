<template>
  <div class="container pd-wrapper">

    <b-row class="justify-content-end">
      <b-col class="col-md-6 col-xl-5">
        <h1 class="fw-light slider-title position-relative">
          Projekty, ktorých súčasťou<br>
          <span class="fw-bold">môžeš byť aj ty!</span>
        </h1>
      </b-col>
    </b-row>
    <div>
      <div>
        <b-row>
          <b-col class="col-md-6 align-self-center">
            <img src="../../app@hybridlab/_icons/financie-project.jpeg">
          </b-col>
          <b-col class="col-md-5 col-xl-5 mb-5 offset-xl-1 project-content">
            <h2>Aplikácia Financie</h2>
            <p class="text-gray">
              Financie.sk je open source online platforma, ktorá slúži na vzdelávanie študentov v oblasti finančného sveta, a tým má ambíciu prispieť aj k zvýšeniu finančnej gramotnosti na Slovensku.
              Platforma je určená pre učiteľov, študentov, rodičov a spotrebiteľov finančných služieb.<br>
              Táto platforma má pomôcť učiteľom ľahšie naučiť žiakov danú problematiku, tým , že učiteľ príde na
              stránku, stiahne si a vytlačí príručku pre seba a následne stiahne príručku aj pre žiakov, v ktorej sú už úlohy.<br>
              Na vývoj študenti použili Vue, October CMS a Wordpress. Na tomto projekte pracovali študenti s klientom FInax a aktuálne je stránka vo fáze produkcie.
            </p>
          </b-col>
        </b-row>
      </div>
      <div>
        <b-row>
          <b-col class="col-md-6 align-self-center">
            <img src="../../app@hybridlab/_icons/academyapp-project.jpeg">
          </b-col>
          <b-col class="col-md-5 col-xl-5 mb-5 offset-xl-1 project-content">
            <h2 class="fw-bold">OpenAcademy App</h2>
            <p class="text-gray">
              OpenAcademy je vzdelávacia webová platforma pre najnovšie technologické smery, ktorým sa venujeme v OpenLabe.
              V tomto projekte študenti pracovali na vytvorení mobilnej aplikácie OpenAcademy platformy.
              Študenti mali zámer vytvoriť aplikáciu jednoduchú a prehľadnú na používanie a sprístupniť ju pre mladších spolužiakov.
              Cieľom aplikácie je naučiť študenta pomocou kvalitne vybraných materiálov, aby finálny projekt dobre zvládol.
              Študenti pri vývoji použili na frontend Vue, kostru aplikácie stylovali v Ionic a dizajn robili pomocou Sass.
              Mobilná aplikácia je funkčná a môžete si ju stiahnuť tu. Do budúcnosti plánujú študenti pokračovať v zlepšovaní aplikácie.
            </p>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-row>
      <b-col >
        <button class="slide-btn">
          <z-icon iconName="slide-left"/>
        </button>
        <button class="slide-btn">
          <z-icon iconName="slide-right"/>
        </button>
      </b-col>
    </b-row>
  </div>
</template>

<script>

import { BCol, BRow } from 'bootstrap-vue-3'
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'
export default {
  name: 'a-hybrid-slider',
  components: { ZIcon, BCol, BRow }
}
</script>

<style lang="sass">
.slider-title
  &:before
    content: ''
    position: absolute
    bottom: -25px
    left: 0
    width: 50px
    height: 1px
    background-color: rgba(86, 107, 141, 0.5)

.project-content
  margin-top: 120px !important
</style>
