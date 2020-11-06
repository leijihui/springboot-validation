export const flexMarketingActivity = {
  list: '/ifmkt/flexMarketing/list', // 灵活营销活动详情列表
  loadFlexibleAvy: '/ifmkt/flexMarketing/loadFlexibleAvy', // 加载灵活营销活动
  saveFlexibleAvy: '/ifmkt/flexMarketing/saveFlexibleAvy', // 保存灵活营销活动
  delFlexibleAvy: '/ifmkt/flexMarketing/delFlexibleAvy', // 灵活营销活动列表删除
  updateAvySt: '/ifmkt/flexMarketing/updateAvySt', // 灵活营销活动列表更新状态

  findMarketingBasicInfo: '/ifmkt/flexMarketing/findMarketingBasicInfo/', // 查看营销活动基本信息（开始）
  saveMarketingBasicInfo: '/ifmkt/flexMarketing/saveMarketingBasicInfo', // 新增、更新营销活动基本信息（开始）
  getTrgrAvyList: '/ifmkt/flexMarketing/getTrgrAvyList', // 获取触发关联活动列表

  listCustomerGroup: '/ifmkt/cstgrp/listCustomerGroup', // 查询所有客群信息（客群）
  getCstGrpById: '/ifmkt/cstgrp/getCstGrpById/', // 根据客筛编号查询客群信息规则（客群）
  saveAvyCstGrpInf: '/ifmkt/cstgrp/saveAvyCstGrpInf', // 保存活动客群信息（客群）
  getAvyCstCrpInfByNodeId: '/ifmkt/cstgrp/getAvyCstCrpInfByNodeId/', // 获取活动客群信息（客群）
  csLsImprBtInf: '/icst/csLsMtch/csLsImprBtInf', // 获取白名单（客群）

  chnlStoreTree: '/imktr/channel/chnlStoreTree', // 渠道库树查询（渠道）
  scpTree: '/imktr/scope/scpTree', // 话术树查询（渠道）
  listKerlalaActInf: '/ifmkt/kerlala/listKerlalaActInf', // 落地页（渠道）
  saveAvyChnlInf: '/ifmkt/chnl/saveAvyChnlInf', // 保存活动渠道信息（渠道）
  getAvyChnlInfByNodeId: '/ifmkt/chnl/getAvyChnlInfByNodeId/', // 获取活动渠道信息（渠道）
  
  getAvyEVInfByNodeId: '/ifmkt/ev/getAvyEVInfByNodeId/', // 获取活动渠道信息（事件）
  getEventTree: '/imktr/events/getEventTree', // 获取事件树（事件）
  saveAvyEVInf: '/ifmkt/ev/saveAvyEVInf', // 保存活动事件信息（事件）

  selectAllFtrVal: '/icstp/ftrItmInfo/selectAllFtrVal', // 特征项值信息查询（达标）

  getBenefitsTree: '/imktr/benefits/getBenefitsTree', // 获取权益树（权益）

  getPdTree: '/ipdt/product/getPdTree', // 获取产品树（产品）
  
  idxTree: '/ifmkt/trgt/idxTree', // 获取目标树（目标）

  findDictListByCd: '/isys/dict/findDictListByCd/', // 根据字典类型获取字典列表
  findAvySt: '/ifmkt/flexMarketing/findAvySt', // 获取活动审批状态
}
