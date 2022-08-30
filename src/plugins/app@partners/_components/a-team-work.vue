<template>
  <div class="pd-wrapper">
    <h1 class="text-center mb-5">
      <span class="fw-bold">Staňte sa</span>
      našim partnerom
    </h1>
    <div class="d-flex">
      <div
        class="card-body card-body-team px-4 pt-4 pb-5 px-xl-5"
        v-for="partner in partnerType"
        :key="partner.id"
      >
        <h5>{{partner.title}}</h5>
        <p>{{partner.description}}</p>
        <div class="card-body-team_item">
          <span>Zobraziť benefity</span>
          <z-icon class="space-left" iconName="arrow-right"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZIcon from '@/plugins/app/_components/z-icon/z-icon'

export default {
  name: 'team-work',
  components: { ZIcon },
  data () {
    return {
      selectTab: 1,
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

<style lang="sass">
.card-body-team
  .card-body-team_item
    color: #3597ff !important
  &.active
    background: #3597ff !important
    color: #ffffff !important
    .card-body-team_item
      color: #ffffff !important

.space-left
  margin-left: 5px
</style>
