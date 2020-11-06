// 管辖查询
export const guestMsg = {
  getAnniversary: "/icst/myCustomer/selectCustAnvrsById/", // 获取客户纪念日信息

  editAnniversary: "/icst/myCustomer/upCustomerAnvrs", // 客户纪念日修改

  getRelivance: "/icst/myCustomer/selectCustRelationById/", // 获取客户关联方信息



  getLinkStyleMsg: "/icst/myCustomer/selectCustContactById/",  // 客户联系信息
  selectCrmCustContactById: "/icst/myCustomer/selectCrmCustContactById/", // 客户联系方式信息

  selectCrmCustAddrById: "/icst/myCustomer/selectCrmCustAddrById/", // 客户联系地址信息
  selectCustAddrById: "/icst/myCustomer/selectCustAddrById/", // 客户视图-客户信息-联系地址,
  selectCustContactById: "/icst/myCustomer/selectCustContactById/", // 客户视图-客户信息-联系方式

  updateLinkAddrMsg: "/icst/myCustomer/upCustomerAdr", // 更新客户联系地址

  updateLinkStyleMsg: "/icst/myCustomer/upCustomerCtc", // 更新客户联系方式

  getCertificateMsg: "/icst/myCustomer/selectCustCardById/", // 客户证件信息

  getBaseMsg: "/icst/myCustomer/selectCustomerById/", // 获取客户基本信息
  getBaseMsgcrm: "/icst/myCustomer/selectCrmCustomerById/", //查询基本信息

  // 客户画像

  getSaleMsg: "/icst/customerPortrait/findCmavyInfo", // 获取营销轨迹信息

  getOwnMsg: "/icst/customerPortrait/findHoldPdInfo", // 获取客户持有产品信息查询

  getSuggestMsg: "/icst/customerPortrait/findCmpnPdInfo", // 获取客户推荐产品信息查询

  getRemindMsg: "/icst/customerPortrait/findEvDtlInfo", // 获取客户事件提醒信息查询

  // 设置提醒

  delRemind: "/icst/myCustomer/delRemind/", // 删除客户提醒设置信息

  getRemindList: "/icst/myCustomer/getRemindList/", // 获取客户设置提醒列表

  addRemind: "/icst/myCustomer/addRemind", // 新增客户设置提醒

  upOneRemind: "/icst/myCustomer/upOneRemind", // 编辑客户设置提醒信息

  // 纪念日

  selectCustAnvrsById: "/icst/myCustomer/selectCustAnvrsById/", // 客户纪念日信息

  upCustomerAnvrs: "/icst/myCustomer/upCustomerAnvrs", // 编辑纪念日信息

  addCustomerAnvrs: "/icst/myCustomer/addCustomerAnvrs", // 新增纪念日信息

  delCustomerAnvrs: "/icst/myCustomer/delCustomerAnvrs/", // 删除纪念日信息

  /**
   *XM接口
   */

  getGuBaseMsg: "/icst/customerPortrait/findCstInf", // 获取客户基本信息

  findCstLabel: "/icst/customerPortrait/findCstLabel", // 获取客户标签

  findTrackInfo: "/icst/customerPortrait/findTrackInfo", // 获取客户轨迹信息

  getCstPdAys: "/icst/customerPortrait/getCstPdAys/", // 持有产品分析环形图

  pdStctAnl: "/icst/customerPortrait/pdStctAnl/", // 持有产品分析环形图--/customerPortrait/pdStctAnl/{cstId} 产品结构分析
  // 客户联系地址信息
  //  selectCustAddrById: '/icst/myCustomer/selectCustAddrById/',

  getPdCover: "/icst/customerPortrait/getPdCover/", // 产品覆盖

  getCstBkNo: "/icst/myCustomer/getCstBkNo/", // 银行信息

  getPdAnalysis: "/icst/customerPortrait/getPdAnalysis", // 产品分析---线性图

  getCstMktOrEvCon: "/icst/customerPortrait/getCstMktOrEvCon", // 获取客户轨迹信息--获取轨迹详情

  findMarketingInfo: "/icst/customerPortrait/findMarketingInfo", // 营销信息

  findStChnl: "/isys/dict/findDictListByCd/XM005", // 签约渠道
};
