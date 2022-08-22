<template>
  <div class="container">
    <b-row>
      <b-col class="col-2">
        <div class="logo">
          <a href="/">
            <img src="../_icons/openlab-logo.svg" alt="logo">
          </a>
        </div>
      </b-col>
      <b-col>
        <b-nav class="col-8">
          <b-nav-item>Úvod</b-nav-item>
          <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="OpenLab"
            toggle-class="nav-link-custom"
            right
          >
            <b-dropdown-item>HybridLab</b-dropdown-item>
            <b-dropdown-item>GamesLab</b-dropdown-item>
            <b-dropdown-item>AppsLab</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item>Pre učiteľov</b-nav-item>
          <b-nav-item>Partneri</b-nav-item>
        </b-nav>
      </b-col>
      <b-col class="col-2">
        <button class="g-btn">Pridajte sa k nám</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BNavItem, BNavItemDropdown, BDropdownItem, BRow, BCol } from 'bootstrap-vue-3'
export default {
  name: 'Navigation',
  components: { BCol, BRow, BNavItem, BNavItemDropdown, BDropdownItem }
}
</script>

<style lang="sass">
.nav-link
  font-size: 14px
  font-weight: 500 !important
  color: #1a232f !important
  &:hover
    color: #3597ff !important
</style>
