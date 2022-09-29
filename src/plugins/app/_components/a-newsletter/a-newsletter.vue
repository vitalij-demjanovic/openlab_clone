<template>
  <div class="container">
    <div class="newsletter rounded px-3 px-lg-5 mb-5 py-5 py-md-3 p-lg-5">
      <b-row class="align-items-center">
        <b-col class="col-12 col-md-6">
          <h5>
            Prihláste sa do nášho newslettra a budete mať<br>
            <span class="fw-bold">čerstvé informácie o živote v OpenLabe.</span>
          </h5>
        </b-col>
        <b-col class="col-12 col-md-6">
          <label class="newsletter-label px-3 py-2 rounded d-flex justify-content-between">
            <input type="email" placeholder="Sem napíš tvoj e-mail">
            <button>
              <img class="btn-send" src="../a-newsletter/_icons/send-message.png" alt="send">
            </button>
          </label>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'

export default {
  name: 'a-newsletter',
  components: { BRow, BCol }
}
</script>

<style lang="sass">
.newsletter
  background: #d7eaff

.newsletter-label
  width: 100%
  background: #ffffff !important
  input::placeholder
    color: #212529
    font-weight: 400
.btn-send
  width: 24px
  height: 24px
</style>
