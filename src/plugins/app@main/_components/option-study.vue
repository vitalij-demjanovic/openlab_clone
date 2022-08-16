<template>
  <b-row>
    <b-col class="col-4">
      <h1>V akých laboch možeš študovať?</h1>
    </b-col>
    <b-col class="col-4 d-flex">
      <card
        v-for="option in options"
        :key="option.id"
        :title="option.title"
        :description="option.description"
      />
    </b-col>
  </b-row>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import Card from '@/plugins/app@main/_components/card'

export default {
  name: 'option-study',
  components: { Card, BCol, BRow },
  data () {
    return {
      options: [
        {
          id: 1,
          title: 'HybridLab',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
        },
        {
          id: 2,
          title: 'GamesLab',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
        },
        {
          id: 3,
          title: 'GamesLab',
          description: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný'
        },
        {
          id: 4,
          title: 'AppsLab',
          description: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
