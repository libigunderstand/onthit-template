/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-16 11:10:42
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-17 16:55:26
 */

import Api from "@/api/index";

const state = {

};

const mutations = {

};
const actions = {
    get_LoginLogsList: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_LoginLogsList(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_allUsers: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_allUsers(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_GroupsChild: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_GroupsChild(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_allGroups: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_allGroups(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_LoginLogsPercent: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_LoginLogsPercent(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_AIMSLogsData: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_AIMSLogsData(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_AllScenes: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_AllScenes(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_VisitedData: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_VisitedData(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },

    get_VisitedPerData: async function ({ commit }, param) {
        try {
            let response = await Api.loginlogs.get_VisitedPerData(param);
            return response.data;
        } catch (error) {
            throw("获取数据失败！");
        }
    },
};

export default {
    state,
    mutations,
    actions
};