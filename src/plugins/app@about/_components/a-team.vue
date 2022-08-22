<template>
  <div>
    <h1>Spoznaj nás</h1>
    <b-row>
      <b-col
        v-for="person in team"
        :key="person.id"
        class="col-3">
        <img :src="person.photo" alt="person">
        <span>{{person.role}}</span>
        <h5>{{person.name}}</h5>
        <p>{{person.position}}</p>
      </b-col>
    </b-row>
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
