<template>
	<div class="slider-show">
		<div class="slider-img">
			<a href="#">
				<img :src="slider[0].src">
			</a>
		</div>
		<h2>title</h2>
		<ul>
			<li>&lt;</li>
			<li>1</li>
			<li>1</li>
			<li>1</li>
			<li>&gt;</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			slider:{
				type:Array,
				default:[]
			}
		},
		data (){
			return {
				nowIndex:0
			}
		},
		mounted (){
			console.log(this.slider);
		}
	}
</script>
<style scope lang="stylus" type='stylus' rel="stylesheet/stylus">
	.slider-show
		position relative
		margin: 15px 15px 15px 0;
		width: 900px;
		height: 500px;
		overflow: hidden;
		h2
			position: absolute
			bottom 0px
			width 100%
			height 30px
			color: #fff;
			background: #000;
			opacity: .5;
			bottom: 0;
			height: 30px;
			text-align: left;
			padding-left: 15px;
		ul
			position absolute
			bottom 0px
			right 0px
			background-color green
			li
				display inline-block
</style>