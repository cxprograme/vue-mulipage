/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="carts">
		carts info 
		<div id="box" ref='box'>
		</div>
	</div>
</template>

<script>
import {move} from '@/util/move'
export default{
	name: 'carts',
	mounted() {
	    console.log(this.$refs.box)
	    var box = this.$refs.box;
	    move(box,{'marginLeft':'500'},1000,function(){
			console.log(this);
			move(this,{'marginTop':'500'},1000,function(){
				this.style.background='blue';
			},'easeOut');
		},'easeIn')
	}
}
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
*
	margin 0 0 0 0
	padding 0 0 0 0
#box
	width 100px
	height 100px
	background-color red
</style>
