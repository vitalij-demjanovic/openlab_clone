<template>
  <div>
    <a class="social" href="https://www.youtube.com/c/Modern%C3%A1%C5%A1kola" >
      <img src="../_components/_icons/social/youtube-color.svg" alt="youtube">
    </a>
    <a class="social" href="https://open.spotify.com/show/7x8hnF8aX7LYbPsU155dJs" >
      <img src="../_components/_icons/social/spotify.svg" alt="spotify">
    </a>
    <a class="social" href="https://podcasts.apple.com/sk/podcast/modern%C3%A1-%C5%A1kola/id1594689894" >
      <img src="../_components/_icons/social/podcast.svg" alt="podcast">
    </a>
    <a class="social" href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL21vZGVybmFza29sYS9mZWVkLnhtbA" >
      <img src="../_components/_icons/social/google.svg" alt="google podcast">
    </a>
  </div>
</template>

<script>
export default {
  name: 'color-social'
}
</script>

<style lang="sass">
.social
  margin-right: 10px
  &:last-child
    margin-right: 0
</style>
