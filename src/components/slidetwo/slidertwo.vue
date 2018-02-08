<template>
	<div class="slider-show" @mouseover="clearInv" @mouseout="runDev">
		<div class="slider-img" >
			<a href="#">
				<transition name="slider-trans">
					<img v-if='isShow' :src="slider[nowIndex].src">
				</transition>
				<transition name="slider-trans-old">
					<img v-if="!isShow" :src="slider[nowIndex].src">
				</transition>
			</a>
		</div>
		<h2>{{slider[nowIndex].title}}</h2>
		<ul>
			<li @click='gotoIndex(preIndex)'>&lt;</li>
			<li v-for = '(item,index) in slider' @click='gotoIndex(index)' :class='{on:index===nowIndex}'>{{index+1}}</li>
			<li @click='gotoIndex(nextIndex)'>&gt;</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			slider:{
				type:Array,
				default:[]
			},
			inv:{
				type:Number,
				default:5000
			}
		},
		data (){
			return {
				nowIndex:0,
				isShow: true
			}
		},
		mounted (){
			this.runDev();
		},
		computed:{
			preIndex:function(){
				if(this.nowIndex === 0){
					return this.slider.length - 1;
				}else{
					return this.nowIndex -1;
				}
			},
			nextIndex:function(){
				if (this.nowIndex === this.slider.length-1){
					return 0
				}else{
					return this.nowIndex+1;
				}
			}
		},
		methods:{
			gotoIndex:function(index){
				this.isShow = false
				console.log("index old:"+this.nowIndex)
		      setTimeout(() => {
		        this.isShow = true
		        this.nowIndex = index
		        console.log("index new:"+this.nowIndex)
		      }, 20)
				
			},
			runDev:function(){
				this.interV=setInterval(()=>{
					this.gotoIndex(this.nextIndex);
				},this.inv)
			},
			clearInv:function(){
				clearInterval(this.interV);
			}
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
		.slider-img
			.slider-trans-enter-active
				transition all 2s
			.slider-trans-enter
				transform translateX(900px)
			.slider-trans-old-leave-active
				transition: all 2s
  				transform: translateX(-900px)
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
			line-height 30px
			font-size 16px
			text-align: left;
			padding-left: 15px;
		ul
			position absolute
			bottom 0px
			right 0px
			li
				display inline-block
				line-height 30px
				padding 0 10px
				color #fff
				cursor pointer
			.on
				color red
				text-decoration line
</style>