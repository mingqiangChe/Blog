<template>
  <div class="App">
    <div id="header">
      <Header @open="open"></Header>
    </div>
    <keep-alive>
      <component :is="openId"></component>
    </keep-alive>
  </div>
</template>
<script>
import Header from './component/framework/Header.vue'
import Blog from './views/Blog.vue'
import Home from './views/Home.vue'
import Git from './views/Git.vue'
import Project from './views/Project.vue'
import Community from './views/Community.vue'
import ToolWebsite from './views/ToolWebsite.vue'
import File from './views/File.vue'
export default {
	name: 'App',
	data() {
		return {
			openId: Blog
		}
	},
	components: { Header, Blog, Home, Git, Project, Community, ToolWebsite, File },
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
	/* width: 100vw; */
	min-height: 100vh;
	padding: 66px 36px 0;
	text-align: left;
	/* color: skyblue; */
	/* font-size: 32px; */
	background-color: antiquewhite;
}
#header {
	width: 100vw;
	position: fixed;
	right: 0;
	top: 0;
}
</style>
