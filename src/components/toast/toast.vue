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
		top: 50%;
		background: rgba(0, 0, 0, .8);
		padding: 1.5rem 2rem 1.75rem;
		border-radius: 0.125rem;
		transform: translate(-50%, -50%);
		color: white;
		text-align: center;
		max-width: 300px;
	}

	.toast-wrap-img {
		width: 4.25rem;
		height: 4.25rem;
		overflow: hidden;
		margin: 0 auto 1rem;
	}

	.toast-wrap-text {
		letter-spacing: 0.125rem;
		text-align: center;
		font-size: 1.075rem;
	}

	.fadein {
		animation: animate_in 0.5s;
	}

	.fadeout {
		animation: animate_out 0.5s;
		opacity: 0;
	}

	@keyframes animate_in {

		/*@keyframes使一个div元素逐渐变化*/
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes animate_out {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
