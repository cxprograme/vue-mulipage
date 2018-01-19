/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="home">
		<!-- <img :src="img5"> -->
		<!-- <img :src='intro.image'>
		<span>作者：{{intro.author}}</span>
		<span>分类: {{intro.category}}</span> -->
		<banner></banner>
		<div class="section">
			<div class="book-list">
				<div class="heading comlay">
					<div class="header">新书上架</div>
					<div class="more">更多</div>
				</div>
				<div class="book-items comlay">
					<div class="book" v-for='book in booklist'>
						<div class="cover">
							<img :src="book.image">
						</div>
						<div class="info">
							<div class="inwraper">
								<span>作者：{{book.author}}</span>
								<span>分类: {{book.category}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Banner from '@/components/banner/Banner'
import img5 from '../../../static/images/5.jpg'
	export default{
		name: 'home',
		data() {
			return{
				img5:img5,
				booklist:[]
			}
				
		},
		props:{
			intro:{
				type: Object
			}
		},
		mounted: function(){
			for (var i=0;i<10;i++){
				this.booklist.push(this.intro);
			}
			console.log('booklist:'+this.booklist);
		},
		components:{
			banner:Banner
		}
	};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
	.section
		margin-top: 160px
		.book-list
			padding:10px
			.heading
				display:flex
				justify-content:space-between
				flex-direction row
			.book-items
				display flex
				flex-direction row
				flex-wrap wrap
				.book
					display flex
					&:nth-child(odd)
						width 49%
						margin-left 4px
					&:nth-child(even)
						width 49%
						margin-left 3px
					.cover
						img
							width:80px
							height: 100px 
					.info
						padding-left 10px
						font-size: 12px
						line-height 20px
</style>