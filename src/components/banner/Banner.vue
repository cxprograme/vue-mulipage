<template>
	<div class="container">
          <div id="pic">
            <ul>
              <li v-for="(item,index) in imgArry">
              	<img :src="item.src">
              </li>
            </ul>
          </div>
          <div id="btn">
            <div id="left" class="bt fleft">&lt</div>
            <div id="right" class="bt fright">&gt</div>
          </div>
          <div id="tab">
            <ul>
              <li class="on"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
    </div>
</template>
<script type="text/javascript">
import img from '../../../static/json/images.json'
	export default {
		name: 'banner',
		data() {
			return {
				index: 0,
				imgArry:img.images
			}
		},
		created() {

		},
		methods: {
			leftClick: function(){

			},
			rightClick: function() {

			},
			changeBanner: function() {

			},
			autoPlay: function() {

			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus" scoped>
    body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,   
    fieldset,input,textarea,p,blockquote,th,td 
        margin:0
        padding:0
    .container
        width:520px
        height: 240px
        position: absolute
        left:50%
        top:50%
        margin-left:-260px
        margin-top:-140px
        overflow: hidden
        &:hover .bt
            display: block
            cursor: pointer
        #pic
            width:1000%
            height: 240px
        #pic ul
            width:1000%
            height:240px
            margin-left: -520px
        #pic ul li
            width:520px
            height:240px
            float: left
            list-style: none
        #btn
            width:100%
            height: 30px
            position: absolute
            left: 0
            top:50%
            margin-top: -15px
            /*background-color: #999*/
            .bt
                width:20px
                text-align: center
                height:30px
                line-height: 30px
                font-size: 20px
                background-color: #999
                opacity: 0.5
                // display: none
            .fleft
                float: left  
            .fright
                float: right
        #tab
            width:90px
            height: 13px
            position: absolute
            left:50%
            margin-left: -45px
            bottom: 13px
            border-radius: 5px
            ul li
                width: 13px
                height: 13px
                border-radius: 100%
                background: #999
                list-style: none
                float: left
                margin-left: 2px
            ul .on
                background-color: red
</style>