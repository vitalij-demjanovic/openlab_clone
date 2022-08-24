<template>
  <div>
    <div class="container">
      <b-row class="align-items-end">
        <b-col class="col-md-6 col-lg-5 mb-5 mb-md-0">
          <img src="../_icons/openacademy.svg" class="min-img mb-4" alt="openlab">
          <h1 class="mb-5">
            Vzdelávacia platforma
            <span class="fw-bold">OpenAcademy</span>
          </h1>
          <p>
            OpenAcademy je voľne dostupná vzdelávacia platforma pre najnovšie technologické smery, ktorým sa venujeme v OpenLabe.
            Učebné materiály vyvíjajú odborníci z praxe v súlade so Štátnym vzdelávacím programom (ŠVP).
          </p>
          <p class="mb-5">
            Učiteľom pomáhame zapracovať materiály do svojich učebných osnov.
            Preto organizujeme online školenia pre učiteľov IT, ktorí sa chcú naučiť so svojimi študentmi vyvíjať aplikácie, hry a IoT projekty.
          </p>
          <button class="btn-lg g-btn mb-3">Spoznaj OpenAcademy</button>
        </b-col>
        <b-col class="col-md-6 offset-lg-1">
          <img src="../_icons/openacademy.png" alt="openacademy">
        </b-col>
      </b-row>
    </div>
    <div class="container pd-wrapper">
      <b-row>
        <b-col>
          <h1 class="mb-5 text-center">
            <span class="fw-bold">Aké témy nájdete</span>
            v OpenAcademy?
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="col-4">
          <img src="../_icons/theme1.png">
          <h5 class="my-4 fw-bold">Vývoj hybridných aplikácií</h5>
          <p class="text-gray">
            Hybridné aplikácie sú výsledkom najnovšieho technologického progresu, kedy jedným kódom vytvoríme aplikáciu pre takmer všetko s displayom.
            Študenti sa tak učia pomocou jednej technológie vytvoriť aplikáciu pre web aj mobilné zariadenia.
            Zámerom je vytvoriť jednoduchú hybridnú aplikáciu pomocou HTML, CSS, JavaScript, Vue a OctoberCMS.
          </p>
        </b-col>
        <b-col class="col-4">
          <img src="../_icons/theme2.png">
          <h5 class="my-4 fw-bold">Vývoj online hier</h5>
          <p class="text-gray">
            Vývoj hier patrí medzi atraktívne a rýchlo rastúce technologické smery. Študenti sa venujú vývoju online hier.
            Učia sa hernú 2D a 3D grafiku, programovanie hier v Unity a základy herného dizajnu. Zámerom je vytvoriť jednoduchú online hru s uceleným herným konceptom.
            Niektorí študenti to dotiahnu až na zverejnenie v Google Play store a tisíce stiahnutí.
          </p>
        </b-col>
        <b-col class="col-4">
          <img src="../_icons/theme3.png">
          <h5 class="my-4 fw-bold">Vývoj vecí (IoT)</h5>
          <p class="text-gray">
            Internet vecí (IoT) je tou ďalšou „veľkou vecou“ vo svete technológií. Každú sekundu sa do siete pripojí 127 nových zariadení.
            Študenti sa preto učia navrhovať a programovať hardware a vytvárať tak smart zariadenia.
            Zámerom je vytvoriť funkčné smart zariadenie ovládateľné cez telefón pomocou Arduino, Raspberry Pi, MQTT, Node-RED a ESP HomeLib.
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'

export default {
  name: 'open-academy',
  components: { BRow, BCol }

}
</script>

<style lang="sass">
.min-img
  width: 100px
  height: 28px

.flex-bottom
  justify-content: flex-end !important
</style>
