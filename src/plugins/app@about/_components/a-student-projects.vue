<template>
  <div class="container pd-wrapper">
    <h1 class="text-center mb-5">Pozrite si <span class="fw-bold">študentské projekty</span></h1>
    <p class="text-center text-gray mb-5">Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a celú spoločnosť vpred.</p>
    <div>
      <h5 class="text-border fs-6 mb-5">Projekty študentov v <span class="fw-bold">OpenLabe</span></h5>
      <div/>
      <b-row>
        <b-col class="col-5">
          <h3 class="fw-bold mb-5">Študentský projekt Mapovanie z HybridLabu</h3>
          <p class="text-gray">Mapovanie je hybridná aplikácia, ktorá umožní ľuďom so spoločnými záľubami deliť sa o svoje obľúbené miesta a ukladať ich do komunitnej mapy. Aplikáciu tak môžu využívať ľudia z rôznych komunít. Užívateľ sa jednoducho pridá do skupiny, ktorá ho zaujíma, a následne môže vidieť už “zmapované” miesta alebo pridávať nové. Prehľad príspevkov a skupín mu zobrazuje dostupná mapa. Do aplikácie sa užívateľ vie prihlásiť cez SSO, t.j. prihlásenie pomocou služby tretej strany, napr. Facebook alebo Apple ID účet. Na vývoj študenti použili technológie - Ionic, OctoberCMS a Vue. Aktuálne je aplikácia v MVP verzii.</p>
        </b-col>
        <b-col class="col-6">
          Video
        </b-col>
      </b-row>
      <div>
        <button>
          <icon name="arrow-right"/>
        </button>
        <button>
          <icon name="arrow-right"/>
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
  components: { ZIcon, BCol, BRow }
}
</script>

<style scoped>

</style>
