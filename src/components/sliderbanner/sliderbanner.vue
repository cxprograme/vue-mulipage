<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item, index) in slides"
      @click="goto(index)"
      >
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>
<style scoped lang="stylus" type='stylus' rel="stylesheet/stylus">
.slide-show
	position: relative;
	width: 900px;
	height: 500px;
	overflow: hidden;
	.slide-img
		width: 100%;
		.slide-trans-enter-active
			transition: all .5s;
		.slide-trans-enter
			transform: translateX(900px);
		.slide-trans-old-leave-active
			transition: all .5s;
			transform: translateX(-900px);
		img
			width: 100%;
			position: absolute;
			top: 0;
	h2
		position: absolute;
		width: 100%;
		height: 100%;
		color: #fff;
		background: #000;
		opacity: .5;
		bottom: 0;
		height: 30px;
		text-align: left;
		padding-left: 15px;
		line-height: 30px;
		font-size: 16px
	.slide-img
		width: 100%;
		img
			width: 100%;
			position: absolute;
			top: 0;
	.slide-pages
			position: absolute;
			bottom: 10px;
			right: 16px;
			li
				display: inline-block;
				padding: 0 10px;
				cursor: pointer;
				color: #fff;
				font-size:14px
				.on
					text-decoration: underline;
</style>
