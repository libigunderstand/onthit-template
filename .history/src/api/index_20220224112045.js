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