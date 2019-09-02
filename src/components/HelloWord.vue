<template>
     <div class="helloword">
			 {{info}}{{msg}}
	 </div>
</template>

<script>
	export default{
		data(){
			return{
				info:"jest"
			}
		},
		props:{
			msg:''
		}
		
	}
</script>

<style lang="scss"  scoped>
  
  
</style>
