<template>
  <div class="gray-social">
    <a href="https://www.youtube.com/c/Modern%C3%A1%C5%A1kola">
      <img src="../_components/_icons/social/youtube-gray.svg" alt="youtube">
    </a>
    <a href="https://open.spotify.com/show/7x8hnF8aX7LYbPsU155dJs">
      <img src="../_components/_icons/social/spotify-gray.svg" alt="spotify">
    </a>
    <a href="https://podcasts.apple.com/sk/podcast/modern%C3%A1-%C5%A1kola/id1594689894" >
      <img src="../_components/_icons/social/podcast-gray.svg" alt="podcast">
    </a>
    <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkLnBvZGJlYW4uY29tL21vZGVybmFza29sYS9mZWVkLnhtbA" >
      <img src="../_components/_icons/social/google-gray.svg" alt="google">
    </a>
  </div>
</template>

<script>
export default {
  name: 'grey-social'
}
</script>

<style lang="sass">
.gray-social
  a
    margin-right: 10px
    &:last-child
      margin-right: 0
</style>
