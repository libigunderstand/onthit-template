const { resolve } = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const production = process.env.NODE_ENV === "production";

// plugins配置
const plugins = [];

if (production) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {

    lintOnSave: true,

    // 输出打包的文件夹名称
    outputDir: "ControlLogs",

    // 输出打包静态资源目录

    assetsDir: "./",

    publicPath: "./",

    configureWebpack: {
        plugins: plugins,
        // 路径别名
        resolve: {
            alias: {
                "@": resolve("src")
            }
        }
    },
    devServer: {
        proxy: {
            "/api": {
                target: "http://10.1.1.61:8089/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/api": "/"
                    // pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
                    // pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
                }
            },
        }
    }
};