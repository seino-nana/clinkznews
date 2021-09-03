<template>
  <div id="local">
    <nav-bar class="nav-bar"><div slot="center">{{local}}新闻</div></nav-bar>
    <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            :pull-up-load= "true"
            @pullingUp="loadMore"
            >
      <news-list :news="localNews.list"/>
    </scroll>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import NewsList from '@/components/content/news/NewsList'
import Scroll from '@/components/common/scroll/Scroll'
// 网络请求
import {getLocal} from '@/network/local.js'

export default {
  name: 'Local',
  components: {
    NavBar,
    NewsList,
    Scroll
  },
  data() {
    return {
      localNews: {
        page: 0,list: []
      },
      local: '长沙'
    }
  },
  created() {
    this._getLocal()
  },
  mounted() {
    this.$bus.$on('imageLoad',this.$refs.scroll.refresh)
  },
  methods: {
    loadMore() {
      this._getLocal()
    },
    _getLocal() {
      const page = this.localNews.page + 1
        getLocal(page).then(res => {
        this.localNews.list.push(...res.newslist)
        this.localNews.page += 1
        // 上拉加载更多的请求
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
#local {
  position: relative;
  height: 100vh;
}
.nav-bar {
  font-size: 18px;
  color: #fff;
  background-color: blue;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>