<template>
  <div class="App">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>  
  </div>
</template>
<script>
import Header from './component/framework/Header.vue'
export default {
  name: 'App',
  data() {
    return {};
  },
  components:{ Header},
  computed: {
   
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.App {
  text-align: center;
  color: skyblue;
  font-size: 28px;
}
</style>
