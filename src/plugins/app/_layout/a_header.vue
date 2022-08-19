<template>
  <b-nav>
    <b-nav-item>LOGO</b-nav-item>
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
    <b-button>Moderná škola</b-button>
  </b-nav>
</template>

<script>
import { BButton, BNavItem, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue-3'
export default {
  name: 'Navigation',
  components: { BButton, BNavItem, BNavItemDropdown, BDropdownItem }
}
</script>

<style scoped>

</style>
