<template>
  <div class="container pd-wrapper">
    <h2 class="fw-light text-center mb-5">
      Nezaujal ťa tento Lab?
      <span class="fw-bold">Pozri si ďalšie</span>
    </h2>
    <b-row>
      <b-col class="d-flex justify-content-center">
        <card
          v-for="option in options"
          :key="option.id"
          :title="option.title"
          :description="option.description"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Card from '@/plugins/app/_components/z-card'
import { BCol, BRow } from 'bootstrap-vue-3'
export default {
  name: 'options',
  components: { BCol, BRow, Card },
  props: {
    options: Array
  }
}
</script>

<style scoped>

</style>
