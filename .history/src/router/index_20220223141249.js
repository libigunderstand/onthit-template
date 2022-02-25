/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:10:22
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-23 14:12:48
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Layout",
        component: () => require.ensure([], (require) => require("@/pages/Layout")),
        children: [

        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
