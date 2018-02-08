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
				<ul>
						<li v-for="item in newList">
							<a :href="item.url">{{item.title}}</a>
						</li>
				</ul>
			</div>
		</div>
		<div class="index-right">
			<slider class='rightcommon' :slides="sliders"></slider>
			<div class="rightcommon index-borad-list">
				<div class="index-borad-item" v-for="(item,index) in boardList" :class="['index-board-'+item.id]">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<a href="" class="button">立即购买</a>
            			</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script >
import {fetch} from '@/util/http'
import slider from '@/components/sliderbanner/sliderbanner'
export default {
	name: 'index',
	components:{
		slider:slider
	},
	data() {
		return {
			sliders: [
		        {
		          src: require('@/assets/slideShow/pic1.jpg'),
		          title: 'xxx1',
		          href: 'detail/analysis'
		        },
		        {
		          src: require('@/assets/slideShow/pic2.jpg'),
		          title: 'xxx2',
		          href: 'detail/count'
		        },
		        {
		          src: require('@/assets/slideShow/pic3.jpg'),
		          title: 'xxx3',
		          href: 'http://xxx.xxx.com'
		        },
		        {
		          src: require('@/assets/slideShow/pic4.jpg'),
		          title: 'xxx4',
		          href: 'detail/forecast'
		        }
		    ],
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
			newList:[],
			boardList: [
					{
						title : '开放产品',
						description: '开放产品是一款开放产品',
						id: 'car',
						saleout: false
					},
					{
						title: '品牌营销',
						description: '品牌营销帮助你的产品更好地找到定位',
						id: 'earth',
						saleout: false
					},
					{
						title: '使命必达',
						description: '使命必达快速迭代永远保持最前端的速度',
						id:'loud',
						saleout: false
					},
					{
						title: '勇攀高峰',
						description: '帮你勇闯高峰，到达事业的顶峰',
						id: 'hill',
						saleout: false
					}
				]
		}
	},
	mounted: function(){
		this.$http.get('/api/getNewsList').then(response => {
			console.log('111');
			console.log(JSON.stringify(response));
			this.newList = response.body;
		})
	}
	/*mouthed:function() {
		this.$http.get('/api/getNewsList').then(response => {
			console.log('111');
		})
		fetch ('/api/getNewsList').then(response => {
		  console.log('111');
          this.newList = response
      })
	}*/
}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.index-wrap
		width 1200px
		margin 0 auto
		padding-top 10px
		overflow hidden
		display flex
		flex-direction row
		justify-content space-between
		.index-left
			// float left
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
		.index-right
			// float left
			// margin-left 20px
			// margin-top 500px
			display flex
			flex-direction column
			.index-borad-list
				overflow: hidden;
				display: flex
				flex-direction row
				flex-wrap wrap
				justify-content flex-end
				.index-borad-item
					width: 400px;
					background: #fff;
					box-shadow: 0 0 1px #ddd;
					padding: 20px;
					margin-right: 20px;
					margin-bottom: 20px;
					.index-board-item-inner
						min-height: 125px;
						padding-left: 120px;
				.index-board-car
					.index-board-item-inner
						background url(../../assets/images/1.png) no-repeat
				.index-board-loud
					.index-board-item-inner
						background url(../../assets/images/2.png) no-repeat
				.index-board-earth
					.index-board-item-inner
						background url(../../assets/images/3.png) no-repeat
				.index-board-hill
					.index-board-item-inner
						background url(../../assets/images/4.png) no-repeat
</style>