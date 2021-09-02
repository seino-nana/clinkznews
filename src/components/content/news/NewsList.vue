<template>
    <div class="news-list">
      <news-list-item class="news-list-item" v-for="item in news" :key="item.index" :item="item"/>  
    </div>  
</template>

<script>
import NewsListItem from './NewListItem.vue'

export default {
  name: 'GoodsList',
  props: {
    news: {
      type: Array,
      default() {
         return []
      }
    }
  },
  components: {
    NewsListItem
  }
}
</script>

<style scoped>
.news-list-item {
  height: 120px;
  margin: 5px;
  background-color: #fff;
  border-radius: 10px;
}
</style>