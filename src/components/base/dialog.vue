<template>
	<div>
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-cover" @click="closeMyself" v-if="isShow"></div>
			<div class="dialog-content">
				<p class="dialog-close"></p>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>
<script >
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {

			}
		},
		methods:{
			closeMyself:function(){
				this.$emit('on-close');
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
.dialog-wrap
	position: fixed;
	width: 100%;
	height: 100%;
	.dialog-cover
		position: fixed;
		z-index: 5;
		top: 0
		left: 0
		width: 100%;
		height: 100%;
		background-color: #eee
		opacity:.5
	.dialog-content
		width: 50%;
		position: fixed;
		top:20%
		left: 50%
		max-height: 50%;
		overflow: auto;
		background: #fff;
		margin-left: -25%;
		z-index: 10;
		border: 2px solid #464068;
		padding: 2%;
		line-height: 1.6;
		.dialog-close
			position absolute
			top 3%
			right 3%
			width:0.1em;
			height:1em;
			background: #333;
			-webkit-transform: rotate(45deg);
			-moz-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
			display: inline-block;
			&:after
				content ''
				position:absolute
				right 3%
				top 2%
				width .1em
				height 1em
				background #333
				-webkit-transform rotate(270deg)
				transform rotate(270deg)
</style>