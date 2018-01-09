<template>
  <div class="">
     <div>
      <v-header :seller="seller"></v-header>
      <div class="tab border-1px">
        <div class="tab-item">
            <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/rating">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
      </div>
      <!-- <div class="content">
        Content
      </div> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoone'
}
</script>

<style>

</style>
