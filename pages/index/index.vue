<template>
	<view class="content">
		{{title}}
	</view>
</template>
<script>
	import { test200 } from "@/apis/test.js"
	export default {
	    data() {
	        return {
	            title: ''
	        }
	    },
	    onLoad() {
	        this.test()
	    },
	    methods: {
	        // 测试获取数据
	        test () {
	            test200().then(res => {
	                this.title = res.data
	            })
	        }
	    }
	}
</script>

<style>

</style>
