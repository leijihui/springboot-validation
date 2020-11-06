// 持有产品模块
export const ownerProduct = {
  getCurrentDeposit: "/icst/myCustomer/selectCustDepArById", // 客户存款-活期信息

  getExchanCurrentDeposit: "/icst/myCustomer/selectCustDepDtlById", // 客户存款-活期交易信息

  getTimeDeposit: "/icst/myCustomer/selectCustDepDtlpById", // 客户存款-定期信息

  getLoan: "/icst/myCustomer/selectCustLnarById", // 客户贷款信息

  getManMoney: "/icst/myCustomer/selectCustChrtcById", // 客户理财信息

  getExchanManMoney: "/icst/myCustomer/selectCustChrtcpById", // 客户理财交易明细信息

  getFund: "/icst/myCustomer/selectCustFndById", // 客户基金信息

  getExchanFund: "/icst/myCustomer/selectCustFndpById", // 客户基金交易明细信息

  getCreditCard: "/icst/myCustomer/selectCustHcrdById", // 客户信用卡信息

  getExchanCreditCard: "/icst/myCustomer/selectCustHcrdpById", // 客户信用卡交易明细信息

  customerPmArInf: "/icst/myCustomer/customerPmArInf", // 查询客户黄金信息

  findCustomerPmArDetail: "/icst/myCustomer/findCustomerPmArDetail", // 查询客户黄金明细信息

  customerInsPolcyInf: "/icst/myCustomer/customerInsPolcyInf", // 查询客户保单信息

  // selectCustDDEById: '/icst/myCustomer/dayDayEarn',
  selectCustDDEById: "/icst/myCustomer/selectCustChrtcById", // 查询客户天天赚信息

  dayDayEarnDetail: "/icst/myCustomer/dayDayEarnDetail", // 查询客户天天赚详细信息

  bondListData: "/icst/myCustomer/bondListData", // 查询客户保证金信息

  consumeOrdersListData: "/icst/myCustomer/consumeOrdersListData", // 查询客户消费订单信息

  customerChrtcInfList: "/icst/myCustomer/customerChrtcInfList", // 查询客户理财信息

  getCstLsPln: "/icst/myCustomer/getCstLsPln", // 查询客户里赏计划信息
};
