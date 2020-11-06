/*  客户经理管理
 *
 */


/*  客户经理管理
 *
 */
export const customerManagementMessage = {
  // ------------ 工作周报 ------------
  findWkRptInfoListe: '/crbcrm/workreportaction/findWkRptInfoListe', // 工作周报列表查询接口
  saveWorkReport: '/crbcrm/workreportaction/saveWorkReport', // 我的工作周报新增修改接口
  getOneWkRptInf: '/icst/wkRptMng/getOneWkRptInf', // 工作周报新增
  findWkRptInfoList: '/crbcrm/workreportaction/findWkRptInfoList', // 我的工作周报删除
  wk_rpt_info_add: '/crbcrm/workreportaction/wk_rpt_info_add', // 工作周报查询详细
  // getWkRptInfPage: '/icst/wkRptMng/getWkRptInfPage',
  // ------------ 团队管理 ------------
  getTeamTree: '/icst/teamMng/getTeamTree',//获取团队树
  saveOrUpdateTeam: '/icst/teamMng/saveOrUpdateTeam',//保存
  userList: '/isys/user/userList',//用户列表
  listAssistantManager: '/icst/myCustomer/listAssistantManager',//团队成员列表
  getTeamRelList: '/icst/teamMng/getTeamRelList',
  addTeamRel: '/icst/teamMng/addTeamRel',//添加
  deleteTeamByTeamId: '/icst/teamMng/deleteTeamByTeamId/',//删除成员
  deleteTeamRelByTeamRelId: '/icst/teamMng/deleteTeamRelByTeamRelId/',//删除团队
  // ------------ 我的客户互动 ------------
  findMyCstVstInf: '/icst/cstvstaction/findMyCstVstInf', // 查询我的客户互动
  findCstVstInf: '/icst/cstvstaction/findCstVstInf', // 客户互动查询
  saveCstVstRelInf: '/icst/cstvstaction/saveCstVstRelInf', // 客户互动修改
  visitorsList: '/icst/cstvstaction/visitorsList', // 查询客户拜访对象信息
  saveVisitors: '/icst/cstvstaction/saveVisitors', // 新增编辑拜访对象
  deleteVisitors: '/icst/cstvstaction/deleteVisitors', // 拜访对象删除
  findMarketingIntentionInf: '/icst/cstvstaction/findMarketingIntentionInf', // 营销意向查询
  saveMarketingIntentionInf: '/icst/cstvstaction/saveMarketingIntentionInf', // 新增编辑营销意向
  delMarketingIntentionInf: '/icst/cstvstaction/delMarketingIntentionInf', // 营销意向删除
  deleteCstVstRelInf: '/icst/cstvstaction/deleteCstVstRelInf', // 客户互动删除

  // ------------- 新增 -------------
  getWkRptInfPage: '/icst/wkRptMng/getWkRptInfPage',
  // getOneWkRptInf: '/icst/wkRptMng/getOneWkRptInf',
  findTarget: '/icst/wkRptMng/findTarget',
  saveOrUpdateWkRptInf: '/icst/wkRptMng/saveOrUpdateWkRptInf',
  deleteWkRptInfo: '/icst/wkRptMng/deleteWkRptInfo/',
  tree: '/isys/inst/tree', 

  findPersonInstBscInf: '/icst/cstvstaction/findPersonInstBscInf', // 新增选择客户-对私
  findPublicInstBscInf: '/icst/cstvstaction/findPublicInstBscInf'// 新增选择客户-对公

}

