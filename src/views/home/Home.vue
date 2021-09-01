<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">每日新闻</div></nav-bar>
    <tab-control :titles="titles"></tab-control>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabcontrol/TabControl'

import {getHeadline} from '@/network/home'

export default {
  name: 'Home',
  data(){
    return {
      titles: ['头条','精选','娱乐','汽车','运动']
    }
  },
  components: {
    NavBar,
    TabControl
  },
  created() {
    getHeadline().then(res => {
      console.log(res);
    })
  },
  methods: {
    
  }
}
</script>
<style scoped>
.home-nav {
  text-align: center;
    font-size: 18px;
    color: #fff;
    background-color: var(--color-high-text);
}

</style>
