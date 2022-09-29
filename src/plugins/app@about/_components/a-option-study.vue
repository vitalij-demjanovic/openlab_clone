<template>
  <div class="container">
    <div class="pd-wrapper">
      <b-row class="align-items-center">
        <b-col class="col-12 col-xl-3 mb-3 mb-md-5 mb-lg-0">
          <h1>
            V akých laboch <br>
            <span class="span-weight">možeš študovať?</span>
          </h1>
        </b-col>
        <b-col class="col-12 col-lg-8 d-flex flex-column flex-wrap flex-lg-nowrap flex-lg-row gap-3">
          <card
            v-for="option in options"
            :key="option.id"
            :title="option.title"
            :description="option.description"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import Card from '@/plugins/app/_components/z-card'

export default {
  name: 'option-study',
  components: { Card, BCol, BRow },
  data () {
    return {
      options: [
        {
          id: 1,
          title: 'Hybrid',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
        },
        {
          id: 2,
          title: 'Games',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
        },
        {
          id: 4,
          title: 'Apps',
          description: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
