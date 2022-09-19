<template>
  <div class="container">
    <b-row class="align-items-center justify-content-between">
      <b-col class="col-lg-5 col-xl-4">
        <h1>
          Kto stojí <br>
          <span class="fw-bold">za Openlabom?</span>
        </h1>
      </b-col>
      <b-col class="col-lg-7">
        <div>
          <partners/>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue-3'
import Partners from '@/plugins/app/_components/a-partners'
export default {
  name: 'a-who-standing',
  components: { Partners, BCol, BRow }
}
</script>

<style scoped>

</style>
