<template>
  <div>
    <div class="container">
      <b-row>
        <b-col class="col-md-6 col-lg-5 mb-5 mb-md-0">
          <img src="../_icons/drilleo.svg" class="min-img mb-4" alt="drillo">
          <h1 class="mb-5">
            Jednoduchá webová<br> a mobilná aplikácia
            <span class="fw-bold">Drilleo</span>
          </h1>
          <p class="text-gray">
            Drilleo je jednoduchá webová aplikácia, ktorá umožňuje učiteľom testovať vedomosti svojich študentov na diaľku efektívne a online.
            Pomáhame učiteľom zvládnuť dištančné vzdelávanie lepšie a vytvoriť študentom príležitosti vypracovávať testy interaktívne.
          </p>
          <p class="fw-bold text-gray mb-5">
            Ste učiteľ? Prihláste sa zdarma cez Drilleo a začnite overovať vedomosti svojich študentov.
          </p>
          <button class="g-btn btn-lg">Spoznaj sa cez Drilleo</button>
        </b-col>
        <b-col class="col-md-6 offset-lg-1 col-lg-5 col-xl-4">
          <img src="../_icons/drilleo.png" alt="openacademy">
        </b-col>
      </b-row>
    </div>
    <div class="container pd-wrapper">
      <b-row>
        <b-col class="text-center">
          <h1 class="mb-5">
            <span class="fw-bold">Ako pomáha Drilleo</span>
            učiteľom
          </h1>
          <p class="text-gray mb-5">
            Drilleo vytvárame v OpenLabe pre potreby všetkých učiteľov, ktorí hľadajú inovatívne spôsoby, ako študentov testovať na diaľku v čase pandémie.
            Podľa spätnej väzby našich užívateľov Drilleo vylepšujeme o nové funkcionality. Veríme, že Drilleo uľahčí vzdelávanie z domu aj Vám!
          </p>
        </b-col>
      </b-row>
      <b-row class="d-flex flex-wrap justify-content-between">
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/computer.svg" alt="computer">
          <p>Vytvárajte online testy pre svojich študentov</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/mortarboard.svg" alt="mortarboard">
          <p>Zadávajte študentom testy na diaľku</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/learn.svg" alt="learn">
          <p>Vytvárajte unikátne testy cez náhodné poradie otázok</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/tutorial.svg" alt="tutorial">
          <p>Vytvárajte unikátne testy cez náhodné poradie otázok</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/clock.svg" alt="clock">
          <p>Ušetrite čas vďaka automatickému vyhodnocovaniu</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/approved.svg" alt="approved">
          <p>Zdieľajte študentom výsledky</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/certificate.svg" alt="certificate">
          <p>Vyhodnocujte celkovú úspešnosť a úspešnosť pri jednotlivých otázkach</p>
        </b-col>
        <b-col class="col-3 teacher-card py-4 px-3 px-md-4 py-md-5">
          <img src="../_icons/globe.svg" alt="globe">
          <p>Odporučte študentom oblasti na doštudovanie</p>
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col>
        <button>Prihlásiť sa cez Drilleo</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'drilleo',
  components: { BRow, BCol }
}
</script>

<style lang="sass">
.teacher-card
  background: #f8f9fa
  border-radius: 5px
</style>
