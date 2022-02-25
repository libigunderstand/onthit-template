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
