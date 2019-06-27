<template>
	<div class="toast-wrap" v-if="showWrap" :class="showContent ?'fadein':'fadeout'">
		<div alt="" v-if="showImg=='none'"></div>
		<img src="./toast/success.png" alt="" v-if="showImg=='success'" class="toast-wrap-img">
		<img src="./toast/fail.png" alt="" v-if="showImg=='fail'" class="toast-wrap-img">
		<img src="./toast/warn.png" alt="" v-if="showImg=='warn'" class="toast-wrap-img">
		<div class="toast-wrap-text">{{text}}</div>
	</div>
</template>

<style scoped>
	.toast-wrap {
		position: fixed;
		left: 50%;
		top: 30%;
		background: rgba(0, 0, 0, .8);
		padding: 1.5rem 2rem 1.75rem;
		border-radius: 0.125rem;
		margin-left: -100px;
		color: white;
		text-align: center;
		max-width: 200px;
	}

	.toast-wrap-img {
		width: 3rem;
		height: 3rem;
		overflow: hidden;
		margin: 0 auto 0.625rem;
	}

	.toast-wrap-text {
		text-align: center;
		font-size: 0.9rem;
	}

	.fadein {
		animation: animate_in 0.25s;
	}

	.fadeout {
		animation: animate_out 0.25s;
		opacity: 0;
	}

	@keyframes animate_in {

		/*@keyframes使一个div元素逐渐变化*/
		0% {
			transform: scale(0,0);
		}

		100% {
			transform: scale(1,1);
		}
	}

	@keyframes animate_out {
		0% {
			transform: scale(0,0);
		}

		100% {
			transform: scale(1,1);
		}
	}
</style>
