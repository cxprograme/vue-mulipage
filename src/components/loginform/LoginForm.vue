<template>
	<div class="login-form">
		<div class="g-login-form">
			<div class="g-form-line">
				<span class="g-form-label">用户名:</span>
				<div class="g-form-input">
					<input type="text" name="" v-model='userNameModel' placeholder="请输入用户名">
				</div>
				<span class="g-form-error">{{userErrorText.errorText}}</span>
			</div>
			<div class="g-form-line">
				<span class="g-form-label">密码:</span>
				<div class="g-form-input">
					<input type="text" name="" v-model='passWordModel' placeholder="请输入密码">
				</div>
				<span class="g-form-error">{{passwordErrorText.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-btn">
					<a href="#" @click='onLogin'>登录</a>
				</div>
			</div>
			<div class="g-form-line">
				<span class="g-form-error">{{errorText}}</span>
			</div>
		</div>
	</div>
</template>
<script >
	export default{
		data () {
			return {
				userNameModel:'',
				passWordModel:'',
				errorText:''
			}
		},
		computed:{
			userErrorText:function(){
				let errorText,status;
				if (!/@/g.test(this.userNameModel)) {
					status = false
					errorText = '用户名应包含@';
				}else{
					status = true;
					errorText = ''
				}
				if(!this.userNameFlag){
					errorText = '';
					this.userNameFlag = true;
				}
				return {
					status,errorText
				}
			},
			passwordErrorText: function(){
				let errorText,status;
				if (!/^\w{1,6}$/g.test(this.passWordModel)) {
					status = false
					errorText = '密码在1-6位';
				}else{
					status = true;
					errorText = ''
				}
				if(!this.passwordFlag){
					errorText = '';
					this.passwordFlag = true;
				}
				return {
					status,errorText
				}
			}

		},
		methods:{
			onLogin:function(){
				if (!this.userErrorText.status||!this.passwordErrorText.status) {
					this.errorText='部分选项不通过';
					return
				}else{
					this.$http.get("/api/login").then((response) => {
						this.$emit('has-log',response.body)
					},(error) => {
						this.errorText='请求失败';
					})
				}
			}
		}
	}
</script>
<style lang="stylus" type='stylus' rel="stylesheet/stylus">
	.g-login-form
		padding 5px
		.g-form-line
			display flex
			flex-direction row
			justify-content center
			padding 5px
			.g-form-label,.g-form-error
				display inline-block
				width 100px
				font-size 14px
				font-weight bold
			.g-form-input
				input
					padding 4px
			.g-form-btn
				a
					display inline-block
					width 80px
					height 30px
					background green
					color #fff
					border-radius 5px
					text-align center
					line-height 30px
</style>