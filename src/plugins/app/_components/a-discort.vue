<template>
  <div class="container discord-bg p-5">
    <b-row>
      <b-col class="col-6">
        <h2 class="text-white mb-3 fw-bold">Pridaj sa k nám na Discord!</h2>
        <p class="text-white mb-5">Pozývame ťa k nám do channelu pre žiakov 9. ročníka, kde môžeš nasať IT atmosféru, spoznať nielen svojich budúcich spolužiakov, ale aj kopec iných zaujímavých ľudí.</p>
        <button class="discord-btn">
          Pridať sa na Discort
          <img src="../_icons/discort/discord.svg" alt="discort">
        </button>
      </b-col>
      <b-col class="col-6 d-flex justify-content-center">
        <img src="../_icons/discort/discord-white.svg" alt="discort">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
export default {
  name: 'discort',
  components: { BRow, BCol }

}
</script>

<style lang="sass">
.discord-bg
  background-color: #5865f2 !important
  border-radius: 10px

.discord-btn
  background-color: #ffffff
  border-radius: 6px
  padding: 18px 50px
  font-weight: bold
  color: #3597ff
  transition: all 0.3s ease
  &:hover
    color: #000000
</style>
