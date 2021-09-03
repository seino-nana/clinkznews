<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">每日新闻</div></nav-bar>
    <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
    <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            :pull-up-load= "true"
            @pullingUp="loadMore"
            >
      <news-list :news="showNews"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'
import NewsList from '@/components/content/news/NewsList'
import Scroll from '@/components/common/scroll/Scroll'

// 网络请求
import { getHeadline,
         getSocial,
         getInternet,
         getSport,
         getWorld,
         getAuto,
         getTravel
        } from '@/network/home'

export default {
  name: 'Home',
  data(){
    return {
      titles: ['头条','社会','科技','体育','国际','汽车','旅游'],
      news: {
        headline: {page: 0,list: []},
        social: {page: 0,list: []},
        internet: {page: 0,list: []},
        sport: {page: 0,list: []},
        world: {page: 0,list: []},
        auto: {page: 0,list: []},
        travel: {page: 0,list: []},
      },
      currentType: 'headline',
      itemImageListener: null
    }
  },
  components: {
    NavBar,
    TabControl,
    NewsList,
    Scroll
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
    // 获取国际新闻数据
    this._getWorld()
    // 获取汽车数据
    this._getAuto()
    // 获取旅游数据
    this._getTravel()
  },
  mounted() {
    this.$bus.$on('imageLoad',this.$refs.scroll.refresh)
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
          this.currentType = 'world'
          break;
        case 5:
          this.currentType = 'auto'
          break;
        case 6:
          this.currentType = 'travel'
      }
      // 每次切换回到顶部
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    
    // 上拉加载更多
    loadMore() {
      switch(this.currentType) {
        case 'headline':
          this._getHeadline()
          break;
        case 'social':
          this._getSocial()
          break;
        case 'internet':
          this._getInternet()
          break;
        case 'sport':
          this._getSport()
          break;
        case 'world':
          this._getWorld()
          break;
        case 'auto':
          this._getAuto()
          break;
        case 'travel':
          this._getTravel()
          break;
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
        this.$refs.scroll.finishPullUp()
      })
    },
    // 社会
    _getSocial() {
      const page = this.news.social.page + 1
      getSocial(page).then(res => {
        this.news.social.list.push(...res.newslist)
        this.news.social.page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 科技
    _getInternet() {
      const page = this.news.internet.page + 1
      getInternet(page).then(res => {
        this.news.internet.list.push(...res.newslist)
        this.news.internet.page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 体育
    _getSport() {
      const page = this.news.sport.page + 1
      getSport(page).then(res => {
        this.news.sport.list.push(...res.newslist)
        this.news.sport.page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 国际
    _getWorld() {
      const page = this.news.world.page + 1
      getWorld(page).then(res => {
        this.news.world.list.push(...res.newslist)
        this.news.world.page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 汽车
    _getAuto() {
      const page = this.news.auto.page + 1
      getAuto(page).then(res => {
        this.news.auto.list.push(...res.newslist)
        this.news.auto.page += 1
        this.$refs.scroll.finishPullUp()
      })
    },
    // 旅游
    _getTravel() {
      const page = this.news.travel.page + 1
      getTravel(page).then(res => {
        this.news.travel.list.push(...res.newslist)
        this.news.travel.page += 1
        // 上拉加载更多的请求
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
  background-color: #eee;
}
.home-nav {
  font-size: 18px;
  color: #fff;
  background-color: var(--color-high-text);
}

.content {
  overflow: hidden;
  position: absolute;
  top: 88px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
