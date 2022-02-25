<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-21 14:07:17
-->
<template>
    <div class="layout">
        <h1>数字工作台前端项目框架</h1>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
    name: "Layout",
    setup () {
        const state = reactive(
            {
                message: "数字工作台前端项目框架",
                tipList: [
                    {
                        no: 1,
                        description: "使用该框架前一定先预览README.md项目说明"
                    },
                    {
                        no: 2,
                        description: "该框架的代码约束及格式化风格为elsint+prettier"
                    },
                    {
                        no: 3,
                        description: "在使用过程中如果有任何问题,请联系数字工作台"
                    },
                ]
            }
        )
    }
};
</script>

<style lang="less">
.layout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>