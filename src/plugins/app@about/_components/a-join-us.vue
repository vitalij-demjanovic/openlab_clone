<template>
  <div>
    <h1>Pridajte sa k nám</h1>
    <h1>My všetci sme OpenLab…</h1>
    <div>
      <card
        v-for="item in openLab"
        :key="item.id"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/plugins/app/_components/z-card'

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

<style scoped>

</style>
