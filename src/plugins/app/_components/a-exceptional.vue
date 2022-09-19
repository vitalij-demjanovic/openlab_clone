<template>
  <div class="container pd-wrapper-border">
    <h2 class="text-center">Čím sme <span class="fw-bold">výnimoční?</span></h2>
    <div class="d-flex flex-wrap card-exceptional">
      <div
        class="card-exceptional-item col-4"
        v-for="special in specials"
        :key="special.id"
      >
        <img class="mb-3"  :src="special.image" alt="special">
        <h5 class="fw-bold mb-3">{{special.title}}</h5>
        <p class="text-gray">{{special.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import special1 from '../_components/_icons/exceptional/special1.svg'
import special2 from '../_components/_icons/exceptional/special2.svg'
import special3 from '../_components/_icons/exceptional/special3.svg'
import special4 from '../_components/_icons/exceptional/special4.svg'
import special5 from '../_components/_icons/exceptional/special5.svg'
import special6 from '../_components/_icons/exceptional/special6.svg'

export default {
  name: 'exceptional',
  data () {
    return {
      specials: [
        {
          id: 1,
          image: special1,
          title: 'Partnerstvo',
          description: 'Dáva študentom slobodu, ktorú vyvažujú zodpovednosťou. Spolupráca LabMastra a študentov je v partnerskej rovine.'
        },
        {
          id: 2,
          image: special2,
          title: 'LabMaster',
          description: 'Je mentor s expertízou v danej oblasti, ktorý nastavuje rámce a sprevádza študentov pri dosahovaní míľnikov.'
        },
        {
          id: 3,
          image: special3,
          title: 'Učebný blok',
          description: 'Je základný dokument, z ktorého sa študenti učia. Obsahuje všetky vzdelávacie podklady pre konkrétnu fázu.'
        },
        {
          id: 4,
          image: special4,
          title: 'Problem driven',
          description: 'Je princíp učenia, vďaka ktorému sú študenti vedení ku kritickému mysleniu s cieľom vyriešiť konkrétne problémy.'
        },
        {
          id: 5,
          image: special5,
          title: 'Project driven',
          description: 'Po teoretickej fáze sú študenti rozdelení do tímov, v ktorých v spolupráci s firmami tvoria konkrétny projekt pre zákazníka.'
        },
        {
          id: 6,
          image: special6,
          title: 'Samoštúdium',
          description: 'Študenti trávia 80% času samoštúdiom a sú vedení k tímovej spolupráci. 20% teórie slúži iba ako odrazový mostík.'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.card-exceptional
  margin: 0 5rem
  &-item
    padding: 3rem
</style>
