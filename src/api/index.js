/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:11:09
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-17 17:57:10
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