/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:10:42
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-17 16:55:45
 */
import Vuex from "vuex";

const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");

  const value = modulesFiles(modulePath);

  modules[moduleName] = value.default;

  return modules;

}, {});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: modules
});
