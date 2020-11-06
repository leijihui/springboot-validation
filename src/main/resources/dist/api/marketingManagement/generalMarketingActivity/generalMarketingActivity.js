/* 常规营销任务
mktActList         常规营销活动分页详情列表
getAprvInfList     获取常规任务审批意见
findAvyStByCd      		获取活动状态代码
findcmAvyTpCdByCd  		获取营销活动类型代码
delRglMktAvy            删除常规营销活动
addRegulerCmAvy    		新增营销活动详情
getRegulerCmAvyInf 		查询营销活动详情
uptRegulerCmAvy	     	更新营销活动详情
CmAvyCommit		    	提交营销任务详情
findPdInfList      		产品详情列表
getPdSelect		     	查询产品下拉框
getMarketingThemeList	营销列表
getInstTree				获取机构信息树
getCustomerGroupSelect  获取客群信息
getEventTree  			获取事件树
findBenefitsTree		获取权益树
getLvlThreeScpList		获取三级的话术
findDictListByCd		获取活动类型
findChnlList            执行渠道树列表
findThreeChnlList		查询三级渠道方法列表
 findSecChnlList 渠道库树查询
 findCstManager  客户经理渠道
 cmAvyCommit  提交营销任务详情
*/
export const generalMarketingActivity = {
  mktActList: "/imktm/regularMktAct/mktActList", //常规营销活动分页详情列表
  getAprvInfList: "/imktm/regularMktAct/getAprvInfList", //获取常规任务审批意见
  findAvyStByCd: "/imktm/regularMktAct/findAvyStByCd", //获取活动状态代码
  findcmAvyTpCdByCd: "/imktm/regularMktAct/findcmAvyTpCdByCd", //获取营销活动类型代码
  delRglMktAvy: "/imktm/regularMktAct/delRglMktAvy", //删除常规营销活动
  addRegulerCmAvy: "/imktm/regularMktAct/addRegulerCmAvy", //新增营销活动详情
  getRegulerCmAvyInf: "/imktm/regularMktAct/getRegulerCmAvyInf/", //查询营销活动详情
  uptRegulerCmAvy: "/imktm/regularMktAct/uptRegulerCmAvy", //更新营销活动详情
  CmAvyCommit: "/imktm/regularMktAct/CmAvyCommit/", //提交营销任务详情
  findPdInfList: "/imktm/regularMktAct/findPdInfList", //	产品详情列表
  getPdSelect: "/imktm/regularMktAct/getPdSelect/", //查询产品下拉框
  getMarketingThemeList: "/imktm/marketingTheme/getMarketingThemeList", //营销列表
  getInstTree: "/imktm/regularMktAct/getInstTree", //获取机构信息树
  getCustomerGroupSelect: "/imktm/regularMktAct/getCustomerGroupSelect", //获取客群信息
  getEventTree: "/imktm/regularMktAct/getEventTree", //获取事件树
  findBenefitsTree: "/imktm/regularMktAct/findBenefitsTree", //获取权益树
  getLvlThreeScpList: "/imktm/regularMktAct/getLvlThreeScpList", //获取三级的话术
  findDictListByCd: "/isys/dict/findDictListByCd/A0014", //获取活动类型
  findDictInst: "/isys/dict/findDictListByCd/", //
  findThreeChnlList: "/imktm/regularMktAct/findThreeChnlList/", //查询三级渠道方法列表
  findPshTp: "/imktm/regularMktAct/findPshTp/3",//下拉列表数据
  findSecChnlList: "/imktm/regularMktAct/findSecChnlList", //渠道库树查询
  findCstManager: "/imktm/regularMktAct/findCstManager", //客户经理渠道
  cmAvyCommit: "/imktm/regularMktAct/cmAvyCommit", //提交营销任务详情
  getCmpnRsltCdTree: "/imktm/regularMktAct/getCmpnRsltCdTree", // 获取营销结果代码树
  csLsImprBtInf: "/imktm/regularMktAct/csLsImprBtInf", // 查询客户名单导入批次信息
  getAvyForecast: "/imktm/regularMktAct/getAvyForecast", // 活动预计参加人数
  getKerlalaAvyInf: "/imktm/kerlalaH5/getKerlalaAvyInf", // 获取客拉拉页面列表
  getKerlalaH5AvyInf: "/imktm/kerlalaH5/getKerlalaH5AvyInf", // 获取客拉拉页面列表
  addOrUpRegulerCmAvy: "/imktm/regularMktAct/addOrUpRegulerCmAvy", // 活动编排信息新增
  getRuleList: "/imktm/regularMktAct/getRuleList", // 获取规则名单列表
  getTrgrAvyList: "/imktm/regularMktAct/getTrgrAvyList", // 获取触发关联活动列表
  getTue0rFseForAvyByH5OrKe: "/imktm/regularMktAct/getTue0rFseForAvyByH5OrKe/", // 校验是否存在H5或客拉拉活动类型活动
  findChnlList: "/imktm/regularMktAct/findChnlList", // 获取轮次渠道列表
  findnewChnlList: "/ifmkt/marketingActivity/findChnlList",
  findScpListByPshCtlg: "/imktm/regularMktAct/findScpListByPshCtlg", // 获取对应话术列表
  getCmAvyScpCon: "/imktm/regularMktAct/getCmAvyScpCon/", // 获取活动话术内容信息
};
