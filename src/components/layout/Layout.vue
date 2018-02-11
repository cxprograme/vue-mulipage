<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
				<router-link :to="{path:'/'}">
					<img src="../../assets/logo.png">
				</router-link>
				<div class="head-nav">
					<ul class="nav-list">
						<li>{{username}}</li>
						<li v-if="username !==''">|</li>
						<li v-if="username !==''" @click='quit'>退出</li>
						<li v-if="username ===''" @click='login'>登录</li>
						<li>|</li>
						<li v-if="username ===''" @click='register'>注册</li>
						<li>|</li>
						<li @click='aboutClick'>关于</li>
					</ul>
				</div>
			</div>
		</div>
		<router-view></router-view>
		<div class="app-footer">
			<p>@ cxpro </p>
		</div>
		<mydialog :is-show="isShowDialog" @on-close='closeDialog'>
			<p>Login</p>
		</mydialog>
	</div>
</template>
<script>
	import dialog from '@/components/base/dialog'
	export default {
		name: 'layout',
		components:{
			mydialog:dialog
		},
		data() {
			return {
				username:'',
				isShowDialog:false
			}
		},
		methods: {
			quit: function(){

			},
			login: function(){
				this.isShowDialog = true;
			},
			register: function(){
				this.isShowDialog = true;
			},
			aboutClick: function(){
				this.isShowDialog = true
			},
			closeDialog:function(){
				this.isShowDialog = false
			}
		}
	}
</script>
<style  lang="stylus" type='stylus' rel="stylesheet/stylus">
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section
  display: block;
body
  line-height: 1;
ol, ul
  list-style: none;
blockquote, q
  quotes: none;
blockquote:before, blockquote:after,
q:before, q:after
  content: '';
  content: none;
table
  border-collapse: collapse;
  border-spacing: 0;
a
  color: inherit;
  text-decoration: none;
body
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
.app-head
	width 100%
	height 80px
	line-height 80px
	color #363636
	background-color #b2b2b2
	.app-head-inner
		width 1200px
		margin  0 auto
		img
			width 50px
			margin-top 15px
		.head-nav
			float right
			.nav-list
				display flex
				li
					color #fff
					margin-left 2px
					cursor pointer
	.container
		width 1200px
		margin 0 auto
.app-footer
	width 100%
	height 60px
	text-align center
	background-color #e3e4e8
	clear both
	line-height 60px
	margin-top  30px
</style>
