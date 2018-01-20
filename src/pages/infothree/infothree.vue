<template>
  <div class="">
    {{totalPrice}}
    <banana></banana>
    <apple></apple>
  </div>
</template>

<script>
import Banana from '@/components/banana/Banana'
import Apple from '@/components/apple/Apple'
export default {
  name: 'infothree',
  components:{
  	banana:Banana, 
  	apple:Apple
  },
  computed:{
  	totalPrice:function(){
  		return this.$store.state.totalPrice
  	}
  }
}
</script>

<style>

</style>
