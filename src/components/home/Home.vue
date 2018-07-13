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
		<booklist :blist = 'booklist' :header='header[0]'></booklist>
		<booklist :blist = 'booklist' :header='header[1]'></booklist>
		<booklist :blist = 'booklist' :header='header[2]'></booklist>
	</div>
</template>

<script>
import Banner from '@/components/banner/Banner'
import img5 from '../../../static/images/5.jpg'
import booklist from '@/components/booklist/BookList'
	export default{
		name: 'home',
		data() {
			return{
				img5:img5,
				booklist:[],
				header:['强推','玄幻','修仙','武侠']
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
			banner:Banner,
			booklist:booklist
		}
	};
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
/*	.section
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
						line-height 20px*/
</style>