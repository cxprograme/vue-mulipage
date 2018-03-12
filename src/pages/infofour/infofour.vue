<template>
  <div class="menu-container">
  	<div>Hello Menu</div>
    <div v-for="(item, index) in menuLists">{{item.page_id}}</div>
  </div>
</template>

<script>
import {fetch} from '@/util/http'
export default {
  name: 'infofour',
  data(){
    return{
      menuLists:{}
    }
  },
  mounted(){
    this.getMenusList();
  },
  methods:{
    getMenusList:function(){
      console.log("1111");
      var _this = this;
      fetch("http://127.0.0.1:8081/menuwork/menus").then(response =>{
        this.menuLists = response
        //console.log("menuLists:"+this.menuLists);
      })
    }
  }
}
</script>

<style lang="stylus" type='stylus' rel="stylesheet/stylus">

</style>
