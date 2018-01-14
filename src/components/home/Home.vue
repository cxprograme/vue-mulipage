/**
 * autor:cxpro
 * date:2017-01-08 15:15:20
 * project-name: ${project_base_name}
 */
<template>
	<div class="home">
		<img :src='intro.image'>
		<span>作者：{{intro.author}}</span>
		<span>分类: {{intro.category}}</span>
		<banner></banner>
	</div>
</template>

<script>
import Banner from '@/components/banner/Banner'
	export default{
		name: 'home',
		props:{
			intro:{
				type: Object
			}
		},
		components:{
			banner:Banner
		}
	};
</script>

<style scoped>
	
						
</style>