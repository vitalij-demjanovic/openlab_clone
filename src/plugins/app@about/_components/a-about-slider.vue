<template>
<div class="container">
  <swiper>
    <swiper-slide>
      <div class="about-slider-item, d-md-flex, justify-content-md-end, position-relative, slide, m-auto, position-relative">
        <div class="slider-item-content bg-purple position-absolute">
          <p class="text-border-w fs-6">
            Labmastri
            <span class="fw-bold">v OpenLabe</span>
          </p>
          <h3 class="mt-5 mb-5">
            V OpenLabe sa okrem technologických vedomostí a zručností snažíme rozvíjať aj iné dôležité parametre kvalitných ľudí.
          </h3>
          <p>
            Ako sú zodpovednosť, spoľahlivosť, samostatnosť, ale aj tímovosť a vzájomnú komunikáciu. Prijímame výzvy najmä voči svojím vlastným ja.
          </p>
          <p class="mb-0 mt-5">Roman Popper, AppsLab</p>
          <p class="mb-0">Siemens Healthineers</p>
        </div>
        <figure class="slide-figure">
          <img
            src="../_icons/join-labmastri.png"
            alt="labmastri"
            class="slider-item-image mb-0 d-md-block d-none rounded-3"
          >
        </figure>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-slider-item, d-md-flex, justify-content-md-end, position-relative, slide, m-auto, position-relative">
        <div class="slider-item-content bg-primary position-absolute">
          <p class="text-border-w fs-6">
            Firmy
            <span class="fw-bold">v OpenLabe</span>
          </p>
          <h3 class="mt-5 mb-5">
            Technológie sa neustále menia.
            Preto to “čo” sa študenti učia
            je druhoradé.
          </h3>
          <p class="mt-5">
            V prvom rade riešime “prečo” a “ako” sa študenti vzdelávajú. Inými slovami, OpenLab je o prístupe. Ten keď si študenti osvoja, dokážu ho aplikovať na čokoľvek po zvyšok života.
          </p>
          <img class="z-index-1 signature mt-5" src="../_icons/signature1.png" alt="signature">
          <p class="mb-0">Grigor Ayrumy</p>
          <p class="mb-0">CEO at WEZEO</p>
        </div>
        <figure class="slide-figure">
          <img
            src="../_icons/firm.png"
            alt="firm"
            class="slider-item-image mb-0 d-md-block d-none rounded-3"
          >
        </figure>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-slider-item, d-md-flex, justify-content-md-end, position-relative, slide, m-auto, position-relative">
        <div class="slider-item-content bg-green position-absolute">
          <p class="text-border-w fs-6">
            Školy
            <span class="fw-bold">v OpenLabe</span>
          </p>
          <h3 class="mt-5 mb-5">
            Vďaka OpenLabu máme v škole špičkových odborníkov zo žilinského Siemens Healthineers.
          </h3>
          <p>
            Venujú sa vybraným 20-tim študentom, ktorí pracujú v tímoch na čiastokových úlohách a v spolupráci s týmito odborníkmi sa učia vyvíjať mobilné aplikácie.
            Vďaka ich vedeniu, založenom na moderných metódach overených v praxi, žiaci spoločne dosahujú výborné výsledky.
          </p>
          <p class="mb-0 mt-5">Milan Válek</p>
          <p class="mb-0">Riaditeľ SPŠ IT, Kysucké Nové Mesto</p>
        </div>
        <figure class="slide-figure">
          <img
            src="../_icons/join-schools.png"
            alt="school"
            class="slider-item-image mb-0 d-md-block d-none rounded-3"
          >
        </figure>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="about-slider-item, d-md-flex, justify-content-md-end, position-relative, slide, m-auto, position-relative">
        <div class="slider-item-content bg-orange position-absolute">
          <p class="text-border-w fs-6">
            Študenti
            <span class="fw-bold">v OpenLabe</span>
          </p>
          <h3 class="mt-5 mb-5">
            GamesLab mi otvoril brány do sveta vývoja softvéru, technológií, ale aj osobného rozvoja
          </h3>
          <p>
            Za podpory skvelých LabMastrov som neustále motivovaný pracovať na sebe, či už po technologickej alebo soft-skills stránke.
          </p>
          <p class="mb-0 mt-5">Viktor Nagy</p>
          <p class="mb-0">GamesLab (SPŠE Hálova 16, Bratislava)</p>
        </div>
        <figure class="slide-figure">
          <img
            src="../_icons/join-students.png"
            alt="students"
            class="slider-item-image mb-0 d-md-block d-none rounded-3"
          >
        </figure>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
import { Swiper } from 'swiper/vue/swiper.js'
import { SwiperSlide } from 'swiper/vue/swiper-slide.js'
import SwiperModule, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

SwiperModule.use([Autoplay])

export default {
  name: 'a-about-slider',
  components: { Swiper, SwiperSlide }
}
</script>

<style lang="sass">
.swiper-slide
  padding-top: 100px !important

.slider-item-content
  bottom: 15%
  color: #ffffff
  padding: 40px 32px
  max-width: 585px
  border-radius: 8px
  z-index: 1

.slide-figure
  height: 500px
  width: 75%
  margin-left: auto

.slider-item-image
  width: 100%
  height: 100%
  object-fit: cover

.signature
  margin-bottom: -20px
  width: 179px
  height: auto
</style>
