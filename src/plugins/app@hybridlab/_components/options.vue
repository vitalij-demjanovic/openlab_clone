<template>
  <div>
    <h2>Nezaujal ťa tento Lab? Pozri si ďalšie</h2>
    <div>
      <card
        v-for="option in options"
        :key="option.id"
        :title="option.title"
        :description="option.description"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/plugins/app/_components/card'
export default {
  name: 'options',
  components: { Card },
  data () {
    return {
      options: [
        {
          id: 1,
          title: 'GamesLab',
          description: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný'
        },
        {
          id: 2,
          title: 'AppsLab',
          description: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
