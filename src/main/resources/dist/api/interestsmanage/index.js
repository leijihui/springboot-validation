// 管辖查询
export const fund = {
    TaskTypeDict: '/irmg/dict/getTaskTypeDict', // 获取范围字典
    asset:'/irmg/fundManage/findFundCoreMsg',//资金概况核心信息
    maplist:'/irmg/fundManage/findRightsConsumeMsg',//权益列表
    capientry:'/irmg//fundManage/findParmList',//资金列表
    scenario:'/irmg/dict/getRightsTypeDict',//权益场景
    addscen:'/irmg/fundManage/addFndsAply',//资金入账新增
    updateFndsAplySt:'/irmg/fundManage/updateFndsAplySt',//申请状态更新
    detail:'/irmg/fundManage/findFundInfo',//资金详情接口
  }