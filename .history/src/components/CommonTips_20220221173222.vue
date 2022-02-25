<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-21 14:08:11
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-21 17:31:40
-->
<template>
	<div class="tips">
		<p>
			For a guide and recipes on how to configure / use this project,<br />
			check out the README.md.
		</p>
		<h3>tips:</h3>
		<ul class="tips-list">
			<li v-for="item in list" :key="item.no">
				<span>{{item.no}}、</span>
				<span>{{item.description}}</span>
			</li>
		</ul>
		<h3>说明:</h3>
		<ul>
			<li>脚手架搭建的项目包含较为完善的目录结构</li>
		</ul>
		<h3>技术栈:</h3>
		<ul>
			<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router@4.0.12</a></li>
			<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex@4.0.2</a></li>
			<li>
				<a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener">element-plus@2.0.2</a>
			</li>
            <br/>
            <br/>
			<li><a href="https://www.yuque.com/rs385i/yzbt72/kt3iq2" target="_blank" rel="noopener">viser-vue@2.4.8</a></li>
			<li><a href="http://www.axios-js.com/" target="_blank" rel="noopener">axios@0.26.0</a></li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ["list"]
	};
</script>

<style lang="less" scoped>
	.tips {
		h3 {
			margin: 40px 0 0;
		}
		ul {
			list-style-type: none;
			padding: 14px 0 0 20px;
		}
        .tips-list {
            display: flex;
            flex-direction: column;
            li {
                margin: 4px 0;
            }
        }
		li {
			display: inline-block;
			margin: 0 10px 0 0;
		}
		a {
			color: #42b983;
		}
	}
</style>
