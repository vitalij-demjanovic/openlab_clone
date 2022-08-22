<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1>
            Jednoduchá webová
            a mobilná aplikácia Drilleo
          </h1>
          <p>
            Drilleo je jednoduchá webová aplikácia, ktorá umožňuje učiteľom testovať vedomosti svojich študentov na diaľku efektívne a online.
            Pomáhame učiteľom zvládnuť dištančné vzdelávanie lepšie a vytvoriť študentom príležitosti vypracovávať testy interaktívne.
          </p>
          <p>
            Ste učiteľ? Prihláste sa zdarma cez Drilleo a začnite overovať vedomosti svojich študentov.
          </p>
          <button>Spoznaj sa cez Drilleo</button>
        </b-col>
        <b-col>
          <img src="../_icons/drilleo.png" alt="openacademy">
        </b-col>
      </b-row>
    </div>
    <b-row>
      <b-col>
        <h1>Ako pomáha Drilleo učiteľom</h1>
        <p>
          Drilleo vytvárame v OpenLabe pre potreby všetkých učiteľov, ktorí hľadajú inovatívne spôsoby, ako študentov testovať na diaľku v čase pandémie.
          Podľa spätnej väzby našich užívateľov Drilleo vylepšujeme o nové funkcionality. Veríme, že Drilleo uľahčí vzdelávanie z domu aj Vám!
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-3">
        <img src="../_icons/computer.svg" alt="computer">
        <p>Vytvárajte online testy pre svojich študentov</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/mortarboard.svg" alt="mortarboard">
        <p>Zadávajte študentom testy na diaľku</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/learn.svg" alt="learn">
        <p>Vytvárajte unikátne testy cez náhodné poradie otázok</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/tutorial.svg" alt="tutorial">
        <p>Vytvárajte unikátne testy cez náhodné poradie otázok</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/clock.svg" alt="clock">
        <p>Ušetrite čas vďaka automatickému vyhodnocovaniu</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/approved.svg" alt="approved">
        <p>Zdieľajte študentom výsledky</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/certificate.svg" alt="certificate">
        <p>Vyhodnocujte celkovú úspešnosť a úspešnosť pri jednotlivých otázkach</p>
      </b-col>
      <b-col class="col-3">
        <img src="../_icons/globe.svg" alt="globe">
        <p>Odporučte študentom oblasti na doštudovanie</p>
      </b-col>
    </b-row>
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

<style scoped>

</style>
