<template>
  <div class="App">
      <router-link to="/Home">go Home</router-link>
      <router-link to="/About">go About</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {};
  },
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
