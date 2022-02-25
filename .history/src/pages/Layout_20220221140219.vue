<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-21 14:02:19
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
                message: "数字工作台前端项目框架"
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