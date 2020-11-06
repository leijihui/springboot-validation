/*  统计分析
  -----------产品管理列表
selectCstLvlAnlTbl               理财到期明细表查询

selectTmdepExpDtlTbl             定存到期明细表查询

selectNewCstDtl                  新增客户明细表查询

selectCstmgrAstStatTbl           客户经理资产统计报表查询

selectcstLvlAnlTblList           客户层次分析表查询

selectStChg5WanAbvList           资产变动5万以上清单查询

selectAstChgFttAbvList           资产变动50万以上清单查询

-------------客户管理列表
 selectInstPerfaseDily           机构绩效考核日报查询

selectCstmgrPerfaseDily          客户经理绩效考核日报查询

selectCstAstGrd                  客户资产等级报告查询

*/

export const statisticAnalysis = {
  selectCstLvlAnlTbl: "/report/prodManageReport/chrtcExpDtlTblList", //理财到期明细表查询

  selectTmdepExpDtlTbl: "/report/prodManageReport/tmdepExpDtlTblList", //定存到期明细表查询

  selectNewCstDtl: "report/cstManageReport/newCstDtlList", //新增客户明细表查询

  selectCstmgrAstStatTbl: "report/cstManageReport/cstmgrAstStatTblList", //定存到期明细表查询

  selectcstLvlAnlTblList: "report/cstManageReport/cstLvlAnlTblList", //客户层次分析表查询

  selectStChg5WanAbvList: "report/cstManageReport/astChg5WanAbvList", //资产变动5万以上清单查询

  selectAstChgFttAbvList: "report/cstManageReport/astChgFttAbvList", //资产变动50万以上清单查询

  selectInstPerfaseDily: "report/performanceReport/instPerfaseDilyList", //机构绩效考核日报查询

  selectCstmgrPerfaseDily: "report/performanceReport/cstmgrPerfaseDilyList", //客户经理绩效考核日报查询

  selectCstAstGrd: "report/cstAssetGradReport/cstAssetGradReportList", //客户资产等级报告查询
};
