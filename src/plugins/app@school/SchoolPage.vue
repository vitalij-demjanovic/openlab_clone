<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1>Nie je moderná škola</h1>
          <span>zako moderná škola</span>
          <p>
            RPodcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je
            rozobrať svet štandardného vzdelávania a spôsob ako môže fungovať moderné vzdelávanie v technológiach.
          </p>
          <grey-social/>
        </b-col>
        <b-col class="col-6">
          <img src="../app@school/_icons/main-modern-school.png" alt="introduction">
        </b-col>
      </b-row>
    </div>
  </div>
  <div>
    <b-row>
      <b-col class="col-6">
        <img src="../app@school/_icons/modern-podcast.png" alt="school">
      </b-col>
      <b-col class="col-6">
        <h1>PodcastModerná škola</h1>
        <p>Zámerom tohto podcastu je mapovať dianie okolo neziskovej organizácie a jej projektov ako je GameChangers a pripravovanej strednej školy Skyro.</p>
        <span>Vypočuj si podcast na platformách</span>
        <color-social/>
      </b-col>
    </b-row>
  </div>
  <div>
    <b-row>
      <b-col class="col-6">
        <h2>V spolupráci s najznámejším tech influencerom</h2>
        <p>Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, ktorý patrí medzi najznamejších tech influencerov na Slovensku.</p>
        <p>S našimi partnermi preberáme témy v 3 oblastiach:</p>
        <div>
          <div><checkmark/> premena na modernú školu</div>
          <div><checkmark/> vzdelávanie v technológiach</div>
          <div><checkmark/> úspešné príklady z praxe</div>
        </div>
      </b-col>
      <b-col class="col-6">
        <img src="../app@school/_icons/yablko.png" alt="yablko">
        <div>
          <a href="https://www.youtube.com/channel/UC01guyOZpf40pUopBvdPwsg">robweb.sk</a>
          <div>
            <img src="../app@school/_icons/facebook.svg" alt="facebook">
            <img src="../app@school/_icons/instagram.svg" alt="instagram">
            <img src="../app@school/_icons/linkedin.svg" alt="linkedin">
            <img src="../app@school/_icons/youtube.svg" alt="youtube">
          </div>
        </div>
      </b-col>
    </b-row>
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
import GreySocial from '@/plugins/app/_components/grey-social'
import ColorSocial from '@/plugins/app/_components/color-social'
import ModernSchool from '@/plugins/app/_components/_modern-school/modern-school'
import Support from '@/plugins/app/_components/_support/support'
import Newsletter from '@/plugins/app/_components/_newsletter/newsletter'
import Checkmark from '@/plugins/app/_components/checkmark'
import Episodes from '@/plugins/app@school/_components/episodes'

export default {
  name: 'SchoolPage',
  components: { Episodes, Checkmark, Newsletter, Support, ModernSchool, ColorSocial, GreySocial, BRow, BCol }
}
</script>

<style scoped>

</style>
