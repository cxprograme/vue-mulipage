<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for='product in productList'>
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
						</li>
					</ul>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<template v-for='product in newList'>
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
						</li>
					</ul>
				</template>
			</div>
		</div>
		<div class="index-right"></div>
	</div>
</template>
<script >
import {fetch} from '@/util/http'
export default {
	name: 'index',
	data() {
		return {
			productList:{
				pc:{
					title:'PC产品',
					list: [
						{
			              name: '数据统计',
			              url: 'http://starcraft.com'
			            },
			            {
			              name: '数据预测',
			              url: 'http://warcraft.com'
			            },
			            {
			              name: '流量分析',
			              url: 'http://overwatch.com',
			              hot: true
			            },
			            {
			              name: '广告发布',
			              url: 'http://hearstone.com'
			            }
					]
				},
				app: {
					title: '手机应用类',
					last: true,
					list: [
						{
						  name: '91助手',
						  url: 'http://weixin.com'
						},
						{
						  name: '产品助手',
						  url: 'http://twitter.com',
						  hot: true
						},
						{
						  name: '智能地图',
						  url: 'http://maps.com'
						},
						{
						  name: '团队语音',
						  url: 'http://phone.com'
						}
					]
				}
			},
			newList:[]
		}
	},
	create:function() {
		fetch ('/api/getNewsList').then(response => {
		  console.log('111');
          this.newList = response
      })
	}
}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.index-wrap
		width 1200px
		margin 0 auto
		padding-top 10px
		.index-left
			.index-left-block
				width 200px
				background-color #fff
				h2
					box-sizing border-box
					width 100%
					height 40px
					line-height 40px
					background-color #66CDAA
					font-size 16px
					font-weight 400px
					border-radius 5px
					padding-left 10px
				h3
					padding: 0 15px 5px 15px;
					font-weight: bold;
					color: #222;
				ul
					padding:10px 15px
					li
						padding 5px
</style>