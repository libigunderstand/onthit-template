/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:23:05
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-18 10:21:54
 */
module.exports = {
	root: true,
	extends: ["alloy", "alloy/vue"],
	parserOptions: {
		// "parser": "babel-eslint"
	},
	rules: {
		// 不强制数组方法的回调函数中一定有 return 语句, 该判断机制会将判断语句内的return忽略;
		"array-callback-return": 0,
		// 强制在 function 的左括号之前使用一致的空格
		"space-before-function-paren": 2,
		// 要求 switch 语句中有 default 分支
		"default-case": 2,
		// 禁止变量声明与外层作用域的变量同名
		"no-shadow": 2,
		// 强制在对象字面量的属性中键和值之间使用一致的间距
		"key-spacing": 2,
		// 要求构造函数首字母大写
		"new-cap": 2,
		// 强制调用无参构造函数时有小括号
		"new-parens": 2,
		// 强制使用一致的反勾号、双引号或单引号
		"quotes": 2,

		// template标签和属性间不要有多余的空格
		"vue/no-multi-spaces": [
			"error",
			{
				"ignoreProperties": false
			}
		],

		// template标签属性名与属性值的=前后不要有空格
		"vue/no-spaces-around-equal-signs-in-attribute": ["error"],

		// 必须使用vue3 composition的语法
		"vue/component-api-style": [
			"error",
			["script-setup", "composition"] // "script-setup", "composition", "composition-vue2", or "options"
		],

		// vue组件中三大标签排序必须保持一致
		"vue/component-tags-order": [
			"error",
			{
				"order": ["template", "script", "style"]
			}
		],

		// 组件名称必须与文件名称保持一致
		"vue/match-component-file-name": [
			"error",
			{
				"extensions": ["jsx"],
				"shouldMatchCase": false
			}
		],

		// 组件必须包含name属性
		"vue/require-name-property": ["error"],

		// 不使用分号
		"semi": ["error", "always"],

		// 不能有声明后未被使用的变量
		"no-unused-vars": ["error", { vars: "all", args: "after-used" }],

		// 一行结束后面不要有空格
		"no-trailing-spaces": "error"
	}
};
