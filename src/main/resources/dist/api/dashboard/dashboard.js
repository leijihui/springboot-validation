/*  工作台图表接口
    creditBizStatis          近6个月信用卡业务统计(管理员)
    creditAddUpBizNum        信用卡累计业务量(管理员)
    cmAvyExecStatus          获取近6个月营销活动执行情况(管理员)
    usrStatistics            系统运行情况
    creditSizeStatis         近6个月信用卡规模统计(管理员)
    custBizAcross            客户业务交互统计

	cmAvyExecStatus			 获取近6个月营销活动执行情况
	cmAvyExecStatusM		 客户经理-获取近6个月营销活动执行情况
	creditBizStatis			 近6个月信用卡业务统计
	creditBizStatisM		 客户经理-近6个月信用卡业务统计
	creditAddUpBizNum		 信用卡累计业务量
	creditAddUpBizNumM		 客户经理-信用卡累计业务量
	creditSizeStatis		 近6个月信用卡规模统计
	creditSizeStatisM		 客户经理-近6个月信用卡规模统计
	custBizAcross			 客户业务交叉情况
	custBizAcrossM			 客户经理-客户业务交叉情况

	XM接口
	getCmAvyTpAnalysis    营销活动状态分布
	cstTrendAnalysis      用户趋势分析
	getRgstBndgAnalysis   注册、绑卡情况分析
	getPdTxnAmtAnalysis   产品交易额
	getAvyPcpNo           获取首页活动参与人数
	getIngAvyNo           获取首页执行活动数
	getCstNo              获取首页客户数
	gtasksNum             获取首页代办数
*/
export const dashboard = {
  // creditBizStatis:'/iwkb/graphForManager/creditBizStatis',
  // creditAddUpBizNum:'/iwkb/graphForManager/creditAddUpBizNum',
  // cmAvyExecStatus:'/iwkb/graphForManager/cmAvyExecStatus',
  // usrStatistics:'/iwkb/graphForManager/usrStatistics',
  // creditSizeStatis:'/iwkb/graphForManager/creditSizeStatis',
  // custBizAcross:'/iwkb/graphForManager/custBizAcross',

  cmAvyExecStatus: "/iwkb/graph/cmAvyExecStatus", //获取近6个月营销活动执行情况
  cmAvyExecStatusM: "/iwkb/graph/cmAvyExecStatusM", //客户经理-获取近6个月营销活动执行情况
  creditBizStatis: "/iwkb/graph/creditBizStatis", //近6个月信用卡业务统计
  creditBizStatisM: "/iwkb/graph/creditBizStatisM", //客户经理-近6个月信用卡业务统计
  creditAddUpBizNum: "/iwkb/graph/creditAddUpBizNum", //信用卡累计业务量
  creditAddUpBizNumM: "/iwkb/graph/creditAddUpBizNumM", //客户经理-信用卡累计业务量
  creditSizeStatis: "/iwkb/graph/creditSizeStatis", //近6个月信用卡规模统计
  creditSizeStatisM: "/iwkb/graph/creditSizeStatisM", //客户经理-近6个月信用卡规模统计
  custBizAcross: "/iwkb/graph/custBizAcross", //客户业务交叉情况
  custBizAcrossM: "/iwkb/graph/custBizAcrossM", //客户经理-客户业务交叉情况
  // XM网金数字化首页接口

  getCmAvyTpAnalysis: "/iwkb/graph/getCmAvyTpAnalysis", // 营销活动状态分布
  cstTrendAnalysis: "/iwkb/graph/cstTrendAnalysis", // 用户趋势分析
  getRgstBndgAnalysis: "/iwkb/graph/getRgstBndgAnalysis", // 今日注册数
  getRgstAnalysisNum: "/iwkb/graph/getRgstAnalysisNum", //注册、绑卡情况分析
  getBndgAnalysisNum: "/iwkb/graph/getBndgAnalysisNum", // 今日绑卡数
  getPdTxnAmtAnalysis: "/iwkb/graph/getPdTxnAmtAnalysis", // 产品交易额
  getAvyPcpNo: "/iwkb/graph/getAvyPcpNo", //未调用
  getIngAvyNo: "/iwkb/graph/getIngAvyNo", //未调用
  getCstNo: "/iwkb/graph/getCstNo", //未调用 //未调用
  gtasksNum: "/iwkb/gtasks/gtasksNum", //未调用
  /**
   * CRM首页图表
   */

  getCstGrdDstb: "/iwkb/graphForCrm/getCstGrdDstb", // 客户等级分布

  getCstGrdDstbList: "/iwkb/graphForCrm/getCstGrdDstbList", // 等级客户列表

  getCstHoldPdDstb: "/iwkb/graphForCrm/getCstHoldPdDstb", // 客户持有产品金额分布

  getCstHoldPDDstbList: "/iwkb/graphForCrm/getCstHoldPDDstbList", // 产品金额客户列表

  getCstIncrTrnd: "/iwkb/graphForCrm/getCstIncrTrnd", // 客户增长趋势

  getCstFAstRnk: "/iwkb/graphForCrm/getCstFAstRnk", // 客户金融资产排名

  getInstFAstRnk: "/iwkb/graphForCrm/getInstFAstRnk", // 机构金融资产排名

  getCstMgrRnkSttn: "/iwkb/graphForCrm/getCstMgrRnkSttn", // 客户经理排名

  getExstSalePdList: "/iwkb/graphForCrm/getExstSalePdList", // 在售产品

  getMyCstMgrRnkInf: "/iwkb/graphForCrm/getMyCstMgrRnkInf", // 获取我的客户经理排名

  getJurisInsCstMgrRnkInf: "/iwkb/graphForCrm/getJurisInsCstMgrRnkInf", // 获取辖内客户经理排名

  getHeadInsCstMgrRnkInf: "/iwkb/graphForCrm/getHeadInsCstMgrRnkInf", // 获取总行客户经理排名
};
