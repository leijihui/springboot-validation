/*  话术库
    scpTree         查询话术库树
    addNewScp       新增话术
    modifyScp       修改话术接口
    delete          删除话术
    details         查询三级话术详情接口
    msgParams       查询参数模板
*/
export const talkingLibrary = {
  scpTree: "/imktr/scope/scpTree", //查询话术库树
  addNewScp: "/imktr/scope/addNewScp", //新增话术
  modifyScp: "/imktr/scope/modifyScp", //修改话术接口
  delete: "/imktr/scope/deleteScp/", //删除话术
  details: "/imktr/scope/details/", //查询三级话术详情接口
  msgParams: "/imktr/scope/msgParams", //查询参数模板
  findChnlUsedCount: "/imktr/scope/findChnlUsedCount/", // 查询使用该一级话术的渠道数
};
