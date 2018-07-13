<template>
	<div class="section">
			<div class="book-list">
				<div class="heading comlay">
					<div class="header">{{header}}</div>
					<div class="more">更多</div>
				</div>
				<div class="book-items comlay">
					<div class="book" v-for='book in blist'>
						<div class="cover">
							<img :src="book.image">
						</div>
						<div class="info">
							<div class="inwraper">
								<span>作者：{{book.author}}</span>
								<span>分类: {{book.category}}</span>
								<span>简介: {{book.desc}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>
<script>
	export default{
		name:'booklist',
		props:{
			header:{
				type:String,
				default:'默认'
			},
			blist:{
				type:Array,
				default:[]
			}
		}
	}
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