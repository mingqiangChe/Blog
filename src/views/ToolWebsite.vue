<!-- 工具网站 -->
<template>
  <div class='main'>
    <div class="ceng1">
      <h1>技术栈</h1>
      <el-button type="primary" @click="jumpVue">vue</el-button>
      <el-button type="success" @click="jumpReact">react</el-button>
      <el-button type="info" @click="jumpAngular">angular</el-button>
    </div>
    <div class="ceng1">
      <h1>打包工具</h1>
      <el-button type="primary" @click="jumpWebpack">webpack</el-button>
      <el-button type="success" @click="jumpVite">vite</el-button>
    </div>
    <div class="ceng1">
      <h1>依赖工具</h1>
      <el-button type="primary" @click="jumpNpm">npm</el-button>
      <el-button type="success" @click="jumpNode">node</el-button>
    </div>
    <div class="ceng1">
      <h1>代码管理</h1>
      <el-button type="primary" @click="jumpGit">git</el-button>
    </div>
    <div class="ceng1">
      <h1>标签兼容性</h1>
      <el-button type="primary" @click="jumpCan">can i use</el-button>
    </div>
    <div class="ceng1">
      <h1>框架工具</h1>
      <el-button type="primary" @click="jumpElement">Element</el-button>
      <el-button type="success" @click="jumpVant">vant</el-button>
    </div>
    <div class="ceng1">
      <h1>项目上线</h1>
      <el-button type="primary" @click="jumpGzip">熊猫压缩</el-button>
      <el-button type="success" @click="jumpAlibaba">阿里云服务器</el-button>
      <el-button type="info" @click="jumpTxyun">阿里云服务器</el-button>

    </div>
    <div class="ceng1">
      <h1>资源工具</h1>
      <el-button type="primary" @click="jumpItsource">IT资源网</el-button>
      <el-button type="success" @click="jumpAliIcon">阿里巴巴矢量图标</el-button>
    </div>
    <div class="ceng1">
      <h1>休闲工具</h1>
      <el-button type="primary" @click="jumpGame">童年手柄游戏</el-button>
      <!-- <el-button type="success" @click="jumpVant">vant</el-button> -->
    </div>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>

<script>
import Footer from '../component/framework/Footer.vue'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
	//import引入的组件需要注入到对象中才能使用
	components: { Footer },
	data() {
		//这里存放数据
		return {
			vue: 'https://cn.vuejs.org/index.html',
			react: 'https://react.docschina.org',
			angular: 'https://angular.cn',
			webpack: 'https://webpack.docschina.org',
			vite: 'https://vitejs.cn',
			tiny: 'https://tinypng.com',
			alibaba: 'https://www.aliyun.com',
			txyun: 'https://cloud.tencent.com',
			can: 'https://caniuse.com',
			element: 'https://element.eleme.io',
			vant: 'https://vant-contrib.gitee.io/vant/#/zh-CN/home',
			npm: 'https://www.npmjs.com',
			node: 'https://nodejs.org/zh-cn',
			git: 'https://git-scm.com',
			itSource: 'https://www.itresource.org',
			game: 'https://www.yikm.net',
			aliIcon: 'https://www.iconfont.cn'
		}
	},
	//监听属性 类似于data概念
	computed: {},
	//监控data中的数据变化
	watch: {},
	//方法集合
	methods: {
		jumpVue() {
			window.location.href = this.vue
		},
		jumpReact() {
			window.location.href = this.react
		},
		jumpAngular() {
			window.location.href = this.angular
		},
		jumpWebpack() {
			window.location.href = this.webpack
		},
		jumpVite() {
			window.location.href = this.vite
		},
		jumpGzip() {
			window.location.href = this.tiny
		},
		jumpAlibaba() {
			window.location.href = this.alibaba
		},
		jumpTxyun() {
			window.location.href = this.txyun
		},
		jumpCan() {
			window.location.href = this.can
		},
		jumpElement() {
			window.location.href = this.element
		},
		jumpVant() {
			window.location.href = this.vant
		},
		jumpNpm() {
			window.location.href = this.npm
		},
		jumpNode() {
			window.location.href = this.node
		},
		jumpGit() {
			window.location.href = this.git
		},
		jumpItsource() {
			window.location.href = this.itSource
		},
		jumpGame() {
			window.location.href = this.game
		},
		jumpAliIcon() {
			window.location.href = this.aliIcon
		}
	},
	//生命周期 - 创建完成（可以访问当前this实例）
	created() {},
	//生命周期 - 挂载完成（可以访问DOM元素）
	mounted() {},
	beforeCreate() {}, //生命周期 - 创建之前
	beforeMount() {}, //生命周期 - 挂载之前
	beforeUpdate() {}, //生命周期 - 更新之前
	updated() {}, //生命周期 - 更新之后
	beforeDestroy() {}, //生命周期 - 销毁之前
	destroyed() {}, //生命周期 - 销毁完成
	activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.main {
	padding: 20px 66px;
}
.ceng1 {
	/* padding-top: 24px; */
	& > h1 {
		font-size: 24px;
		padding: 20px 0;
	}
}
</style>
