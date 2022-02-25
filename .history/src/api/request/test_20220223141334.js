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