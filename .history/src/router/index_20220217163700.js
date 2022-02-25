/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:10:22
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-17 16:13:34
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/controlLogs"
    },
    {
        path: "/",
        name: "Layout",
        component: () => require.ensure([], (require) => require("@/pages/Layout")),
        children: [
            {
                path: "/controlLogs",
                name: "controlLogs",
                component: () => require.ensure([], (require) => require("@/pages/ControlLogs"))
            },
            {
                path: "/loginPercent",
                name: "loginPercent",
                component: () => require.ensure([], (require) => require("@/components/loginPercent/LoginPercent"))
            },
            {
                path: "/visitedPercent",
                name: "visitedPercent",
                component: () => require.ensure([], (require) => require("@/components/visitedPercent/VisitPerCard"))
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
