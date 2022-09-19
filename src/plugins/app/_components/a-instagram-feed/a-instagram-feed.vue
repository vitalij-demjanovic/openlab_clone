<template>
<div class="feed-greed" style="gap: 0px; grid-template-columns: repeat(6, auto);">
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed1.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed2.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed3.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed4.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed5.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
  <div class="position-relative">
    <img class="w-100" style="height: 290px" src="../_icons/instagram-feed/feed6.png" alt="in">
    <div class="feed-cover">
      <img class="feed-in" src="../_icons/instagram-feed/instagram.png" alt="in">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'a-instagram-feed'
}
</script>

<style lang="sass">
.feed-greed
  display: grid
  grid-auto-flow: dense

.feed-cover
  position: absolute
  top: 0
  width: 100%
  height: 100%
  &:hover
    background: rgba(0, 0, 0, 0.5)
    cursor: pointer
    .feed-in
      display: block !important

.feed-in
  display: none
  position: absolute
  bottom: 20px
  right: 20px
  width: 25px
  height: 25px
</style>
