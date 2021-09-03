<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/news.png" alt="">   
      <img slot="item-icon-active" src="@/assets/img/tabbar/news_active.png" alt=""> 
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/local">
      <img slot="item-icon" src="@/assets/img/tabbar/bendi.png" alt=""> 
      <img slot="item-icon-active" src="@/assets/img/tabbar/bendi_active.png" alt="">   
      <div slot="item-text">本地新闻</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>