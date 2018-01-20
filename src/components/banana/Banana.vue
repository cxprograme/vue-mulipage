<template>
  <div class="">
   I am a banana
   <button @click="addBanana">Add Banana</button>
   <button @click="decBanana">Dec Banana</button>
  </div>
</template>

<script>
export default {
  name: 'infothree',
  data() {
  	return {
  		price:5
  	}
  },
  methods:{
  	addBanana:function(){
  		this.$store.commit('increment',this.price);
  	},
  	decBanana:function(){
  		this.$store.commit('decrement',this.price);
  	}
  }
}
</script>

<style>

</style>
