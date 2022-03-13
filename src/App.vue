<template>
  <div class="App">
    <div id="header">
        <Header></Header>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> 
    <div id="footer">
      <Footer></Footer>
      </div> 
  </div>
</template>
<script>
import Header from './component/framework/Header.vue'
import Footer from './component/framework/Footer.vue';
export default {
  name: 'App',
  data() {
    return {};
  },
  components:{ Header, Footer },
  computed: {
   
  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
@import "./assets/css/resert.css";
.App {
  width: 100vw;
  height: 100vh;
  text-align: left;
  /* color: skyblue; */
  /* font-size: 32px; */
  background-color: antiquewhite;
  
}
#header{
  position: absolute;
  right: 0;
  top: 0;
}
#footer{
  position: absolute;
  left: 10%;
  bottom: 5%;
  color: black;
  opacity: 0.8;
}
</style>
