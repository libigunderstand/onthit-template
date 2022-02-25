/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-24 11:20:45
 */
const modulesFiles = require.context("./request", true, /\.js$/);

const modules = modulesFiles.keys().reduce((module, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");

    const value = modulesFiles(modulePath);

    module[moduleName] = value.default;

    return module;

}, {});

export default {
    ...modules
};