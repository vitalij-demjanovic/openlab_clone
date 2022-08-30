<template xmlns:div="http://www.w3.org/1999/html">
  <div>
    <div class="bg-purple">
      <div class="container">
        <b-row class="align-items-center position-relative">
          <b-col class="col z-index-1 col-lg-5 my-md-5 py-5">
            <h1 class="text-white mb-5 fw-light">
              Nie je moderná škola <br>
              <span class="fw-bold text-white">ako moderná škola</span>
            </h1>
            <p class="text-white">
              RPodcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je
              rozobrať svet štandardného vzdelávania a spôsob ako môže fungovať moderné vzdelávanie v technológiach.
            </p>
            <grey-social/>
          </b-col>
          <b-col class="col d-flex justify-content-center">
            <img class="image-vid" src="../app@school/_icons/main-modern-school.png" alt="introduction">
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
  <div class="pd-wrapper container">
    <b-row class="align-items-center justify-content-between">
      <b-col class="col-5">
        <img src="../app@school/_icons/modern-podcast.png" alt="school">
      </b-col>
      <b-col class="col-6 offset-1">
        <h1 class="fw-light mb-4">Podcast<span class="fw-bold">Moderná škola</span></h1>
        <p class="text-gray">Zámerom tohto podcastu je mapovať dianie okolo neziskovej organizácie a jej projektov ako je GameChangers a pripravovanej strednej školy Skyro.</p>
        <span class="text-gray fw-bold">Vypočuj si podcast na platformách</span>
        <color-social class="mt-3"/>
      </b-col>
    </b-row>
  </div>
  <div class="bg-light-blue">
    <div class="container">
      <b-row class="align-items-center position-relative">
        <b-col class="col-6">
          <h1 class="fw-light mb-5">V spolupráci s
            <span class="fw-bold">najznámejším tech influencerom</span>
          </h1>
          <p class="text-gray mb-4">Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, ktorý patrí medzi najznamejších tech influencerov na Slovensku.</p>
          <p class="text-gray mb-4">S našimi partnermi preberáme témy v 3 oblastiach:</p>
          <div>
            <div class="text-gray fw-bold mb-2"><z-icon iconName="checkmark"/> premena na modernú školu</div>
            <div class="text-gray fw-bold mb-2"><z-icon iconName="checkmark"/> vzdelávanie v technológiach</div>
            <div class="text-gray fw-bold"><z-icon iconName="checkmark"/> úspešné príklady z praxe</div>
          </div>
        </b-col>
        <b-col class="col-6">
          <img src="../app@school/_icons/yablko.png" alt="yablko">
          <div class="link-yablko d-flex flex-column align-items-end">
            <a class="text-gray fw-bold" href="https://www.youtube.com/channel/UC01guyOZpf40pUopBvdPwsg">robweb.sk</a>
            <div class="mt-3 contact-yablko">
              <img src="../app@school/_icons/facebook.svg" alt="facebook">
              <img src="../app@school/_icons/instagram.svg" alt="instagram">
              <img src="../app@school/_icons/linkedin.svg" alt="linkedin">
              <img src="../app@school/_icons/youtube.svg" alt="youtube">
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
  <div>
    <episodes/>
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
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
import GreySocial from '@/plugins/app/_components/a-grey-social'
import ColorSocial from '@/plugins/app/_components/a-color-social'
import ModernSchool from '@/plugins/app/_components/_modern-school/a-modern-school'
import Support from '@/plugins/app/_components/_support/a-support'
import Newsletter from '@/plugins/app/_components/_newsletter/a-newsletter'
import Episodes from '@/plugins/app@school/_components/a-episodes'
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'

export default {
  name: 'SchoolPage',
  components: { ZIcon, Episodes, Newsletter, Support, ModernSchool, ColorSocial, GreySocial, BRow, BCol }
}
</script>

<style lang="sass">
.link-yablko
  position: absolute
  bottom: 35px
  right: 0

.contact-yablko
  img
    margin-right: 10px
    &:last-child
      margin-right: 0
</style>
