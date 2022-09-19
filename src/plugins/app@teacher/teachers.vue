<template>
  <div>
    <div class="bg-purple">
      <div class="container">
        <b-row class="align-items-center position-relative">
          <b-col class="z-index-1 col-lg-5 my-md-5 py-5">
            <h1 class="text-white mb-4 fw-light">
              Rozšírte svoje učebné osnovy <br>
              <span>o to najnovšie zo sveta <br> technológií!</span>
            </h1>
            <p class="fw-bold text-white">
              Naučíme Vás ako učiť študentov vyvíjať aplikácie, hry a IoT<br>
              projekty podľa učebných materiálov od našich odborníkov z praxe.
            </p>
          </b-col>
          <b-col class="col-7 d-flex justify-content-center">
            <img class="image-vid" src="../app@teacher/_icons/main-teachers.png" alt="teachers">
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container pd-wrapper">
      <h1 class="text-center mb-5">Vzdelávanie
        <span class="fw-bold">
          jednoducho a efektívne
        </span>
      </h1>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column education-card">
          <img class="mb-5" src="../app@teacher/_icons/openacademy.svg" alt="open academy">
          <span>
            Viac informacií o OpenAcademy
            <z-icon iconName="arrow-right"/>
          </span>
        </div>
        <div class="d-flex flex-column education-card">
          <img class="mb-5" src="../app@teacher/_icons/drilleo.svg" alt="open academy">
          <span>
            Viac informacií o Drilleo
            <z-icon iconName="arrow-right"/>
          </span>
        </div>
      </div>
    </div>
    <div>
      <open-academy/>
    </div>
    <div>
      <drilleo/>
    </div>
    <div class="container pd-wrapper">
      <b-row>
        <b-col>
          <h2 class="fw-bold text-center mb-5">Skúsenosti učiteľov</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-6">
          <img class="mb-5" src="../app@teacher/_icons/skill1.png" alt="school">
          <h5 class="fw-bold mb4">Z učiteľa Petra Remiša na SPŠ IT v Kys. N. Meste je dnes LabMaster</h5>
          <p>
            „Minulý školský rok som sa hodín OpenLabu na našej škole zúčastňoval ako pomocník. Hodiny s odborníkmi z praxe som absolvoval rovnako ako naši študenti a veľa som sa vďaka tomu naučil.
            Ak nemáte OpenLab na Vašej škole, rozhodne odporúčam zúčastniť sa aspoň online školení, ktoré získate výborné materiály pre nové technológie, ktoré budú baviť študentov aj Vás!“
          </p>
        </b-col>
        <b-col class="col-6">
          <img class=mb-5 src="../app@teacher/_icons/skill2.png">
          <h5 class="fw-bold mb4">Drilleo využíva profesorka Lenka Vačoková na Ekonomickej Univerzite v Bratislave</h5>
          <p>
            „Aplikáciu drilleo.sk som začala využívať začiatkom apríla.
            Prvé týždne výučby online som zrealizovala viacero testov na zopakovanie už prebratého učiva, ako aj učiva, ktoré si mali študenti naštudovať samoštúdiom.
            Mne osobne drilleo.sk pomáha, využívam ho ako doplnkový nástroj a overujem si znalosti študentov.
            Rovnako sa mi páči, že vidím, kto je na akej otázke, kto kedy začína a končí, takže už počas písomky si zapisujem priebežné výsledky.“
          </p>
        </b-col>
      </b-row>
    </div>
    <div class="pd-wrapper">
      <a-instagram-feed/>
    </div>
    <div>
      <modern-school/>
    </div>
    <div>
      <support
        title="Ďakujeme za"
        span-title="podporu v roku 2021!"
      />
    </div>
    <div>
      <newsletter/>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'
import OpenAcademy from '@/plugins/app@teacher/_components/a-open-academy'
import Drilleo from '@/plugins/app@teacher/_components/a-drilleo'
import ModernSchool from '@/plugins/app/_components/a-modern-school/a-modern-school'
import Support from '@/plugins/app/_components/a-support/a-support'
import Newsletter from '@/plugins/app/_components/a-newsletter/a-newsletter'
import AInstagramFeed from '@/plugins/app/_components/a-instagram-feed/a-instagram-feed'

export default {
  name: 'Teachers',
  components: { AInstagramFeed, Newsletter, Support, ModernSchool, Drilleo, OpenAcademy, ZIcon, BRow, BCol }
}
</script>

<style lang="sass">
.bg-purple
  background-color: #a54fa2 !important

.push-right
  margin-left: 100px

.education-card
  padding: 40px 35px
  transition: all 0.3s ease
  &:first-child
    margin-right: 20px
  &:hover
    box-shadow: 0px 0.95237px 23.8092px rgba(99, 118, 149, 0.15)
  span
    color: #3597ff
</style>
