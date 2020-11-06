/* 流程管理
getNodeTypeDict         获取下拉框的节点
getWorkFlowList         获取流程信息列表
saveWorkFlow            保存流程信息
getWorkFlowInfo         查询流程信息
submit                  执行脚本
*/
export const processConfiguration = {
  getNodeTypeDict: "/isys/dict/findDictListByCd/XM041", //获取下拉框的节点
  getWorkFlowList: "/isys/workflow/getWorkFlowList", //获取流程信息列表
  saveWorkFlow: "/isys/workflow/saveWorkFlow", //保存流程信息
  getWorkFlowInfo: "/isys/workflow/getWorkFlowInfo", //查询流程信息
  submit: "/isys/execute/submit", //执行脚本
  findWorkFlowBsnTpCfgList: "/isys/workflow/findWorkFlowBsnTpCfgList", // 获取业务类型
};
