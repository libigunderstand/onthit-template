/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-23 14:16:20
 */
import { createApp } from "vue";
import router from "@/router/index.js";
import store from "@/store/index.js";
import * as echarts from "echarts";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./assets/reset.css";
import App from "./App.vue";
import * as ElIconModules from "@element-plus/icons-vue";

const app = createApp(App);

// 统一导入el-icon图标
Object.keys(ElIconModules).forEach(ele=> {
    app.component(ele, ElIconModules[ele]);
});
app.use(router);

app.use(store);

// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

app.use(ElementPlus, { zIndex: 3000, locale: zhCn });


app.mount("#app");
