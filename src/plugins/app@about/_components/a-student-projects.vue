<template>
  <div class="container pd-wrapper">
    <h1 class="text-center mb-5">Pozrite si <span class="fw-bold">študentské projekty</span></h1>
    <p class="text-center text-gray mb-5">Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a celú spoločnosť vpred.</p>
    <div>
      <h5 class="text-border fs-6 mb-5">Projekty študentov v <span class="fw-bold">OpenLabe</span></h5>
      <div/>
      <div class="slider-m">
        <div class="slide-c" ref="slide">
          <div class="slide-item" ref="mov">
            <b-row class="justify-content-between">
              <b-col class="col-md-6 col-xl-4">
                <h3 class="fw-bold mb-5">Študentský projekt Mapovanie z HybridLabu</h3>
                <p class="text-gray">Mapovanie je hybridná aplikácia, ktorá umožní ľuďom so spoločnými záľubami deliť sa o svoje obľúbené miesta a ukladať ich do komunitnej mapy. Aplikáciu tak môžu využívať ľudia z rôznych komunít. Užívateľ sa jednoducho pridá do skupiny, ktorá ho zaujíma, a následne môže vidieť už “zmapované” miesta alebo pridávať nové. Prehľad príspevkov a skupín mu zobrazuje dostupná mapa. Do aplikácie sa užívateľ vie prihlásiť cez SSO, t.j. prihlásenie pomocou služby tretej strany, napr. Facebook alebo Apple ID účet. Na vývoj študenti použili technológie - Ionic, OctoberCMS a Vue. Aktuálne je aplikácia v MVP verzii.</p>
              </b-col>
              <b-col class="col-md-6">
                <figure class="position-relative">
                  <img class="rounded-4" src="../_icons/maxresdefault_1.jpg">
                  <img
                    class="position-absolute start-50 top-50 translate-middle play-btn"
                    src="../_icons/play.svg"
                  >
                </figure>
              </b-col>
            </b-row>
          </div>
          <div class="slide-item" ref="mov">
            <b-row class="justify-content-between">
              <b-col class="col-md-6 col-xl-4">
                <h3 class="fw-bold mb-5">Študentský projekt RealTopia z GamesLabu</h3>
                <p class="text-gray">RealTopia je fantasy hra s 2D grafikou, ktorá nesie environmentálne posolstvo.
                  Je v nej zakomponovaných množstvo faktov o ekológii, globalizácii a svete okolo nás. V jadre je jednoduchá Open World stratégia s Resource Managementom a Pixel Art grafikou.
                  Študenti ju vyvíjali v multiplatformovom hernom engine - Unity s využitím jazyku C#.
                  Hra je dostupná pre Android. Tento študentský projekt prebehol v spolupráci s Ambrelou - platformou rozvojových organizácií v rámci ich medzinárodného projektu Bridge 47.
                </p>
              </b-col>
              <b-col class="col-md-6">
                <figure class="position-relative">
                  <img class="rounded-4" src="../_icons/student-project-realtopia.png">
                  <img
                    class="position-absolute start-50 top-50 translate-middle play-btn"
                    src="../_icons/play.svg"
                  >
                </figure>
              </b-col>
            </b-row>
          </div>
          <div class="slide-item" ref="mov">
            <b-row class="justify-content-between">
              <b-col class="col-md-6 col-xl-4">
                <h3 class="fw-bold mb-5">Študentský projekt Renmo z AppsLabu</h3>
                <p class="text-gray">
                  Renmo je softvérová aplikácia, ktorá slúži ako rezervačný systém. Užívateľ si vie prostredníctvom systému ľahko a rýchlo zarezervovať rôzne služby, napr. objednať sa ku kaderníkovi. V aplikácii si takisto firmy vedia nastaviť detailné informácie o sebe a ponuku svojich služieb.
                  Aplikácia vie uľahčiť prácu aj zamestnancom, ktorí vidia aktívne rezervácie pre daný deň ale aj nasledujúce.
                  Na vývoj študenti použili technológie: MySQL, SpringBoot a Angular.
                </p>
              </b-col>
              <b-col class="col-md-6">
                <figure class="position-relative">
                  <img class="rounded-4" src="../_icons/maxresdefault.jpg">
                  <img
                    class="position-absolute start-50 top-50 translate-middle play-btn"
                    src="../_icons/play.svg"
                  >
                </figure>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
      <div class="slide-dots d-flex justify-content-center mb-5">
        <div :class="['slide-dot', {active: ndx === 0}]"/>
        <div :class="['slide-dot', {active: ndx === 1}]"/>
        <div :class="['slide-dot', {active: ndx === 2}]"/>
      </div>
      <div class="mb-4">
        <button>
          <z-icon iconName="slide-left" @click="prevSlide(ndx -= 1)"/>
        </button>
        <button class="space-ma">
          <z-icon iconName="slide-right" @click="nextSlide(ndx += 1)"/>
        </button>
      </div>
      <a href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw" class="text-primary">Pozrieť si všetky projekty <z-icon iconName="arrow-right"/></a>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'

export default {
  name: 'a-student-projects',
  components: { ZIcon, BCol, BRow },
  data () {
    return {
      ndx: 0,
      slideNdx: 0,
      sliderPosition: 0
    }
  },
  methods: {
    moveSlider (nxt) {
      const { slide, mov } = this.$refs
      const widSlide = parseInt(getComputedStyle(mov).getPropertyValue('width'), 10)
      this.slideNdx = nxt
      this.sliderPosition = -((widSlide + 50) * nxt)
      slide.style.transform = `translateX(${this.sliderPosition}px)`
      console.log(this.sliderPosition)
    },
    nextSlide (ndx) {
      if (ndx < 3) {
        this.moveSlider(ndx)
      } else if (ndx > 2) {
        this.ndx = 0
        this.moveSlider(0)
      }
    },
    prevSlide (ndx) {
      if (ndx >= 0) {
        this.moveSlider(ndx)
      } else {
        this.ndx = 0
      }
    }
  }
}
</script>

<style lang="sass">
.slider-m
  width: 100%
  height: 450px
  position: relative
  overflow: hidden

.slide-c
  display: flex
  position: absolute
  align-items: center
  transition: all 0.5s ease

.slide-item
  width: 1350px !important
  margin-right: 50px !important

.slide-dot
  width: 10px
  height: 10px
  background-color: rgba(255, 255, 255, 0.5)
  border-radius: 50%
  margin-right: 10px
  &:last-child
    margin-right: 0
  &.active
    background: #3597ff
</style>
