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
     <place-study/>
    </div>
    <div>
      <h2>S akými technológiami budeš pracovať?</h2>
      <b-row>
        <b-col
          v-for="technology in technologies"
          :key="technology.id"
        >
          <technology-card
            :image="technology.image"
            :title="technology.title"
            :description="technology.description"
          />
        </b-col>
      </b-row>
    </div>
    <div>
      <h2>Ako prebieha výuka</h2>
      <exceptional/>
    </div>
    <div>
      Slider
    </div>
    <div>
      <div>
        <students/>
      </div>
    </div>
    <div>
      <options
        :options="options"
      />
    </div>
    <div>
      <discort/>
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
import TechnologyCard from '@/plugins/app/_components/technology-card'
import Ionic from '../app@hybridlab/_icons/icon-ionic.svg'
import VueIcon from '../app@hybridlab/_icons/icon-vue.svg'
import AngularIcon from '../app@hybridlab/_icons/icon-angular.svg'
import October from '../app@hybridlab/_icons/icon-october.svg'
import Exceptional from '@/plugins/app/_components/exceptional'
import Students from '@/plugins/app@hybridlab/_components/students'
import Options from '@/plugins/app@hybridlab/_components/options'
import Discort from '@/plugins/app/_components/discort'
import PlaceStudy from '@/plugins/app/_components/place-study'

export default {
  name: 'hybrid-lab',
  components: { PlaceStudy, Discort, Options, Students, Exceptional, TechnologyCard, Newsletter, Support, ModernSchool, BCol, BRow },
  data () {
    return {
      technologies: [
        {
          id: 1,
          image: Ionic,
          title: 'Ionic Framework',
          description: 'Ionic je sada vývojových nástrojov na hybridný vývoj mobilných aplikácií. Ionic sa radí medzi otvorené softvér, tj je vývojárom voľne k dispozícii.'
        },
        {
          id: 2,
          image: VueIcon,
          title: 'Vue.js',
          description: 'Vue.js je open-source progresívny javascriptový framework na vytváranie užívateľských rozhraní.'
        },
        {
          id: 3,
          image: AngularIcon,
          title: 'Angular',
          description: 'Angular je bezplatný a open source webový aplikačný rámec založený na TypeScript.'
        },
        {
          id: 4,
          image: October,
          title: 'October CMS',
          description: 'Október je samoobslužný systém na správu obsahu založený na programovacom jazyku PHP a rámci webových aplikácií Laravel.'
        }
      ],
      options: [
        {
          id: 1,
          title: 'GamesLab',
          description: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný'
        },
        {
          id: 2,
          title: 'AppsLab',
          description: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
