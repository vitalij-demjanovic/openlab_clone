<template>
  <div class="container">
    <div class="pd-wrapper">
      <h1 class="text-center mb-5 fw-light">
        {{title}}
        <span class="fw-bold">
        {{spanTitle}}
      </span>
      </h1>
      <div class="mt-5 support">
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support1.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support2.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support3.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support4.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support5.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support6.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support7.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support8.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support9.svg" alt="company">
        </figure>
        <figure class="d-flex justify-content-center align-items-center mx-2 my-3 my-md-0">
          <img src="../a-support/_icons/support10.svg" alt="company">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-support',
  props: {
    title: String,
    spanTitle: String
  }
}
</script>

<style lang="sass">
.support
  display: -ms-grid
  display: grid
  grid-template-columns: repeat(5, 1fr)

</style>
