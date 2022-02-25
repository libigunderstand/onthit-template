/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:19:10
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-18 10:57:36
 */
// 导入axios
import axios from "axios";

const httpService = axios.create({
    // url前缀-'https://192.168.1.187/api/'
    baseURL: process.env.BASE_API, // 需自定义
    // 请求超时时间
    timeout: 5000 // 需自定义
});

// request拦截器
httpService.interceptors.request.use(
    config => {
        // 根据条件加入token-安全携带
        if (true) { // 需自定义
            // 让每个请求携带token
            config.headers['User-Token'] = '';
        }
        return config;
    }, 
    error => {
        // 请求错误处理
        Promise.reject(error);
    }
)

// respone拦截器
httpService.interceptors.response.use(
    response => {
        // 统一处理状态
        return Promise.reject({
            status: 400,
            message: res.message
        });
    },
    // 处理处理
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '错误请求';
                    break;
                case 401:
                    error.message = '未授权，请重新登录';
                    break;
                case 403:
                    error.message = '拒绝访问';
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源';
                    break;
                case 405:
                    error.message = '请求方法未允许';
                    break;
                case 408:
                    error.message = '请求超时';
                    break;
                case 500:
                    error.message = '服务器端出错';
                    break;
                case 501:
                    error.message = '网络未实现';
                    break;
                case 502:
                    error.message = '网络错误';
                    break;
                case 503:
                    error.message = '服务不可用';
                    break;
                case 504:
                    error.message = '网络超时';
                    break;
                case 505:
                    error.message = 'http版本不支持该请求';
                    break;
                default:
                    error.message = `未知错误${error.response.status}`;
            }
        } else {
            error.message = "连接到服务器失败";
        }
        return Promise.reject(error);
   }
)

// 封装自己的get/post方法
export default {
    get: function (path = "", data = {}) {
        return new Promise(((resolve, reject) => {
            httpService(path, {
                method: "GET",
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
