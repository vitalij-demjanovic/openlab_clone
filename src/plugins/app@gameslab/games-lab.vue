<template>
  <div>
    <div class="bg-green">
      <div class="container">
        <b-row class="align-items-center position-relative">
          <b-col class="z-index-1 col-lg-5 my-md-5 py-5">
            <h1 class="mb-4 text-white fw-light">Poď študovať GamesLab <br> a nauč sa tvoriť počítačové hry</h1>
            <p class="text-white fw-bold">Vývoj počítačových hier, je odvetvie, ktoré predstavuje jeden z najrýchlejšie rastúcich technologických priemyslov a je vstupnou bránou do IT sveta pre väčšinu mládeže.
              Počas štúdia v OpenLabe sa naučíš hry nielen “konzumovať” ale staneš sa aj ich tvorcom, budeš vedieť vytvoriť počítačovú hru dostupnú na platformách ako Apple Store, Play Store alebo Steam.</p>
          </b-col>
          <b-col class="col-7 d-flex justify-content-center">
            <img class="image-vid" src="../app@gameslab/_icons/main-gameslab.png" alt="introduction">
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container pd-wrapper">
      <b-row class="align-items-center">
        <b-col class="col-6">
          <h1 class="fw-light mb-3">
            Načo je zameraný <br>
            <span class="fw-bold">GamesLab?</span>
          </h1>
          <p class="text-gray fw-bold">
            Základnou profiláciou je vývoj digitálnych hier, v ktorej sa budeš ako študent GamesLabu rozvíjať.
            Počas štúdia si prejdeš celým procesom tvorby hry od nápadu až po jej publikovanie v Apple Store, Play Store alebo na Steame.
            Naučíš sa ako funguje nielen programovanie, tvorba 2D/3D grafiky ale aj game design v podobe herných mechaník, ktoré sú základom každej hry. Budeš sa učiť tvoriť hry pre rôzne platformy (mobil / desktop / web).
            Po skončení štúdia, ako absolvent budeš uplatniteľný v herných štúdiách ako game dizajnér, unity programátor alebo grafik, môžeš si skúsiť založiť vlastné podnikanie alebo pokračovať vysokoškolským vzdelaním.
          </p>
        </b-col>
        <b-col class="col-6 d-flex justify-content-end">
          <img src="../app@gameslab/_icons/gameslab.svg" alt="games">
        </b-col>
      </b-row>
    </div>
    <div class="container pd-wrapper">
      <b-row class="align-items-center">
        <b-col class="col-6">
          <img src="../app@gameslab/_icons/gameslab-person.png" alt="games">
        </b-col>
        <b-col class="col-5 offset-1">
          <h1 class="fw-light mb-3">
            Pre koho je <br>
            <span class="fw-bold">GamesLab určený?</span>
          </h1>
          <p class="text-gray fw-bold">
            GamesLab je určený pre úplných začiatočníkov, ktorí sa chcú venovať vývoju počítačových hier a chcú sa naučiť vytvoriť hru v 2D
            grafike alebo 3D grafike, prípadne špecializovať v odvetví ako herný dizajnér/ka.
          </p>
        </b-col>
      </b-row>
    </div>
    <div>
      <place-study/>
    </div>
    <div class="container">
      <h2 class="fw-light mb-5">
        <span class="fw-bold">S akými technológiami</span><br>
        budeš pracovať?
      </h2>
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
      <exceptional/>
    </div>
    <div>
      Slider
    </div>
    <div>
      <school-year/>
    </div>
    <div>
      <students/>
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
import PlaceStudy from '@/plugins/app/_components/a-place-study'
import TechnologyCard from '@/plugins/app/_components/z-technology-card'
import Unity from '../app@gameslab/_icons/technologies-unity.png'
import GDevelop from '../app@gameslab/_icons/technologies-gdevelop.png'
import Piskel from '../app@gameslab/_icons/technologies-piskel.png'
import Blander from '../app@gameslab/_icons/technologies-blender.png'
import Exceptional from '@/plugins/app/_components/a-exceptional'
import SchoolYear from '@/plugins/app@about/_components/a-school-year'
import Students from '@/plugins/app/_components/a-students'
import Options from '@/plugins/app@hybridlab/_components/z-options'
import Discort from '@/plugins/app/_components/a-discort'
import ModernSchool from '@/plugins/app/_components/_modern-school/a-modern-school'
import Support from '@/plugins/app/_components/_support/a-support'
import Newsletter from '@/plugins/app/_components/_newsletter/a-newsletter'

export default {
  name: 'games-lab',
  components: { Newsletter, Support, ModernSchool, Discort, Options, Students, SchoolYear, Exceptional, TechnologyCard, PlaceStudy, BCol, BRow },
  data () {
    return {
      technologies: [
        {
          id: 1,
          image: Unity,
          title: 'Unity',
          description: 'Unity je 3D multiplatformový herný engine vyvinutý spoločnosťou Unity Technologies. Je používaný pre vývoj hier pre PC, konzoly, mobily a web.'
        },
        {
          id: 2,
          image: GDevelop,
          title: 'GDevelop',
          description: 'GDevelop je 2D multiplatformový, bezplatný a open-source herný engine, ktorý sa zameriava hlavne na vytváranie PC a mobilných hier, ako aj HTML5 hier hrateľných v prehliadači.'
        },
        {
          id: 3,
          image: Piskel,
          title: 'Piskel',
          description: 'Piskel je 2D open source softvér na tvorbu pixelov. Používa sa na vytváranie pixelových obrázkov, ako aj viacnásobných animácií snímok a listov sprite.'
        },
        {
          id: 4,
          image: Blander,
          title: 'Blender',
          description: 'Blender je open source softvér na modelovanie a vykresľovanie 3D počítačovej grafiky, animácií a filmov s využitím rôznych techník, napr.: raytraycing, radiosity, scanline rendering, GI'
        }
      ],
      options: [
        {
          id: 1,
          title: 'HybidLab',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
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

<style lang="sass">

</style>
