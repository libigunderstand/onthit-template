/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:19:10
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-17 18:18:21
 */
// 导入axios
import axios from "axios";

// 公共路由(网络请求地址)
// axios.defaults.baseURL = 'http://localhost:9000/';

// 请求响应超时时间
axios.defaults.timeout = 15000;

// 封装自己的get/post方法
export default {
    get: function (path = "", data = {}) {
        return new Promise(((resolve, reject) => {
            axios.get(path, {
                params: data
            })
            .then((response) => {
                // 按需求来，这里我需要的是response，所以返回response，一般直接返回response
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        }));
    },
    post: function (path = "", data = {}) {
        return new Promise(((resolve, reject) => {
            axios.post(
                path,
                data
            )
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
        }));
    }
};
