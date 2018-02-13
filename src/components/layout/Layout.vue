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
		<mydialog :is-show="isShowDialogLogin" @on-close='closeDialog("isShowDialogLogin")'>
			<login-form @has-log='onSuccessLog'></login-form>
		</mydialog>
		<mydialog :is-show="isShowDialogRegister" @on-close='closeDialog("isShowDialogRegister")'>
			<p>Register</p>
		</mydialog>
		<mydialog :is-show="isShowDialogAbout" @on-close='closeDialog("isShowDialogAbout")'>
			<p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
		</mydialog>
	</div>
</template>
<script>
	import dialog from '@/components/base/dialog'
	import loginForm from '@/components/loginform/LoginForm'
	export default {
		name: 'layout',
		components:{
			mydialog:dialog,
			loginForm:loginForm
		},
		data() {
			return {
				username:'',
				isShowDialogLogin:false,
				isShowDialogRegister: false,
				isShowDialogAbout:false
			}
		},
		methods: {
			quit: function(){
				this.username = '';
			},
			login: function(){
				this.isShowDialogLogin = true;
			},
			register: function(){
				this.isShowDialogRegister = true;
			},
			aboutClick: function(){
				this.isShowDialogAbout = true
			},
			closeDialog:function(arg){
				this[arg] = false
			},
			onSuccessLog:function(data){
				console.log(data);
				if(data.username){
					this.username = data.username
					this.closeDialog('isShowDialogLogin');
				}
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
