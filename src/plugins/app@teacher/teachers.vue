<template>
  <div>
    <div class="bg-purple">
      <div class="container">
        <b-row class="align-items-center">
          <b-col class="col-5">
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
            <img class="image-visual push-right" src="../app@teacher/_icons/main-teachers.png" alt="teachers">
          </b-col>
        </b-row>
      </div>
    </div>
    <div>
      <h1>Vzdelávanie jednoducho a efektívne</h1>
      <div>
        <div>
          <img src="../app@teacher/_icons/openacademy.svg" alt="open academy">
          <span>Viac informacií o OpenAcademy</span>
          <icon name="arrow-right"/>
        </div>
        <div>
          <img src="../app@teacher/_icons/drilleo.svg" alt="open academy">
          <span>Viac informacií o Drilleo</span>
          <icon name="arrow-right"/>
        </div>
      </div>
    </div>
    <div>
      <open-academy/>
    </div>
    <div>
      <drilleo/>
    </div>
    <div>
      <b-row>
        <b-col class="col-6">
          <img src="../app@teacher/_icons/skill1.png" alt="school">
          <h5>Z učiteľa Petra Remiša na SPŠ IT v Kys. N. Meste je dnes LabMaster</h5>
          <p>
            „Minulý školský rok som sa hodín OpenLabu na našej škole zúčastňoval ako pomocník. Hodiny s odborníkmi z praxe som absolvoval rovnako ako naši študenti a veľa som sa vďaka tomu naučil.
            Ak nemáte OpenLab na Vašej škole, rozhodne odporúčam zúčastniť sa aspoň online školení, ktoré získate výborné materiály pre nové technológie, ktoré budú baviť študentov aj Vás!“
          </p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@teacher/_icons/skill2.png">
          <h5>Drilleo využíva profesorka Lenka Vačoková na Ekonomickej Univerzite v Bratislave</h5>
          <p>
            „Aplikáciu drilleo.sk som začala využívať začiatkom apríla.
            Prvé týždne výučby online som zrealizovala viacero testov na zopakovanie už prebratého učiva, ako aj učiva, ktoré si mali študenti naštudovať samoštúdiom.
            Mne osobne drilleo.sk pomáha, využívam ho ako doplnkový nástroj a overujem si znalosti študentov.
            Rovnako sa mi páči, že vidím, kto je na akej otázke, kto kedy začína a končí, takže už počas písomky si zapisujem priebežné výsledky.“
          </p>
        </b-col>
      </b-row>
    </div>
    <div>
      Instagram Feed
    </div>
    <div>
      <modern-school/>
    </div>
    <div>
      <support/>
    </div>
    <div>
      <newsletter/>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import Icon from '@/plugins/app/_components/z-icon/z-icon'
import OpenAcademy from '@/plugins/app@teacher/_components/a-open-academy'
import Drilleo from '@/plugins/app@teacher/_components/a-drilleo'
import ModernSchool from '@/plugins/app/_components/_modern-school/a-modern-school'
import Support from '@/plugins/app/_components/_support/a-support'
import Newsletter from '@/plugins/app/_components/_newsletter/a-newsletter'

export default {
  name: 'Teachers',
  components: { Newsletter, Support, ModernSchool, Drilleo, OpenAcademy, Icon, BRow, BCol }
}
</script>

<style lang="sass">
.bg-purple
  background-color: #a54fa2 !important

.push-right
  margin-left: 100px
</style>
