<template>
  <div class="container">
    <div class="pd-wrapper">
      <h1 class="text-center">Pridajte sa k nám</h1>
      <h1 class="fw-bold text-center mb-4">My všetci sme OpenLab…</h1>
      <div class="justify-content-center d-flex">
        <div class="slider-scroll p-3">
          <div
            v-for="item in openLab"
            :key="item.id"
          >
            <card
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/plugins/app/_components/z-card'
// import { BCol, BRow } from 'bootstrap-vue-3'

export default {
  name: 'join-us',
  components: { Card },
  data () {
    return {
      openLab: [
        {
          id: 1,
          title: 'Labmastri',
          description: 'Odborníci z praxe, ktorí odovzdávajú študentom svoj know-how v roli mentora 5 hodín týždenne celý školský rok.'
        },
        {
          id: 2,
          title: 'Firmy',
          description: 'Technologické firmy sú garantmi obsahu jednotlivých labov, spolupracujú so študentmi na projektoch a v rámci študentských stáží.'
        },
        {
          id: 3,
          title: 'Školy',
          description: 'Stredné odborné školy zamerané na digitálne technológie v jednotlivých regiónoch inovujú svoje technologické vzdelávanie.'
        },
        {
          id: 4,
          title: 'Študenti',
          description: 'Stredoškoláci so záujmom o najnovšie technológie a silnou vnútornou motiváciou učiť sa nové veci a rozvíjať svoje schopnosti.'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.slider-scroll
  height: 400px
  display: flex
  overflow-x: auto
  align-items: center
  gap: 10px

.slider-scroll
  &::-webkit-scrollbar
    display: none
</style>
