<template>
  <div class="news-list-item">
    <a :href="item.url">
      <div class="news-info">
        <div class="title">{{item.title}}</div>
        <span class="ctime">{{item.ctime}}</span>
        <span class="source">{{item.source}}</span>
      </div>
      <img v-lazy="item.picUrl" alt="" @load="imageLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: 'NewsListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 通过事件总线
    imageLoad() {
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
.news-list-item a {
  position: relative;
  display: flex;
  padding: 5px;
  overflow: hidden;
}
.news-info {
  width: 220px;
}
.title {
    padding-top: 5px;
}
.ctime,.source {
  font-size: 14px;
}
.ctime {
  position: absolute;
  left: 5px;
  bottom: 0;
  font-size: 14px;
}
.source {
  position: absolute;
  left: 5px;
  bottom: 18px;
  
}

.news-list-item img{
  flex: 1;
  width: 80px;
  height: 110px;
  padding: 5px;
  border-radius: 12px;
}

</style>