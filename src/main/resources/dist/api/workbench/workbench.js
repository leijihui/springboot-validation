// 工作流
export const workbench = {
    queryNextTaskList:'/isys/wftasks/queryNextTaskList', // 审批人
    firstTaskDefine:'/isys/wftasks/firstTaskDefine/', // 审批人--不需id
    startProcess:'/isys/wftasks/startProcess', // 流程启动接口
    submitTask:'/isys/wftasks/submitTask', // 流程提交确定
    terminateProcess:'/isys/wftasks/terminateProcess', // 流程取消
    backTask: '/isys/wftasks/backTask', // 审核退回(新)
    queryProcessTrack: '/isys/wftasks/queryProcessTrack', //审批流程图(新)
    findProcessDefine: '/isys/wftasks/findProcessDefine', //待办/已办获取左侧所有事项列表(新)
    findTaskList: '/isys/wftasks/findTaskList', // 待办/已办列表数据获取(新)
    newTaskDefine:'/isys/wftasks/queryNextTaskList',//获取审批人
    refusecommit:'/isys/wftasks/terminateProcess',//拒绝审批-终止流程
}