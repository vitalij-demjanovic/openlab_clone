<template>
  <div>
    <b-row>
      <b-col class="col-6">
        <h2>Nie je moderná škola</h2>
        <span>ako moderná škola</span>
        <p>
          Podcast Moderná škola vznikol v spolupráci s Romanom ”Yablkom” Hraškom, kde našim zámerom je rozobrať svet štandardného vzdelávania a spôsob
          ako môže fungovať moderné vzdelávanie v technológiach.
        </p>
        <div>
          <a href="https://www.youtube.com/c/Modern%C3%A1%C5%A1kola" >
            <img src="../_modern-school/_icons/youtube-color.svg" alt="youtube">
          </a>
          <a href="https://open.spotify.com/show/7x8hnF8aX7LYbPsU155dJs" >
            <img src="../_modern-school/_icons/spotify.svg" alt="spotify">
          </a>
          <a href="https://podcasts.apple.com/sk/podcast/modern%C3%A1-%C5%A1kola/id1594689894" >
            <img src="../_modern-school/_icons/podcast.svg" alt="podcast">
          </a>
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL21vZGVybmFza29sYS9mZWVkLnhtbA" >
            <img src="../_modern-school/_icons/google.svg" alt="google podcast">
          </a>
        </div>
      </b-col>
      <b-col class="col-6">
        <img src="../_modern-school/_icons/modern.png" alt="Moderna skola">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'modern-school',
  components: { BRow, BCol }
}
</script>

<style scoped>

</style>
