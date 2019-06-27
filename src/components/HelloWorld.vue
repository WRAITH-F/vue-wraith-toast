<template>
  <div class="hello">
    <button @click="AlertTips()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">alert弹窗</button>
    
    <button @click="confirmTips()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">confirm弹窗</button>
    
    <button @click="showPrompt()" style="padding: 8px 16px;border: 1px solid #e2e2e2;background: #0E90D2;color: white;">showPrompt弹窗</button>
  </div>
</template>

<script>
	import {PostbirdAlertBox} from "./wraithToast/wraithToast.js"
export default {
  data () {
    return {
     
    }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("./wraithToast/wraithToast.css");
</style>
