/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:19:10
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-18 10:51:47
 */
// 导入axios
import axios from "axios";

const httpService = axios.create({
    // url前缀-'https://some-domain.com/api/'
    baseURL: process.env.BASE_API, // 需自定义
    // 请求超时时间
    timeout: 5000 // 需自定义
});

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
