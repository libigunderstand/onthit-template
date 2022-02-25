/*
 * @Descriptin:
 * @Version: 0.1
 * @Autor: Gary
 * @Date: 2022-02-18 10:24:25
 * @LastEditors: Gary
 * @LastEditTime: 2022-02-23 14:15:17
 */
const Mock = require("mockjs");
const test1 = Mock.mock({
    "logsData|100-900": [
        {
            "behavior|1": ["模型变更", "其他"],
            "createdBy|1": ["李广锐", "王泽临", "赵路宁", "杨凯", "李达", "王紫薇", "赵凯文"],
            "levelTwoOrganization|1": ["化工分部", "卷包部门", "制丝部门", "其他部门"],
            "levelThreeOrganization|1": ["裂解车间", "制造车间", "其他车间"],
            "device|1": ["轻油装置", "轻石脑油装置", "汽提联合", "柴油加氢", "围墙"],
            "operationDescription|1": ["上传轻油装置模型成功", "上传轻石脑油装置模型成功", "上传汽提联合模型成功", "上传浆态床渣油加氢装置模型成功", "删除围墙模型成功"],
            "gmtCreated": "@datetime(yyyy-MM-dd HH:mm:ss)",
            "ip": "192.168.1.1"
        }
    ]
});
module.exports = test1;