<template>
  <div>
    <h1>Staňte sa našim partnerom</h1>
    <div
      v-for="partner in partnerType"
      :key="partner.id"
    >
      <h5>{{partner.title}}</h5>
      <p>{{partner.description}}</p>
      <div>
        <span>Zobraziť benefity</span>
        <arrow-right/>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from '@/plugins/app/_components/arrow-right'

export default {
  name: 'team-work',
  components: { ArrowRight },
  data () {
    return {
      partnerType: [
        {
          id: 1,
          title: 'Tech Partner',
          description: 'Prioritný prístup k talentom a dennému vyučovaniu.'
        },
        {
          id: 1,
          title: 'Project Partner',
          description: 'Prístup k projektovým tímom s možnosťou robiť prototypy.'
        },
        {
          id: 1,
          title: 'Marketing Partner',
          description: 'Marketingová podpora na eventoch, sociálnych sieťach a v médiách.'
        },
        {
          id: 1,
          title: 'HR Partner',
          description: 'Prístup k talentom dostupných mimo prioritný výber tech partnerov.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
