<template>
  <div class="container container-md mt-3 mb-3">
    <div class="d-flex align-items-center justify-content-center border-bott pb-3 mb-3 d-none d-lg-flex">
      <p class="text-gray mb-0">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
      <div class="discord-community d-flex align-items-center">
        OPENLAB COMMUNITY
        <z-icon class="space-ma" iconName="discord"/>
      </div>
    </div>
    <b-row class="align-items-center">
      <b-col class="col-5 col-lg-2">
        <div class="logo">
          <a href="/">
            <img src="../_components/_icons/openlab-logo.svg" alt="logo">
          </a>
        </div>
      </b-col>
      <b-col class="col-lg-7 col-md-5 d-none d-lg-block">
        <nav>
          <ul class="nav-links d-flex">
            <li class="link">
              <router-link to="/">Úvod</router-link>
            </li>
            <li class="link-submenu position-relative">
              OpenLab
              <z-icon icon-name="arrow-down"/>
              <ul class="submenu position-absolute">
                <li class="submenu-item mb-2">
                  <router-link to="/hybridlab">HybridLab</router-link>
                </li>
                <li class="submenu-item mb-2">
                  <router-link to="/gameslab">GamesLab</router-link>
                </li>
                <li class="submenu-item">
                  <router-link to="/applab">AppsLab</router-link>
                </li>
              </ul>
            </li>
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
      <b-col class="col-lg-3 d-flex justify-content-end">
        <button class="g-btn d-none d-lg-block">Pridajte sa k nám</button>
        <button
          class="mobile-btn d-block d-lg-none"
          @click="toggleShow"
        >
          <z-icon icon-name="list"/>
        </button>
      </b-col>
    </b-row>
    <div v-if="show" :class="['mobile-menu', { show }]">
      <button
        class="d-flex justify-content-end m-2"
        @click="toggleShow"
      >
        <z-icon icon-name="close"/>
      </button>
      <ul class="nav-links mt-5 text-center">
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/">Úvod</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/hybridlab">HybridLab</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/gameslab">GamesLab</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/applab">AppsLab</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/pre-ucitelov">Pre učiteľov</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/partneri">Partneri</router-link>
        </li>
        <li
          class="link mb-4"
          @click="toggleShow"
        >
          <router-link to="/moderna-skola">Moderná škola</router-link>
        </li>
      </ul>
      <div class="p-2 d-flex justify-content-center">
        <button class="btn-lg g-btn">Pridajte sa k nám</button>
      </div>
      <div class="p-3 m-auto">
        <p class="mb-2 px-4 lh-1 text-center">Ak máš záujem študovať spolu s nami, sme tu pre teba…</p>
        <div class="discord-community m-0 mt-3 d-flex align-items-center justify-content-center fs-6">
          <p class="mb-0">OPENLAB COMMUNITY</p>
          <z-icon class="space-ma" iconName="discord"/>
        </div>
      </div>
    </div>
    <div
      :class="['overlay', { show }]"
      @click="toggleShow"
    />
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'
export default {
  name: 'Navigation',
  components: { ZIcon, BCol, BRow },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    }
  }
}
</script>

<style lang="sass">
.border-bott
  border-bottom: 1px solid #d7eaff !important

.discord-community
  font-size: 12px
  padding: 6px 10px
  margin-left: 60px
  border-radius: 50rem
  color: #989ca2
  background-color: rgba(152, 156, 162, 0.15)
  border-color: rgba(152, 156, 162, 0.15)
  cursor: pointer
  transition: all 0.2s ease
  &:hover
    color: #000000

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

.link-submenu
  font-size: 14px
  margin-right: 1.5rem
  cursor: pointer
  &:hover
    .submenu
      display: block

.submenu
  display: none
  top: 100%
  padding: 0.5rem 1rem 0 0
  z-index: 1
  font-weight: 500
  background: #ffffff
  border-radius: 6px
  a
    color: #1a232f !important
    transition: all 0.3s ease
    &:hover
      color: #3597ff !important

.submenu-item
  padding: 0.25rem 1rem !important

.mobile-menu
  display: flex
  flex-direction: column
  position: absolute
  top: 0
  right: -280px
  z-index: 99
  width: 0
  min-height: 100vh
  -webkit-transition: right 0.3s, width 0s
  transition: right 0.3s, width 0s
  background: #ffffff
  &.show
    width: 280px
    right: 0
  a
    font-size: 16px !important

.overlay
  display: none
  background-color: rgba(0, 0, 0, 0.6)
  bottom: 0
  left: 0
  position: fixed
  right: 0
  top: 0
  z-index: 49
  -webkit-animation: fadeIn 1s
  animation: fadeIn 1s
  &.show
    display: block

</style>
