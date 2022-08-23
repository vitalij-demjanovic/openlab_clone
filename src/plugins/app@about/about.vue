<template>
<div>
  <div class="bg-blue">
    <div class="container">
      <b-row class="align-items-center">
        <b-col class="col-5">
          <h1>Inštitút stredoškolského odborného vzdelávania</h1>
          <span class="title-span">zameraný na IT & AI</span>
          <p class="text-width mt-4">Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho vzdelávania</p>
        </b-col>
        <b-col class="col-7 d-flex justify-content-center">
          <img class="image-visual" src="../app@about/_icons/introduction-img.png" alt="introduction">
        </b-col>
      </b-row>
    </div>
  </div>
  <div class="pd-wrapper container">
    <b-row>
      <b-col class="text-center">
        <h1 class="mb-5">
          Prečo
          <span class="span-weight">OpenLab?</span>
        </h1>
        <p class="text-gray mx-md-5">V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu, pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti tvoriť.</p>
      </b-col>
    </b-row>
    <b-row class="pt-5 justify-content-center">
      <b-col class="col-3">
        <img class="mb-2" src="../app@about/_icons/select.svg" alt="selct">
        <h5 class="fw-bold mb-2">Celospoločenský rozvoj</h5>
        <p class="text-gray">Osnovy aj učebné materiály pre všetky tech oblasti sú open source</p>
      </b-col>
      <b-col class="col-3">
        <img class="mb-2" src="../app@about/_icons/support.svg" alt="select">
        <h5 class="fw-bold mb-2">Učenie praxou</h5>
        <p class="text-gray">Študentov vedieme k tímovému riešeniu problémov.</p>
      </b-col>
      <b-col class="col-3">
        <img class="mb-2" src="../app@about/_icons/intership.svg" alt="select">
        <h5 class="fw-bold mb-2">Rozvoj talentu</h5>
        <p class="text-gray">Vytvárame šikovné tímy schopné riešiť veľké problémy.</p>
      </b-col>
    </b-row>
  </div>
  <div class="container">
    <b-row class="align-items-center">
      <b-col class="col-6">
        <h1 class="mb-5">
          Naša vízia
          <span class="span-weight">v OpenLabe</span>
        </h1>
        <p class="text-gray">Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj prosperujúcej spoločnosti.</p>
        <p class="text-gray">Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v školstve v technológiách.</p>
      </b-col>
      <b-col class="col-6 d-flex flex-wrap justify-content-center justify-content-lg-end px-1 px-md-2 gap-3">
          <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
            <span class="count fw-bold mb-1 lh-1">11</span>
            <p class="fw-bold type">tried</p>
          </div>
          <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
            <span class="count fw-bold mb-1 lh-1">222</span>
            <p class="fw-bold type">študentov</p>
          </div>
          <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
            <span class="count fw-bold mb-1 lh-1">14</span>
            <p class="fw-bold type">labmastrov</p>
          </div>
          <div class="item px-4 py-3 d-flex flex-column justify-content-end align-items-end vision">
            <span class="count fw-bold mb-1 lh-1">2</span>
            <p class="fw-bold type">školy</p>
          </div>
      </b-col>
    </b-row>
  </div>
  <div class="pd-wrapper container">
    <option-study/>
  </div>
  <div class="container pd-wrapper">
    <h1 class="mb-5 text-center"><span class="span-weight">Nachádzame sa</span> na dvoch školách</h1>
    <b-row class="justify-content-between">
      <b-col class="col-5">
        <img class="mb-4" src="../app@about/_icons/school1.png" alt="school">
        <div>
          <img src="../app@about/_icons/place.svg" alt="place">
          <span class="text-gray">Hálova 16, Bratislava</span>
        </div>
        <div class="d-flex justify-content-between align-items-end mt-3">
          <span class="school-address">Stredná Priemyselná Škola Elektrotechnická</span>
          <a class="fw-bold" href="https://spsehalova.sk/">www.spsehalova.sk</a>
        </div>
      </b-col>
      <b-col class="col-5">
        <img class="mb-4" src="../app@about/_icons/school2.png" alt="school">
        <div>
          <img src="../app@about/_icons/place.svg" alt="place">
          <span class="text-gray">Nábrežná 1325, Kysucké Nové Mesto</span>
        </div>
        <div class="d-flex justify-content-between align-items-end mt-3">
          <span class="school-address">Stredná Priemyselná Škola Informačných Technológií</span>
          <a class="fw-bold" href="https://spsknm.sk">www.spsknm.sk</a>
        </div>
      </b-col>
    </b-row>
  </div>
  <div class="bg-primary-lighter">
    <div class="container">
      <b-row class="align-items-center">
        <b-col class="col-5">
          <h1 class="mb-5">
            <span class="fw-bold">Chceš ísť študovať odbor</span>
            kompletne zameraný na IT?
          </h1>
          <div class="heading fw-bold">2573M</div>
          <span class="fw-bold">Programovanie digitálnych technológií</span>
          <p class="mb-3 text-gray">Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste sprevádzať a podporovať.</p>
          <p class="mb-5 text-gray">Staň sa súčasťou tohto inovatívneho študijného programu aj ty!</p>
          <button class="g-btn btn-lg">Chcem vedieť viac</button>
        </b-col>
        <b-col class="col-7">
          <img src="../app@about/_icons/introduction-img.png" alt="introduction">
        </b-col>
      </b-row>
    </div>
  </div>
  <div>
    <join-us/>
  </div>
  <div>Slider</div>
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
      <a href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw" class="text-primary">Pozrieť si všetky projekty <icon name="arrow-right"/></a>
    </div>
  </div>
  <div class="container">
    <exceptional/>
  </div>
  <div>
    <team/>
  </div>
  <div class="container pd-wrapper">
    <b-row class="align-items-center">
      <b-col class="col-6">
        <img src="../app@about/_icons/people.png" alt="people">
      </b-col>
      <b-col class="col-6">
        <h2 class="fw-bold">Podporte nás</h2>
        <p>OpenLab postupne rozširujeme ako neziskový vzdelávací projekt s cieľom otvoriť OpenLab-y zamerané na rôzne IT technológie na čo najväčší počet škôl vo všetkých slovenských regiónoch. Veríme, že OpenLab bude natoľko úspešný, že sa stane štandardom vzdelávania na Slovensku!</p>
        <a href="https://www.ludialudom.sk/profil/detail/41588" class="d-flex align-items-center">Chcem podporiť <icon name="arrow-right"/></a>
      </b-col>
    </b-row>
  </div>
  <div class="container">
    <b-row class="align-items-center justify-content-between">
      <b-col class="col-lg-5 col-xl-4">
        <h1>
          Kto stojí <br>
          <span class="fw-bold">za Openlabom?</span>
        </h1>
      </b-col>
      <b-col class="col-lg-7">
        <div>
          <partners/>
        </div>
      </b-col>
    </b-row>
  </div>
  <div class="container pd-wrapper">
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
import Icon from '../app/_components/z-icon/z-icon'
import OptionStudy from '@/plugins/app@about/_components/a-option-study'
import JoinUs from '@/plugins/app@about/_components/a-join-us'
import Exceptional from '@/plugins/app/_components/a-exceptional'
import Team from '@/plugins/app@about/_components/a-team'
import ModernSchool from '@/plugins/app/_components/_modern-school/a-modern-school'
import Support from '@/plugins/app/_components/_support/a-support'
import Newsletter from '@/plugins/app/_components/_newsletter/a-newsletter'
import Partners from '@/plugins/app/_components/a-partners'

export default {
  name: 'MainPage',
  components: { Icon, Partners, Newsletter, Support, ModernSchool, Team, Exceptional, JoinUs, OptionStudy, BCol, BRow }
}
</script>

<style lang="sass">
.bg-blue
  background: #3597ff
  color: #ffffff

.title-span
  font-size: 2.5rem
  font-weight: 500

.item
  width: 233px
  height: 183px
  border-radius: 4px

.count
  font-size: 90px

.type
  font-size: 18px

.vision
  &:nth-child(1)
    color: #5b94d7
    background-color: rgba(221, 236, 251, 0.4)
  &:nth-child(2)
    color: #5cc19a
    background-color: rgba(156, 238, 204, 0.4)
  &:nth-child(3)
    color: #dbca68
    background-color: rgba(238, 226, 156, 0.4)
  &:nth-child(4)
    color: #b95e73
    background-color: rgba(238, 156, 156, 0.4)

.school-address
  width: 80%
  font-size: 1.25rem
  font-weight: 700

.heading
  margin-bottom: -40px
  font-size: 62px
  color: rgba(209, 220, 231, 0.3)
  z-index: 0

.text-border
  position: relative
  &:after
    content: ''
    position: absolute
    bottom: -25px
    left: 0
    width: 50px
    height: 1px
    background-color: rgba(86, 107, 141, 0.5)

</style>
