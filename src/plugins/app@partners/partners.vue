<template>
  <div>
    <div class="bg-green">
      <div class="container">
        <b-row class="align-items-center position-relative">
          <b-col class="z-index-1 col-lg-5 my-md-5 py-5">
            <h1 class="text-white mb-5 fw-light">
              Pridajte sa k nám ako<br>
              <span class="fw-bold">jeden z partnerov</span>
            </h1>
            <p class="text-white fw-bold">Učiť najnovšie technológie bez technologických firiem je ako vymýšľať príbeh bez hrdinu</p>
          </b-col>
          <b-col class="col-7 d-flex justify-content-center">
            <img class="image-vid" src="../app@partners/_icons/main-partners.png" alt="partners">
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container pd-wrapper-border mb-5">
      <h1 class="text-center mb-5 fw-light">
        <span class="fw-bold">Naši</span>
        partneri
      </h1>
      <partners/>
    </div>
    <div class="container text-center">
      <p class="mx-5">
        OpenLab prepája technologické firmy so strednými priemyslovými školam.
        Spolu s odborníkmi z praxe študentmi počas roka pracujú na reálnych projektoch/produktoch digitálnemo priemyslu.
        Dochádza tak k pozitívnym väzbám študenta na región / Slovensko a výrazne sa tak redukuje odliv mozgov do zahraničia po ukončení strednej školy.
      </p>
    </div>
    <div class="container">
      <team-work @active-tab="changeTab"/>
    </div>
    <div>
      <a-partner-tabs :show-tab="currentTab"/>
    </div>
    <a-instagram-feed/>
    <!-- Moderná škola -->
    <a-modern-school/>
    <!-- Podporujú -->
    <a-support
      title="Ďakujeme za"
      span-title="podporu v roku 2021!"
    />
    <!-- Newletter -->
    <a-newsletter/>
  </div>
</template>

<script>
import Partners from '@/plugins/app/_components/a-partners'
import TeamWork from '@/plugins/app@partners/_components/a-team-work'
import AModernSchool from '@/plugins/app/_components/a-modern-school/a-modern-school'
import ASupport from '@/plugins/app/_components/a-support/a-support'
import ANewsletter from '@/plugins/app/_components/a-newsletter/a-newsletter'
import { BCol, BRow } from 'bootstrap-vue-3'
import APartnerTabs from '@/plugins/app@partners/_components/a-partner-tabs'
import AInstagramFeed from '@/plugins/app/_components/a-instagram-feed/a-instagram-feed'

export default {
  name: 'PartnersPage',
  components: { AInstagramFeed, APartnerTabs, BCol, BRow, ANewsletter, ASupport, AModernSchool, TeamWork, Partners },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    changeTab (i) {
      this.currentTab = i
    }
  }
}
</script>

<style scoped>

</style>
