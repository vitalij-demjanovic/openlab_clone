<template>
  <div class="container mt-5 mb-5">
    <b-row class="align-items-center">
      <b-col class="col-2">
        <div class="logo">
          <a href="/">
            <img src="../_icons/openlab-logo.svg" alt="logo">
          </a>
        </div>
      </b-col>
      <b-col class="col-8">
        <nav>
          <ul class="nav-links d-flex">
            <li class="link">
              <router-link to="/">Úvod</router-link>
            </li>
            <li class="link">OpenLab</li>
            <li class="link">
              <router-link to="/pre-ucitelov">Pre učiteľov</router-link>
            </li>
            <li class="link">
              <router-link to="/partneri">Partneri</router-link>
            </li>
            <li class="link">
              <router-link to="/moderna-skola">Moderná škola</router-link>
            </li>
          </ul>
        </nav>
      </b-col>
      <b-col class="col-2">
        <button class="g-btn">Pridajte sa k nám</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
export default {
  name: 'Navigation',
  components: { BCol, BRow }
}
</script>

<style lang="sass">
.nav-links
  margin-bottom: 0 !important
  font-weight: 600 !important
  color: #1a232f !important

.link
  font-size: 14px
  margin-right: 1.5rem
  cursor: pointer
  a
    color: #1a232f
  &:hover
    color: #3597ff !important
  &:last-child
    margin-right: 0
</style>
