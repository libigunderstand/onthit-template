/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:10:22
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-18 10:30:13
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/controlLogs"
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
