/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-23 14:13:06
 */
import $http from "@/utils/httpRequest";

export default {
    // demo
    get_table_data: function (param) {
        return new Promise((resolve, reject)=> {
            let response = $http.get(
                "/test/getdata",
                param
            );
            resolve(response);
        });
    }
};