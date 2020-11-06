export const marketingActivityManagement = {
  getMarketingActivityList: 'imktm/marketingActivity/getMarketingActivityList', // 营销活动列表
  getflexibleList:'/ifmkt/marketingActivity/getMarketingActivityList',//获取灵活营销活动列表
  sendactive:'/ifmkt/marketingActivity/releaseMarketingActivity', //新活动发布接口
  backactive:'/ifmkt/marketingActivity/returnMarketingActivity',//新活动退回接口
  stopactive:'/ifmkt/marketingActivity/pauseMarketingActivity',//新活动暂停
  plantactive:'/ifmkt/marketingActivity/stopMarketingActivity',//新活动终止
  stopMarketingActivity: 'imktm/marketingActivity/stopMarketingActivity', // 终止活动
  returnMarketingActivity: 'imktm/marketingActivity/returnMarketingActivity', // 退回活动任务
  releaseMarketingActivity: 'imktm/marketingActivity/releaseMarketingActivity', // 发布活动任务
  getCstForMarketingActivity:'imktm/marketingActivity/getCstForMarketingActivity', // 营销活动追踪客户信息,
  getTrackForMarketingActivity:'imktm/marketingActivity/getTrackForMarketingActivity/', // 营销活动追踪活动参数
  pauseMarketingActivity: 'imktm/marketingActivity/pauseMarketingActivity', // 暂停活动
  exportMKCstExcel: 'imktm/regularMktAct/exportMKCstExcel', // 导出excel
  getAvyTargetInfo: 'imktm/marketingActivity/getAvyTargetInfo/', // 获取活动指标信息
  updateBIndStatus: 'imktm/marketingActivity/updateBIndStatus', // 更新活动客户拉黑状态
  getPushCstDetailList: 'imktm/marketingActivity/getPushCstDetailList', // 获取推送客户明细列表
  getPushCstDict: '/isys/dict/findDictListByCd/XM045', // 获取推送结果
  getnewAvyTargetInfo: 'ifmkt/marketingActivity/getAvyTargetInfo/', // 新获取活动指标信息
  getnewPushCstDetailList: 'ifmkt/marketingActivity/getPushCstDetailList', // 新获取推送客户明细列表
  getnewCstForMarketingActivity:'ifmkt/marketingActivity/getCstForMarketingActivity', // 新营销活动追踪客户信息,

}
