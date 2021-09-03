<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      // Scroll打开点击事件  
      click: true,
      // 默认关闭上拉加载更多
      pullUpLoad: this.pullUpLoad
    })

    // 监听上拉事件
    this.scroll.on('pullingUp', () => {
      // 发出事件
      this.$emit('pullingUp')
    })
  },
  methods: {
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style>

</style>