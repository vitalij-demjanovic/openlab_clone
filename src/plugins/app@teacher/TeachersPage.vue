<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1>Inštitút stredoškolského odborného vzdelávania</h1>
          <span>zameraný na IT & AI</span>
          <p>Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@teacher/_icons/main-teachers.png" alt="teachers">
        </b-col>
      </b-row>
    </div>
    <div>
      <h1>Vzdelávanie jednoducho a efektívne</h1>
      <div>
        <div>
          <img src="../app@teacher/_icons/openacademy.svg" alt="open academy">
          <span>Viac informacií o OpenAcademy</span>
          <arrow-right/>
        </div>
        <div>
          <img src="../app@teacher/_icons/drilleo.svg" alt="open academy">
          <span>Viac informacií o Drilleo</span>
          <arrow-right/>
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
          <img src="../app@teacher/_icons/skill1.png">
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
import ArrowRight from '@/plugins/app/_components/arrow-right'
import OpenAcademy from '@/plugins/app@teacher/_components/open-academy'
import Drilleo from '@/plugins/app@teacher/_components/drilleo'
import ModernSchool from '@/plugins/app/_components/_modern-school/modern-school'
import Support from '@/plugins/app/_components/_support/support'
import Newsletter from '@/plugins/app/_components/_newsletter/newsletter'

export default {
  name: 'TeachersPage',
  components: { Newsletter, Support, ModernSchool, Drilleo, OpenAcademy, ArrowRight, BRow, BCol }
}
</script>

<style scoped>

</style>
