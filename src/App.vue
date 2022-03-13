<template>
  <div class="App">
    <div id="header">
      <Header @open="open"></Header>
    </div>
    <keep-alive>
      <component :is="openId"></component>
    </keep-alive>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from './component/framework/Header.vue'
import Footer from './component/framework/Footer.vue'
import Blog from './views/Blog.vue'
import Home from './views/Home.vue'
import Git from './views/Git.vue'
import Project from './views/Project.vue'
import Community from './views/Community.vue'
export default {
	name: 'App',
	data() {
		return {
			openId: Home
		}
	},
	components: { Header, Footer, Blog, Home, Git, Project, Community },
	computed: {},
	methods: {
		open(data) {
			this.openId = data
		}
	}
}
</script>
<style lang="scss" scoped>
@import './assets/css/resert.css';
.App {
	width: 100vw;
	height: 100vh;
	padding: 66px 36px 0;
	text-align: left;
	/* color: skyblue; */
	/* font-size: 32px; */
	background-color: antiquewhite;
}
#header {
	position: absolute;
	right: 0;
	top: 0;
}
#footer {
	position: absolute;
	left: 10%;
	bottom: 5%;
	color: black;
	opacity: 0.8;
}
</style>
