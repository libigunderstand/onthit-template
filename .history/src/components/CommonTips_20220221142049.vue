<!--
 * @Descriptin: 
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-21 14:08:11
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-21 14:20:37
-->
<template>
    <div class="tips">
        <ol>
            <li v-for="item in list" :key="item.no">
                <span>{{item.no}}</span>
                <span>{{item.description}}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    props: ["list"]
}
</script>

<style lang="less" scoped>
.tips {
    
}
</style>