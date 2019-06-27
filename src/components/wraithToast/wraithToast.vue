<template>
	<div>
		<button @click="AlertTips()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">alert弹窗</button>
		
		<button @click="confirmTips()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">confirm弹窗</button>
		
		<button @click="showPrompt()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">showPrompt弹窗</button>
	</div>
</template>

<script>
	import {PostbirdAlertBox} from '../wraithToast/wraithToast.js'
	
	export default {
		components: {
			
		},
		methods:{
			AlertTips(){
				PostbirdAlertBox.alert({
				    title: '提示',
				    content: '提示内容主体提示内容主体提示内容主体提示内容主体提示内容主体提示内容主体',
				    okBtn: '好的',
				    contentColor: 'red',
					okBtnColor: "#0e90d2",
				    onConfirm: function () {
				        console.log("回调触发后隐藏提示框");
				    }
				});
			},
			confirmTips(){
				PostbirdAlertBox.confirm({
				    'title': '提示',
				    'content': '离开本页面进行',
				    'okBtn': '好的',
				    'contentColor': 'red',
				    'onConfirm': function () {
				        console.log("OK - 回调触发后隐藏提示框");
				    },
				    'onCancel': function () {
				        console.log("Cancel-回调触发后隐藏提示框");
				    }
				});
			},
			showPrompt(){
				PostbirdAlertBox.prompt({
				    'title': '请输入姓名',
				    'okBtn': '提交',
				    onConfirm: function (data) {
				        console.log("输入框内容是：" + data);
				    },
				    onCancel: function (data) {
				        console.log("输入框内容是：" + data);
				    },
				});
			}
		}
	}
</script>

<style>
	/**
	 * PostbirdAlertBox.js
	 * -    原生javascript弹框插件
	 * Author:  Postbird - http://www.ptbird.cn
	 * License: MIT
	 * Date:    2017-09-23
	 */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box
	}
	
	.postbird-box-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		background-color: rgba(0, 0, 0, 0.2);
		display: block;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none
	}
	
	.postbird-box-container.active {
		display: block
	}
	
	.postbird-box-content {
		display: inline-block;
		width: 400px;
		max-width: 90%;
		background-color: #fff;
		border: solid 1px #f6f6f6;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-top: -100px;
		border-radius: 4px;
		overflow: hidden;
	}
	
	.postbird-box-header {
		width: 100%;
		padding: 10px 15px;
		position: relative;
		font-size: 1.1em;
		letter-spacing: 2px
	}
	
	.postbird-box-close-btn {
		cursor: pointer;
		font-weight: 700;
		color: #000;
		float: right;
		opacity: .5;
		font-size: 1.3em;
		margin-top: -3px;
		display: none
	}
	
	.postbird-box-close-btn:hover {
		opacity: 1
	}
	
	.postbird-box-text {
		display: inline-block;
		width: 100%;
		padding: 0 10% 0.725rem;
		text-align: center;
		line-height: 1.625rem;
		font-size: 1.075rem;
		letter-spacing: 1px;
		overflow:hidden;
	}
	
	.postbird-box-footer {
		width: 100%;
		position: relative;
		bottom: 0;
		padding: 0;
		margin: 0;
		display: flex;
		display: -webkit-flex;
		justify-content: space-around;
		border-top: solid 1px #f6f6f6;
		align-items: flex-end
	}
	
	.postbird-box-footer .btn-footer {
		line-height: 44px;
		border: 0;
		cursor: pointer;
		background-color: #fff;
		color: #0e90d2;
		font-size: 1.075em;
		letter-spacing: 0.25rem;
		transition: background-color .5s;
		-webkit-transition: background-color .5s;
		-o-transition: background-color .5s;
		-moz-transition: background-color .5s;
		outline: 0
	}
	
	.postbird-box-footer .btn-footer:hover {
		background-color: #f6f6f6;
	}
	
	.postbird-box-footer .btn-block-footer {
		width: 100%
	}
	
	.postbird-box-footer .btn-left-footer,
	.postbird-box-footer .btn-right-footer {
		position: relative;
		width: 100%
	}
	
	.postbird-box-footer .btn-left-footer::after {
		content: "";
		position: absolute;
		right: 0;
		top: 0;
		background-color: #f6f6f6;
		height: 100%;
		width: 1px
	}
	
	.postbird-box-footer .btn-footer-cancel {
		color: #333
	}
	
	.postbird-prompt-input {
		width: 100%;
		padding: 0.325rem;
		margin: 0.5rem;
		font-size: 16px;
		outline: 0;
		border: 1px solid #ebebeb;
	}
</style>
