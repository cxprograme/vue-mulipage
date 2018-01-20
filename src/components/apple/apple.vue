<template>
  <div class="">
   I am a Apple
   <button @click="addApple">Add apple</button>
   <button @click="decApple">Dec apple</button>
  </div>
</template>

<script>
export default {
  name: 'infothree',
  data() {
    return {
      price:15
    }
  },
  methods:{
    addApple:function(){
      this.$store.commit('increment',this.price);
    },
    decApple:function(){
      this.$store.commit('decrement',this.price);
    }
  }
}
</script>

<style>

</style>
