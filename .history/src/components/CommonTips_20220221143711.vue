<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-21 14:08:11
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-21 14:36:17
-->
<template>
	<div class="tips">
		<p>
			For a guide and recipes on how to configure / use this project,<br />
			check out the
			README.md.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
					target="_blank"
					rel="noopener"
					>babel</a
				>
			</li>
			<li>
				<a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
					rel="noopener"
					>eslint</a
				>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
			<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
			<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
			<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
			<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
		</ul>
		<h3>技术栈</h3>
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
			padding: 0;
		}
		li {
			display: inline-block;
			margin: 0 10px;
		}
		a {
			color: #42b983;
		}
	}
</style>
