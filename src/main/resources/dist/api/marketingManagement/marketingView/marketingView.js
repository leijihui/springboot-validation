/* 营销总览接口地址
getMkOverview			获取营销总览活动信息
getMkType        		总览活动类型构成饼图
getMkPlan				活动计划柱状图(进行中)
getNewAddMk				最近新增活动列表
getMkDetailed			获取活动基本信息
getMkRanking			活动排行榜
getHotMk				热门活动
getMkTrendAnalysis		活动指标分析
getMkTrend				活动执行客户趋势
getMkPdAnalysis			签约产品数量分析
getMkCstConversion		客户转化率分析
getMkChannelAnalysis	执行渠道分析
getMkInstAnalysis		执行机构分析
getMkChannel			渠道分析
getMkCstFeedback		客户反馈分析
getMkPdMoney			签约产品金额分析
 getMkCstToSaveRate    客户挽回率分析xz
getMkCstToSave			挽回客户分析
 getPdCnt      交易数月趋势xz
 getPdAmt      交易额月趋势xz
getMkAvyRght			活动权益分析
getMkRoute				营销路径分析
getMkCstStatistics		客户转化情况统计
getMkCstStructure		客户结构分析
getMkTypeDict			字典中的活动类型
getAvyIndexDict			字典中的活动指标
getMkABTest				ABTest分析
getMarketingTotalData     营销活动总概括
getMarketingActivityCountByChnl   获取活动渠道活动数
getMAChnlCost       渠道获客情况
*/
export const marketingView = {
  getMkOverview: "/imktm/mkOverview/getMkOverview", //获取营销总览活动信息
  getMkType: "/imktm/mkOverview/getMkType", //总览活动类型构成饼图
  getMkPlan: "/imktm/mkOverview/getMkPlan", //活动计划柱状图(进行中)
  getNewAddMk: "/imktm/mkOverview/getNewAddMk", //最近新增活动列表
  getMkDetailed: "/imktm/mkOverview/getMkDetailed/", //	获取活动基本信息
  getMkRanking: "/imktm/mkOverview/getMkRanking", //活动排行榜
  getHotMk: "/imktm/mkOverview/getHotMk", //热门活动
  getMkTrendAnalysis: "/imktm/mkOverview/getMkTrendAnalysis/", //活动指标分析
  getMkTrend: "/imktm/mkOverview/getMkTrend", //活动执行客户趋势
  getMkPdAnalysis: "/imktm/mkOverview/getMkPdAnalysis/", //签约产品数量分析
  getMkCstToSaveRate: "/imktm/mkOverview/getMkCstToSaveRate/", //客户挽回率分析xz
  getMkCstToSave: "/imktm/mkOverview/getMkCstToSave/", //挽回客户分析
  getPdCnt: "/imktm/mkOverview/getPdCnt/", //交易数月趋势xz
  getPdAmt: "/imktm/mkOverview/getPdAmt/", //交易额月趋势xz

  getMkCstConversion: "/imktm/mkOverview/getMkCstConversion/", //客户转化率分析
  getMkChannelAnalysis: "/imktm/mkOverview/getMkChannelAnalysis/", //执行渠道分析
  getMkInstAnalysis: "/imktm/mkOverview/getMkInstAnalysis/", //执行机构分析
  getMkChannel: "/imktm/mkOverview/getMkChannel/", //渠道分析
  getMkCstFeedback: "/imktm/mkOverview/getMkCstFeedback/", //客户反馈分析
  getMkPdMoney: "/imktm/mkOverview/getMkPdMoney/", //签约产品金额分析

  getMkAvyRght: "/imktm/mkOverview/getMkAvyRght/", //活动权益分析
  getMkRoute: "/imktm/mkOverview/getMkRoute/", //营销路径分析
  getMkCstStatistics: "/imktm/mkOverview/getMkCstStatistics/", //客户转化情况统计
  getMkCstStructure: "/imktm/mkOverview/getMkCstStructure/", //客户结构分析
  getMkTypeDict: "/isys/dict/findDictListByCd/A0014", //字典中的活动类型
  getAvyIndexDict: "/isys/dict/findDictListByCd/A0108", //字典中的活动指标
  getMkABTest: "/imktm/mkOverview/getMkABTest/", //ABTest分析

  getMarketingTotalData: "/imktm/mkOverview/getMarketingTotalData", //营销活动总概括
  getMarketingActivityCountByChnl:
    "/imktm/mkOverview/getMarketingActivityCountByChnl", //获取活动渠道活动数
  getMAChnlCost: "/imktm/mkOverview/getMAChnlCost", //渠道获客情况

  /**
   * XM营销总览的详情接口
   */

  getAvyBscInf: "/imktm/marketingavyeffanl/getAvyBscInf", // 获取活动基本信息

  getnewAvyBscInf: "/ifmkt/marketingavyeffanl/getAvyBscInf", //新获取活动基本信息

  getAvyBrwsNum: "/imktm/marketingavyeffanl/getAvyBrwsNum", // 用户浏览量--浏览数据--客户数

  getnewAvyBrwsNum: "/ifmkt/marketingavyeffanl/getAvyBrwsNum", // 新用户浏览量--浏览数据--客户数

  getAvyBrwsNumTbl: "/imktm/marketingavyeffanl/getAvyBrwsNumTbl", // 用户浏览量--浏览数据--图表

  getnewAvyBrwsNumTbl: "/ifmkt/marketingavyeffanl/getAvyBrwsNumTbl", // 新用户浏览量--浏览数据--图表

  getChnlIndexAnalyseData:
    "/imktm/marketingChnlAnalyse/getChnlIndexAnalyseData", // 渠道指标分析

  getnewChnlIndexAnalyseData:
    "/ifmkt/marketingChnlAnalyse/getChnlIndexAnalyseData", // 新渠道指标分析

  getChnlIndexAnalyseOverview:
    "/imktm/marketingChnlAnalyse/getChnlIndexAnalyseOverview", // 渠道指标总览

  getnewChnlIndexAnalyseOverview:
    "/ifmkt/marketingChnlAnalyse/getChnlIndexAnalyseOverview", // 新渠道指标总览

  getAvySprd: "/imktm/marketingavyeffanl/getAvySprd", // 活动传播分析--活动传播指数

  getnewAvySprd: "/ifmkt/marketingavyeffanl/getAvySprd", //新活动传播分析--活动传播指数

  getAvySprdChnl: "/imktm/marketingavyeffanl/getAvySprdChnl", // 活动传播分析--活动传播渠道

  getnewAvySprdChnl: "/ifmkt/marketingavyeffanl/getAvySprdChnl", // 新活动传播分析--活动传播渠道

  getPsnRnkList: "/imktm/marketingavyeffanl/getPsnRnkList", // 裂变达人排行榜

  getnewPsnRnkList: "/ifmkt/marketingavyeffanl/getPsnRnkList", // 新裂变达人排行榜

  getAvyCostIdx: "/imktm/marketingavyeffanl/getAvyCostIdx", // 活动成本指标

  getnewAvyCostIdx: "/ifmkt/marketingavyeffanl/getAvyCostIdx", // 新活动成本指标

  delAvyHierCnvs: "/imktm/marketingavyeffanl/delAvyHierCnvs/", // 删除层级列表

  delnewAvyHierCnvs: "/ifmkt/marketingavyeffanl/delAvyHierCnvs/", //新删除层级列表

  addOrUpAvyHierCnvs: "/imktm/marketingavyeffanl/addOrUpAvyHierCnvs", // 新增或更新层级转化列表

  addnewOrUpAvyHierCnvs: "/ifmkt/marketingavyeffanl/addOrUpAvyHierCnvs", // new新增或更新层级转化列表

  getOneAvyHierCnvs: "/imktm/marketingavyeffanl/getOneAvyHierCnvs/", // 活动层级转化详情

  getnewOneAvyHierCnvs: "/ifmkt/marketingavyeffanl/getOneAvyHierCnvs/", // 新活动层级转化详情

  getAvyHierCnvs: "/imktm/marketingavyeffanl/getAvyHierCnvs", // 活动层级转化列表

  getnewAvyHierCnvs: "/ifmkt/marketingavyeffanl/getAvyHierCnvs", // 新活动层级转化列表

  getChnlAnalyseRFMInfo: "/imktm/marketingChnlAnalyse/getChnlAnalyseRFMInfo", // 渠道RFM信息

  getnewChnlAnalyseRFMInfo: "/ifmkt/marketingChnlAnalyse/getChnlAnalyseRFMInfo", // 新渠道RFM信息

  getAvySprdRte: "/imktm/marketingavyeffanl/getAvySprdRte", // 活动传播路径

  getnewAvySprdRte: "/ifmkt/marketingavyeffanl/getAvySprdRte", // 新活动传播路径

  getCstValueClassifyInfo:
    "/imktm/marketingChnlAnalyse/getCstValueClassifyInfo", // 查询客户价值分类

  getnewCstValueClassifyInfo:
    "/ifmkt/marketingChnlAnalyse/getCstValueClassifyInfo", // 新查询客户价值分类

  getAvyHierFunnel: "/imktm/marketingavyeffanl/getAvyHierFunnel", // 获取层级转化漏斗图

  getnewAvyHierFunnel: "/ifmkt/marketingavyeffanl/getAvyHierFunnel", // 新获取层级转化漏斗图

  getAvyBscInfAsi: "/imktm/marketingavycstoperate/getAvyBscInfAsi", // 获取运营指标信息

  getnewAvyBscInfAsi: "/ifmkt/marketingavycstoperate/getAvyBscInfAsi", // 新获取运营指标信息

  getAvyCstPctRate: "/imktm/marketingavycstoperate/getAvyCstPctRate", // 获取客户占比分析

  getnewAvyCstPctRate: "/ifmkt/marketingavycstoperate/getAvyCstPctRate", // 新获取客户占比分析

  getAvyCsLsRate: "/imktm/marketingavycstoperate/getAvyCsLsRate", // 获取客户流失率

  getnewAvyCsLsRate: "/ifmkt/marketingavycstoperate/getAvyCsLsRate", // 新获取客户流失率

  getAvyUsrPctRate: "/imktm/marketingavycstoperate/getAvyUsrPctRate", // 用户占比率

  getnewAvyUsrPctRate: "/ifmkt/marketingavycstoperate/getAvyUsrPctRate", // 新用户占比率

  getAvyUsrStrtBhvrPctAnl:
    "/imktm/marketingavycstoperate/getAvyUsrStrtBhvrPctAnl", // 用户启动行为占比分析

  getnewAvyUsrStrtBhvrPctAnl:
    "/ifmkt/marketingavycstoperate/getAvyUsrStrtBhvrPctAnl", // 新用户启动行为占比分析

  getAvyNewRgstUsrPrsvAnl:
    "/imktm/marketingavycstoperate/getAvyNewRgstUsrPrsvAnl", // 新注册用户留存分析

  getnewAvyNewRgstUsrPrsvAnl:
    "/ifmkt/marketingavycstoperate/getAvyNewRgstUsrPrsvAnl", // new新注册用户留存分析

  getAvyCstYrOnYrMoOnMoAnl:
    "/imktm/marketingavycstoperate/getAvyCstYrOnYrMoOnMoAnl", // 客户/用户同比环比分析

  getAvyUsrStrtBhvrYrOnYrMoOnMo:
    "/imktm/marketingavycstoperate/getAvyUsrStrtBhvrYrOnYrMoOnMo", // 用户启动行为同比环比

  getAvyCstValAnl: "/imktm/marketingavycstoperate/getAvyCstValAnl", // 客户价值分析

  analyseInfo: "/imktm/market/theme/analyse/info", // 获取营销主题分析信息

  analyseStatus: "/imktm/market/theme/analyse/info/status", // 获取营销主题分析状态
};
