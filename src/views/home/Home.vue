<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">每日新闻</div></nav-bar>
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <news-list :news="showNews"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import NewsList from '@/components/content/news/NewsList'

// 网络请求
import { getHeadline,
         getSocial,
         getInternet,
         getSport,
         getMovie,
         getAuto,
         getTravel
        } from '@/network/home'

export default {
  name: 'Home',
  data(){
    return {
      titles: ['头条','社会','科技','体育','影视','汽车','旅游'],
      news: {
        headline: {page: 0,list: []},
        social: {page: 0,list: []},
        internet: {page: 0,list: []},
        sport: {page: 0,list: []},
        movie: {page: 0,list: []},
        auto: {page: 0,list: []},
        travel: {page: 0,list: []},
      },
      currentType: 'headline'
    }
  },
  components: {
    NavBar,
    TabControl,
    NewsList
  },
  computed: {
      showNews() {
        return this.news[this.currentType].list
      }
    },
  created() {
    // 获取头条数据
    this._getHeadline()
    // 获取军事数据
    this._getSocial()
    // 获取科技数据
    this._getInternet()
    // 获取体育数据
    this._getSport()
    // 获取影视数据
    this._getMovie()
    // 获取汽车数据
    this._getAuto()
    // 获取旅游数据
    this._getTravel()
  },
  methods: {
    /*
      事件监听相关
    */
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'headline'
          break;
        case 1:
          this.currentType = 'social'
          break;
        case 2:
          this.currentType = 'internet'
          break;
        case 3:
          this.currentType = 'sport'
          break;
        case 4:
          this.currentType = 'movie'
          break;
        case 5:
          this.currentType = 'auto'
          break;
        case 6:
          this.currentType = 'travel'
      }
    },
    
    /*
      网络请求相关
    */
    // 头条
    _getHeadline() {
      const page = this.news.headline.page + 1
      getHeadline(page).then(res => {
        this.news.headline.list.push(...res.newslist)
        this.news.headline.page += 1
      })
    },
    // 军事
    _getSocial() {
      const page = this.news.social.page + 1
      getSocial(page).then(res => {
        this.news.social.list.push(...res.newslist)
        this.news.social.page += 1
      })
    },
    // 科技
    _getInternet() {
      const page = this.news.internet.page + 1
      getInternet(page).then(res => {
        this.news.internet.list.push(...res.newslist)
        this.news.internet.page += 1
      })
    },
    // 体育
    _getSport() {
      const page = this.news.sport.page + 1
      getSport(page).then(res => {
        this.news.sport.list.push(...res.newslist)
        this.news.sport.page += 1
      })
    },
    // 影视
    _getMovie() {
      const page = this.news.movie.page + 1
      getMovie(page).then(res => {
        this.news.movie.list.push(...res.newslist)
        this.news.movie.page += 1
      })
    },
    // 汽车
    _getAuto() {
      const page = this.news.auto.page + 1
      getAuto(page).then(res => {
        this.news.auto.list.push(...res.newslist)
        this.news.auto.page += 1
      })
    },
    // 旅游
    _getTravel() {
      const page = this.news.travel.page + 1
      getTravel(page).then(res => {
        this.news.travel.list.push(...res.newslist)
        this.news.travel.page += 1
      })
    }
  }
}
</script>
<style scoped>
#home {
  background-color: #ddd;
}
.home-nav {
  text-align: center;
  font-size: 18px;
  color: #fff;
  background-color: var(--color-high-text);
}

</style>
