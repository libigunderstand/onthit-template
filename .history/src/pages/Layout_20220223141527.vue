<!--
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-23 14:15:27
-->
<template>
    <div class="layout">
        <h1>数字工作台前端项目框架</h1>
        <common-tips :list="tipList" :descList="description"></common-tips>
    </div>
</template>

<script>
import CommonTips from "@/components/CommonTips";
import { reactive, toRefs } from "vue";
export default {
    name: "Layout",
    components: {
        CommonTips
    },
    setup () {
        const state = reactive(
            {
                message: "数字工作台前端项目框架",
                tipList: [
                    {
                        no: 1,
                        description: "使用该框架前一定先预览README.md项目说明."
                    },
                    {
                        no: 2,
                        description: "该框架的代码约束及格式化风格为elsint+prettier."
                    },
                    {
                        no: 3,
                        description: "在使用过程中如果有任何问题, 请联系数字工作台."
                    }
                ],
                description: [
                    {
                        no: 1,
                        description: "脚手架搭建的项目模板包含较为完善的目录结构, 勿动"
                    },
                    {
                        no: 2,
                        description: "代码规范会强制使用vue3.0语法."
                    },
                    {
                        no: 3,
                        description: "其他代码规范后续会做补充."
                    },
                ]
            }
        );

        return {
            ...toRefs(state)
        };
    }
};
</script>

<style lang="less">
.layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        margin-bottom: 40px;
    }
}
</style>