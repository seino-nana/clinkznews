<template>
<div class="tab-control">
  <div class="tab-control-item" v-for="(item,index) in titles" 
                                :key="index"
                                :class="{active:index === currentIndex}"
                                @click="tabClick(index)"
                                >
    {{item}}
  </div>
</div>  
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick',index)
    }   
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #eee;
}
.tab-control-item {
  flex: 1;
}
.active {
  font-weight: 700;
  font-size: 20px;
  color: var(--color-tint);
}
</style>

