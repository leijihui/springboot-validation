export const guestFilter = {
  getCstGrp: "/icstp/CustomerScreen/getCstGrpById/", // 根据客户筛选模板编号查询客群信息
  getCustomerGroup: "/icstp/CustomerScreen/getCustomerGroup", // 查询所有客群信息
  deleteCustomerGroup: "/icstp/CustomerScreen/deleteCustomerGroup/", // 根据客户筛选模板编号删除客群信息
  saveCseSelScreen: "/icstp/lblSelection/saveCseSelScreen", // 客群筛选模板及规则保存接口
  cstMsgs: "/icstp/lblSelection/cstMsgs", // 客群所属客户查询接口
  findCstMsgsById: "/icstp/lblSelection/findCstMsgsById", // 根据模板id查询客群客户列表
  getCstGrpGndAls: "/icstp/CustomerScreen/getCstGrpGndAls/", // 获取客群男女分布
  getCstGrpPdAls: "/icstp/CustomerScreen/getCstGrpPdAls/", // 获取客群产品分布信息
  getCstGrpLblAls: "/icstp/CustomerScreen/getCstGrpLblAls/", // 获取客群标签分析
  getCstGrpAgeAls: "/icstp/CustomerScreen/getCstGrpAgeAls/", // 获取客群年龄分析

  getCstRelUpdateStatus: "/icstp/lblSelection/getCstRelUpdateStatus", // 查询客户关系更新状态

  export: "/icstp/lblSelection/cst/group/export", // 客群导出

  status: "/icstp/lblSelection/cst/group/export/status", // 获取客群导出状态

  reset: "/icstp/lblSelection/cst/group/export/status/reset", // 重置客群导出状态

  findLoginManager: "/icstp/customerQuery/findLoginManager", //获取发送审批人
};
