<template>
  <div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h1 class="title">Poď študovať AppsLab a nauč sa tvoriť softvérové aplikácie</h1>
          <p>
            Technológie používané na vývoj softvéru predstavujú aktuálne veľkú časť technologického priemyslu.
            Počas štúdia v OpenLabe sa preto naučíš ako vytvoriť softvérovú aplikáciu v mobile a na webe s použitím populárnych programovacích jazykov ako Java, C#, Angular, naučíš sa princípy objektovo orientovaného programovania a skúsiš si aj prácu s databázou.
          </p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@applab/_icons/main-appslab.png" alt="applab">
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col class="col-6">
          <h2>Načo je zameraný AppsLab?</h2>
          <p>
            Základnou profiláciou je vývoj softvérových aplikácií, v ktorej sa budeš ako študent AppsLabu rozvíjať. S pomocou LabMastrov sa budeš učiť programátorskému spôsobu uvažovania, trénovať schopnosť klásť správne otázky Google, spolužiakom ale aj sebe.
            Takisto si prejdeš princípmi objektovo orientovaného programovania. V 2. ročníku sa budeš zameriavať viac na mobilné aplikácie, v 3 a 4. prejdeš na webové aplikácie. Počas štúdia s OpenLabom budeš mať príležitosť si vyskúšať okrem populárnych programovacích jazykov ako Java, C#, Angular, aj prácu s databázou. Dôraz sa kladie tiež na grafickú stránku aplikácii a moderný dizajn.
            Po skončení štúdia, ako absolvent budeš uplatniteľný v technologických firmách napr. ako software developer, môžeš si skúsiť založiť vlastné podnikanie alebo pokračovať vysokoškolským vzdelaním.
          </p>
        </b-col>
        <b-col class="col-6">
          <img src="../app@applab/_icons/appslab.svg" alt="appdlab">
        </b-col>
      </b-row>
    </div>
    <div>
      <b-row>
        <b-col class="col-6">
          <img src="../app@applab/_icons/appslab-person.png" alt="person">
        </b-col>
        <b-col class="col-6">
          <h2>Pre koho je AppsLab určený?</h2>
          <p>
            AppsLab je určený pre úplných začiatočníkov, ktorí sa chcú venovať vývoju softvérových aplikácii
            na mobile alebo webe, chcú vedieť programovať v najrozšírenejších programovacích jazykoch ako Java, C# alebo Angular a následne
            sa špecializovať v odvetví napr. ako software developer.
          </p>
        </b-col>
      </b-row>
    </div>
    <div>
      <h2>Kde môžeš študovať HybridLab?</h2>
      <b-row>
        <b-col class="col-6">
          <span>V študijnom odbore</span>
          <h3>Programovanie digitálnych technológií</h3>
          <p>Tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch.</p>
          <button>Chcem vedieť viac o odbore</button>
        </b-col>
        <b-col class="col-6">
          <img src="../app@applab/_icons/school2.png" alt="school">
          <h5>Stredná Priemyselná Škola Informačných Technológií</h5>
          <div>
            <span>Nábrežná 1325, 024 01 Kysucké Nové Mesto</span>
            <a href="https://www.spsknm.sk/">www.spsknm.sk/</a>
          </div>
        </b-col>
      </b-row>
    </div>
    <div>
      <h2>S akými technológiami budeš pracovať?</h2>
      <b-row>
        <b-col
          v-for="technology in technologies"
          :key="technology.id"
        >
          <technology-card
            :image="technology.image"
            :title="technology.title"
            :description="technology.description"
          />
        </b-col>
      </b-row>
    </div>
    <div>
      <exceptional/>
    </div>
    <div>
      Slider
    </div>
    <div>
      <school-year/>
    </div>
    <div>
      <students/>
    </div>
    <div>
      <options
        :options="options"
      />
    </div>
    <div>
      <discort/>
    </div>
    <div>
      Instagram Feed
    </div>
    <div>
      <modern-school/>
    </div>
    <div>
      <support/>
    </div>
    <div>
      <newsletter/>
    </div>
  </div>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue-3'
import AngularIcon from '@/plugins/app@hybridlab/_icons/icon-angular.svg'
import HtmlIcon from '../app@applab/_icons/technologies-html.png'
import CSSIcon from '../app@applab/_icons/technologies-css.png'
import CSharpIcon from '../app@applab/_icons/technologies-csharp.png'
import SpringIcon from '../app@applab/_icons/technologies-spring.png'
import HibernateIcon from '../app@applab/_icons/technologies-hibernate.png'
import TechnologyCard from '@/plugins/app/_components/z-technology-card'
import Exceptional from '@/plugins/app/_components/a-exceptional'
import SchoolYear from '@/plugins/app@main/_components/a-school-year'
import Students from '@/plugins/app/_components/a-students'
import Options from '@/plugins/app@hybridlab/_components/z-options'
import Discort from '@/plugins/app/_components/a-discort'
import ModernSchool from '@/plugins/app/_components/_modern-school/a-modern-school'
import Support from '@/plugins/app/_components/_support/a-support'
import Newsletter from '@/plugins/app/_components/_newsletter/a-newsletter'

export default {
  name: 'app-lab',
  components: { Newsletter, Support, ModernSchool, Discort, Options, Students, SchoolYear, Exceptional, TechnologyCard, BRow, BCol },
  data () {
    return {
      technologies: [
        {
          id: 1,
          image: AngularIcon,
          title: 'Angular',
          description: 'Angular je bezplatný a open source webový aplikačný rámec založený na TypeScript.'
        },
        {
          id: 2,
          image: CSSIcon,
          title: 'CSS',
          description: 'CSS je jazyk šablóny štýlov, ktorý sa používa na popis prezentácie dokumentu napísaného v HTML alebo XML. CSS popisuje, ako by sa prvky mali vykresliť na obrazovke, na papieri, v reči alebo na iných médiách.'
        },
        {
          id: 3,
          image: HtmlIcon,
          title: 'HTML',
          description: 'HTML je značkovací jazyk určený na vytváranie webových stránok a iných informácií zobraziteľných vo webovom prehliadači'
        },
        {
          id: 4,
          image: CSharpIcon,
          title: 'C Sharp',
          description: 'C Sharp je objektovo-orientovaný programovací jazyk používaný na vývoj desktopových aplikácií, webových aplikácií a webových služieb.'
        },
        {
          id: 5,
          image: SpringIcon,
          title: 'Spring',
          description: 'Spring je open-source aplikačný framework, ktorý poskytuje podporu infraštruktúry pre vývoj aplikácií Java.'
        },
        {
          id: 6,
          image: HibernateIcon,
          title: 'Hibernate',
          description: 'Hibernate je objektovo-relačný mapovací nástroj pre programovací jazyk Java. Poskytuje framework pre mapovanie objektovo orientovaného modelu domény na relačné databázy.'
        }
      ],
      options: [
        {
          id: 1,
          title: 'HybridLab',
          description: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.'
        },
        {
          id: 2,
          title: 'GamesLab',
          description: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný dizajn.'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
</style>
