<template>
  <div>
    <b-row>
      <b-col class="col-6">
        <h5>Prihláste sa do nášho newslettra a budete mať</h5>
        <span>čerstvé informácie o živote v OpenLabe.</span>
      </b-col>
      <b-col class="col-6">
        <label>
          <input type="email" placeholder="Sem napíš tvoj e-mail">
          <button>
            <img src="../_newsletter/_icons/send-message.png" alt="send">
          </button>
        </label>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'newsletter',
  components: { BRow, BCol }
}
</script>

<style scoped>

</style>
