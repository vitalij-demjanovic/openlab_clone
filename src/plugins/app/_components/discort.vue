<template>
  <div>
    <b-row>
      <b-col>
        <h2>Pridaj sa k nám na Discord!</h2>
        <p>Pozývame ťa k nám do channelu pre žiakov 9. ročníka, kde môžeš nasať IT atmosféru, spoznať nielen svojich budúcich spolužiakov, ale aj kopec iných zaujímavých ľudí.</p>
        <button>
          Pridať sa na Discort
          <img src="../_icons/discort/discord.svg" alt="discort">
        </button>
      </b-col>
      <b-col>
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

<style scoped>

</style>
