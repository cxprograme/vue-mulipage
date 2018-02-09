<template>
  <!-- <div class="">
    {{totalPrice}}
    <banana></banana>
    <apple></apple>
  </div> -->
  <layout></layout> 
</template>

<script>
import Banana from '@/components/banana/Banana'
import Apple from '@/components/apple/Apple'
import Layout from '@/components/layout/Layout'
export default {
  name: 'infothree',
  components:{
  	banana:Banana, 
  	apple:Apple,
    layout:Layout
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
