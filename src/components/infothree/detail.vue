<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-borad">
				<ul>
					<li v-for="(item,index) in products">{{item.name}}</li>
				</ul>
			</div>
		</div>
		<div class="detail-right"></div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				products: [
				{
				  name: '数据统计',
				  path: 'count',
				  icon: require('@/assets/images/1.png'),
				  active: false
				},
				{
				  name: '数据预测',
				  path: 'forecast',
				  active: false
				},
				{
				  name: '流量分析',
				  path: 'analysis',
				  active: false
				},
				{
				  name: '广告发布',
				  path: 'publish',
				  active: false
				}
				],
				imgMap: {
				'/detail/count': require("@/assets/images/1.png"),
				'/detail/forecast': require("@/assets/images/2.png"),
				'/detail/analysis': require("@/assets/images/3.png"),
				'/detail/publish': require("@/assets/images/4.png")
				}
			}
		}
	}
</script>
<style scope lang="stylus" type='stylus' rel="stylesheet/stylus">
.detail-wrap
	display flex
	flex-direction row
	margin 0 auto
	width 1000px
	.detail-left
		width 200px
		background-color red
	.detail-right
		width 900px
		min-height 400px
</style>