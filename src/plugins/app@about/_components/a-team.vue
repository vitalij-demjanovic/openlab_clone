<template>
  <div class="container">
    <div class="pd-wrapper">
      <h1 class="text-center fw-bold mb-5">Spoznaj nás</h1>
      <b-row>
        <b-col
          v-for="person in team"
          :key="person.id"
          class="col-6 col-md-3">
          <img class="mb-3 rounded-4" :src="person.photo" alt="person">
          <span class="text-gray">{{person.role}}</span>
          <h5 class="mt-4 fw-bold">{{person.name}}</h5>
          <p class="text-gray">{{person.position}}</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Grigor from '../_icons/team/grigor-ayrumyan.jpg'
import Terezka from '../_icons/team/slavomir-terezka.jpg'
import Psycho from '../_icons/team/roman-sekerka.jpg'
import Jan from '../_icons/team/jan-kozlej.jpg'
import { BCol, BRow } from 'bootstrap-vue-3'

export default {
  name: 'team',
  components: {
    BRow,
    BCol
  },
  data () {
    return {
      team: [
        {
          id: 1,
          photo: Grigor,
          role: 'BOARD MEMBER & EXECUTIVE TEAM',
          name: 'Grigor Ayrumyan',
          position: 'Co-founder & Executive Director'
        },
        {
          id: 2,
          photo: Terezka,
          role: 'BOARD MEMBER',
          name: 'Slavomír Terezka',
          position: 'Co-founder'
        },
        {
          id: 4,
          photo: Psycho,
          role: 'BOARD MEMBER & EXECUTIVE TEAM',
          name: 'Roman Sekerka',
          position: 'Co-founder & Tech Garant pre HybridLab a AppsLab'
        },
        {
          id: 4,
          photo: Jan,
          role: 'BOARD MEMBER & EXECUTIVE TEAM',
          name: 'Ján Kožlej',
          position: 'Tech Garant pre GamesLab'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
