<template>
	<div class="container" @mouseover='mouseOver' @mouseleave='mouseLeave'>
          <div id="pic">
            <ul v-bind:style = 'moveStyle' ref='picCon'>
              <li v-for="(item,index) in imgArry" v-bind:style ="{'background-image':'url('+item.src+')'}">
              	<!-- <img :src="item.src"> -->
              </li>
            </ul>
          </div>
          <!-- <div id="btn">
            <div id="left" class="bt fleft" @click='leftClick'>&lt</div>
            <div id="right" class="bt fright" @click='rightClick'>&gt</div>
          </div> -->
          <div id="tab">
            <ul>
             <li v-for = '(item, index) in tabList' :class ="{'on':item.show}" @click='tabClick(index)'>
             </li>
            </ul>
          </div>
    </div>
</template>
<script type="text/javascript">
import img from '../../../static/json/images.json'
import {move} from '@/util/move'
	export default {
		name: 'banner',
		data() {
			return {
				index: 0,
				imgArry:img.images,
        initNum:375,
        moveStyle:{
            'marginLeft':'-375px'
        },
        tabList:[
            {show : true},
            {show : false},
            {show : false},
            {show : false},
            {show : false}
        ],
        startDate: new Date(),
        timer: null

			}
		},
		created() {

		},
    mounted: function(){
        var that = this;
        that.timer = setInterval(function(){
            var tempDate=new Date();
            if(tempDate-that.startDate>300){
              this.startDate=tempDate;
              that.index = that.index==that.tabList.length?0:that.index
              that.tabList[that.index].show=false;
              that.index++;
         
              
              var obj = that.$refs.picCon;
              
              that.changeBanner(that.index, obj);
             }
          },5000)
    },
		methods: {
			leftClick: function(){
                var tempDate = new  Date();
                if(tempDate-this.startDate>300){
                    this.startDate=tempDate;
                    this.index = this.index==-1?this.tabList.length-1:this.index
                    this.tabList[this.index].show = false;
                    this.index--;
                    var obj = this.$refs.picCon;
                    this.changeBanner(this.index,obj);
                }
			},
			rightClick: function() {
                var tempDate = new  Date();
                if(tempDate-this.startDate>300){
                    this.startDate=tempDate;
                    this.index = this.index == this.tabList.length?0:this.index
                    this.tabList[this.index].show = false;
                    this.index++;
                    var obj = this.$refs.picCon;
                    this.changeBanner(this.index,obj);
                }
            },
			changeBanner: function(index,obj) {
                var tabList = this.tabList;
                var now = this.index;
                var moveStyle = this.moveStyle
                var index = this.index;
                var initNum = this.initNum;
                if (now >= tabList.length){
                    now = 0;
                }
                if (now < 0) {
                    now = this.tabList.length-1;
                }
                tabList[now].show = true;
                 move(obj,{
                    'marginLeft':-initNum*(index+1)+"px"
                  },300,function(){
                    // console.log(index);
                    if(index==tabList.length){
                       index=0;
                       this.index = index;
                       obj.style.marginLeft= -initNum+'px';
                    }else if(index==-1){
                       index=tabList.length-1;
                       this.index = index;
                       obj.style.marginLeft=-initNum*(index+1)+"px";
                    }
                    }
                    //this.callMove(index,tabList,initNum,obj)
                  ,"easeOutStrong");

			},
			autoPlay: function() {
                this.timer = setInterval(function(){
              /*  var tempDate=new Date();
                if(tempDate-this.startDate>300){*/
                  // this.startDate=tempDate;
                  this.tabList[this.index].show=false;
                  this.index++;
                // if(index>=$picli.length){
                //   index=0;
                // }
                  this.index==this.tabList.length?0:this.index
                  var obj = this.$refs.picCon;
                  
                  change(this.index, obj);
                // }
              },5000)
			},
      tabClick:function(index) {
          var obj = this.$refs.picCon;
          this.tabList[this.index].show=false;
          this.index=index;
          this.changeBanner(index,obj);
      },
      mouseOver: function(){
          clearInterval(this.timer);
      },
      mouseLeave: function(){
          var that = this
          that.timer = setInterval(function(){
            var tempDate=new Date();
            if(tempDate-that.startDate>300){
              that.startDate=tempDate;
              that.index = that.index==that.tabList.length?0:that.index
              that.tabList[that.index].show=false;
              that.index++;
         
              
              var obj = that.$refs.picCon;
              
              that.changeBanner(that.index, obj);
             }
          },1000)
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
        // width:702px
        width: 100%
        height: 160px
        position: absolute
        // left:50%
        top:0
        // margin-left:-260px
        // margin-top:-140px
        overflow: hidden
        &:hover .bt
            display: block
            cursor: pointer
        #pic
            width:1000%
            height: 160px
        #pic ul
            width:1000%
            height:160px
            margin-left: -375px
        #pic ul li
            width:375px
            height:160px
            float: left
            list-style: none
            background-size:100% 100%
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