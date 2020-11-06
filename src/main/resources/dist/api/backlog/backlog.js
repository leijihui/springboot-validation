/*  待办
    todayNum            首页今日新增
    allNum              首页新增总数
    getUndoneIngPage    条件查询
    findEventList       获取列表
    findDictListByCd    获取事件类型
	getAprvLink			获取审批流程
	setAprvDetails		执行审批
	// xm接口
	getGTasksIngPage   根据条件查询代办/已办事项
	getAuditPersonsList  流程审批人查询
	submitWorkFlow      流程提交/送审
	returnWorkFlow      流程退回
	stopWorkFlow        流程终止
	getAprvInfList      历史审批列表
*/
export const backlog = {
  todayNum: "/iwkb/gtasks/todayNum",                                  //首页今日新增
  allNum: "/iwkb/gtasks/allNum",                                      //首页新增总数
  getUndoneIngPage: "/iwkb/gtasks/getGTasksIngPage",                  //条件查询
  findEventList: "/iwkb/gtasks/findEventList",                        //获取列表
  findDictListByCd: "/isys/dict/findDictListByCd/A0044",              //获取事件类型
  getAprvLink: "/iwkb/gtasks/getAprvLink/",                           //获取审批流程
  setAprvDetails: "/iwkb/gtasks/setAprvDetails",                      //执行审批
  getGTasksIngPage: "/iwkb/gtasks/getGTasksIngPage",                  //根据条件查询代办/已办事项
  getAuditPersonsList: "/isys/workflow/getAuditPersonsList",          //流程审批人查询
  submitWorkFlow: "/isys/workflow/submitWorkFlow",                    //流程提交/送审
  returnWorkFlow: "/isys/workflow/returnWorkFlow",                    //流程退回
  stopWorkFlow: "/isys/workflow/stopWorkFlow",                        //流程终止
  getAprvInfList: "/imktm/regularMktAct/getAprvInfList",              //历史审批列表
  getAllClassifyPendTasks: "/isys/wftasks/getAllClassifyPendTasks",   // 获取短信模板列表
  getSMSList: "/iwkb/gtasks/getSMSList",                              // 获取事项信息列表
  getItmValList: "/iwkb/gtasks/getItmValList",                         // 获取CRM代办跟踪事项列表

  getItmTpList: "/iwkb/gtasks/getItmTpList",                           // 获取审批列表
  getOneItmVal: "/iwkb/gtasks/getOneItmVal/",                          // 获取审批详情
  getCrmAprvLink: "/iwkb/gtasks/getCrmAprvLink/",                      // 获取CRM流程审批详情
};

