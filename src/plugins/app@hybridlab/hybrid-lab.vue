<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1>Poď študovať HybridLab</h1>
          <span>a nauč sa tvoriť hybridné aplikácie</span>
          <p>
            Hybridné aplikácie vyučované v tomto Labe, predstavujú budúcnosť vo vývoji webových a mobilných aplikácií.
            Počas štúdia sa naučíš vytvoriť hybridnú aplikáciu pre zákazníka, dostupnú na najrozšírenejších platformách ( web, iOS/ Andoid, Windows)
          </p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@hybridlab/_icons/main-hybridlab.png" alt="hybridlab">
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h2>Načo je zameraný HybridLab?</h2>
          <p>
            Základnou profiláciou je vývoj hybridných aplikácií, v ktorej sa budeš ako študent HybridLabu rozvíjať.
            Pri hybridnom vývoji sa používa na programovanie aplikácie jedna technológia, ktorú je následne možné publikovať na všetkých zariadeniach a operačných systémoch od počítačov, mobilov, IoT zariadení až po inteligentné hodinky a iné.
            Po skončení štúdia, ako absolvent budeš uplatniteľný vo všetkých IT segmentoch na rôznych pozíciách
            napr. ako frontend/ backend developer, UI alebo UX dizajnér, projektový manažér alebo analytik vo firmách využívajúcich hybridné technológie, môžeš si skúsiť založiť vlastné podnikanie alebo pokračovať vysokoškolským vzdelaním.
          </p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@hybridlab/_icons/hybridlab.svg" alt="hybridlab">
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col class="col-6">
          <img src="../app@hybridlab/_icons/hybridlab-person.png" alt="person">
        </b-col>
        <b-col class="col-6">
          <h2>Pre koho je HybridLab určený?</h2>
          <p>
            Pre úplných začiatočníkov, ktorí sa chcú venovať aplikačnému
            vývoju a chcú sa naučiť pomocou jednej technológie vytvoriť aplikáciu
            pre web, mobilné zariadenia ale aj desktopy, wearables, IoT.
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
import ModernSchool from '@/plugins/app/_components/_modern-school/modern-school'
import Support from '@/plugins/app/_components/_support/support'
import Newsletter from '@/plugins/app/_components/_newsletter/newsletter'

export default {
  name: 'hybrid-lab',
  components: { Newsletter, Support, ModernSchool, BCol, BRow }
}
</script>

<style scoped>

</style>
