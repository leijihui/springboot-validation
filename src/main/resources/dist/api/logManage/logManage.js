/*  日志管理
    getLogManagePage   接口日志 条件查询
    getAppOptions      获取应用服务下拉选项数据
    getChannelOptions  获取渠道下拉选项数据
*/
export const logManage = {
  getLoginLogPage: "/isys/apiLog/findApiLogPage", //接口日志 条件查询
  getAppOptions: "/isys/app/getAppOptions", //获取应用服务下拉选项数据
  getChannelOptions: "/isys/channel/getChannelOptions", //获取渠道下拉选项数据
  findUsrSsnInf: "/isys/user/findUsrSsnInf", // 登录日志
};
