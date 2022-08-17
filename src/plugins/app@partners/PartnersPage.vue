<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1>Pridajte sa k nám ako</h1>
          <span>jeden z partnerov</span>
          <p>Učiť najnovšie technológie bez technologických firiem je ako vymýšľať príbeh bez hrdinu</p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@partners/_icons/main-partners.png" alt="partners">
        </b-col>
      </b-row>
    </div>
    <div>
      <h1>Naši partneri</h1>
      <partners/>
    </div>
    <div>
      <p>
        OpenLab prepája technologické firmy so strednými priemyslovými školam.
        Spolu s odborníkmi z praxe študentmi počas roka pracujú na reálnych projektoch/produktoch digitálnemo priemyslu.
        Dochádza tak k pozitívnym väzbám študenta na región / Slovensko a výrazne sa tak redukuje odliv mozgov do zahraničia po ukončení strednej školy.
      </p>
    </div>
    <div>
      <team-work/>
    </div>
    <div>
      <marketing-partner/>
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
import Partners from '@/plugins/app/_components/partners'
import TeamWork from '@/plugins/app@partners/_components/team-work'
import MarketingPartner from '@/plugins/app@partners/_components/marketing-partner'
import ModernSchool from '@/plugins/app/_components/_modern-school/modern-school'
import Support from '@/plugins/app/_components/_support/support'
import Newsletter from '@/plugins/app/_components/_newsletter/newsletter'

export default {
  name: 'PartnersPage',
  components: { Newsletter, Support, ModernSchool, MarketingPartner, TeamWork, Partners }
}
</script>

<style scoped>

</style>
