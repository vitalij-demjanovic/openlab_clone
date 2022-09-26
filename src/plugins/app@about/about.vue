<template>
<div>
<!-- Úvod stránky -->
  <a-about-main/>
<!-- Prečo OpenLab -->
  <a-why-opnelab/>
<!-- Naša vízia -->
  <a-vision/>
<!-- Možnosti štúdia -->
  <option-study/>
<!-- Školy -->
  <a-schools/>
<!-- Študovať odbor -->
  <a-study/>
<!-- Pripoj sa k nám -->
  <join-us/>
<!-- Pripojte sa -->
  <a-about-slider/>
<!-- Študentské projekty -->
  <a-student-projects/>
<!-- Čím sme výnimoční? -->
  <exceptional/>
<!-- Náš tím -->
  <team/>
<!-- Ľudia ľuďom -->
  <a-people-help/>
<!-- Kto stojí za Openlabom? -->
  <a-who-standing/>
<!-- Instagram feed -->
  <a-instagram-feed/>
<!-- Moderná škola -->
  <a-modern-school/>
<!-- Podporujú -->
  <a-support
    title="Ďakujeme za"
    span-title="podporu v roku 2021!"
  />
<!-- Newletter -->
  <a-newsletter/>
</div>
</template>

<script>
import OptionStudy from '@/plugins/app@about/_components/a-option-study'
import JoinUs from '@/plugins/app@about/_components/a-join-us'
import Exceptional from '@/plugins/app/_components/a-exceptional'
import Team from '@/plugins/app@about/_components/a-team'
import ASupport from '@/plugins/app/_components/a-support/a-support'
import ANewsletter from '@/plugins/app/_components/a-newsletter/a-newsletter'
import AInstagramFeed from '@/plugins/app/_components/a-instagram-feed/a-instagram-feed'
import AAboutMain from '@/plugins/app@about/_components/a-about-main'
import AWhyOpnelab from '@/plugins/app@about/_components/a-why-opnelab'
import AVision from '@/plugins/app@about/_components/a-vision'
import ASchools from '@/plugins/app@about/_components/a-schools'
import AStudy from '@/plugins/app@about/_components/a-study'
import AStudentProjects from '@/plugins/app@about/_components/a-student-projects'
import APeopleHelp from '@/plugins/app@about/_components/a-people-help'
import AWhoStanding from '@/plugins/app@about/_components/a-who-standing'
import AModernSchool from '@/plugins/app/_components/a-modern-school/a-modern-school'
import AAboutSlider from '@/plugins/app@about/_components/a-about-slider'

export default {
  name: 'MainPage',
  components: { AAboutSlider, AStudentProjects, AModernSchool, AWhoStanding, APeopleHelp, AStudy, ASchools, AVision, AWhyOpnelab, AAboutMain, AInstagramFeed, ANewsletter, ASupport, Team, Exceptional, JoinUs, OptionStudy }
}
</script>

<style lang="sass">
.bg-blue
  background: #3597ff
  color: #ffffff

.title-span
  font-size: 2.5rem
  font-weight: 500

.item
  width: 233px
  height: 183px
  border-radius: 4px

.count
  font-size: 90px

.type
  font-size: 18px

.vision
  &:nth-child(1)
    color: #5b94d7
    background-color: rgba(221, 236, 251, 0.4)
  &:nth-child(2)
    color: #5cc19a
    background-color: rgba(156, 238, 204, 0.4)
  &:nth-child(3)
    color: #dbca68
    background-color: rgba(238, 226, 156, 0.4)
  &:nth-child(4)
    color: #b95e73
    background-color: rgba(238, 156, 156, 0.4)

.school-address
  width: 80%
  font-size: 1.25rem
  font-weight: 700

.heading
  margin-bottom: -40px
  font-size: 62px
  color: rgba(209, 220, 231, 0.3)
  z-index: 0

.text-border
  position: relative
  &:after
    content: ''
    position: absolute
    bottom: -25px
    left: 0
    width: 50px
    height: 1px
    background-color: rgba(86, 107, 141, 0.5)

.text-border-w
  @extend .text-border
  &:after
    background: #ffffff

</style>
