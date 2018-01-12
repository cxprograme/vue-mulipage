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
	</div>
</template>

<script>

	export default{
		name: 'home',
		props:{
			intro:{
				type: Object
			}
		}
	};
</script>

<style scoped>
	
						
</style>