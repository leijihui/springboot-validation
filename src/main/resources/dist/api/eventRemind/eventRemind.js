/*  事件提醒
    msgTypeList     获取提醒类别列表
    allList         获取所有未读消息列表
    typeList        分类提醒列表
    findList        查询列表，加参数
    totalMsgNum     未读信息总量
    readState       确认已读
    todayMsgNum     今日未读消息
    checkCmAvyTsk   查询客户营销活动任务编号
	findDictListByCd 操作的选项
    checkMsg		消息内容确认
    evRmndrWhlPcsg		全部消息内容确认
*/
export const eventRemind = {
  msgTypeList: "/iwkb/msg/msgTypeList", //获取提醒类别列表
  allList: "/iwkb/msg/allList", //获取所有未读消息列表
  typeList: "/iwkb/msg/typeList", // 分类提醒列表
  findList: "/iwkb/msg/findListByCondition", //查询列表，加参数
  totalMsgNum: "/iwkb/msg/totalMsgNum", //未读信息总量
  readState: "/iwkb/msg/updateReadStateList", //确认已读
  todayMsgNum: "/iwkb/msg/todayMsgNum", //日未读消息
  checkCmAvyTsk: "/iwkb/msg/checkCmAvyTsk", //查询客户营销活动任务编号
  findDictListByCd: "/isys/dict/findDictListByCd/A0104", //操作的选项
  checkMsg: "/iwkb/msg/checkMsg", //消息内容确认
  evRmndrWhlPcsg: "/iwkb/msg/evRmndrWhlPcsg", //全部消息内容确认

  getLeftList: "/iwkb/gtasks/matterType", //获取左侧所有事项列表（已办）
  getTrackLeftList: "/iwkb/track/matterType", //获取左侧所有事项列表（跟踪）
  getBacklogList: "/iwkb/gtasks/findEventList", //待办列表数据获取
  updateCustomerHandOver: "/icst/customerBlend/updateCustomerHandOver", // 客户移交完成（新）
  listCustomerHandOver: "/icst/customerBlend/listCustomerHandOver", //待办-移交详情 多客户列表数据获取
  customerClaimPath: "/icst/customerBlend/customerClaimPath", //客户认领流程图
  performCheck: "/iwkb/gtasks/performCheck", //审核同意
  backCheck: "/iwkb/gtasks/backCheck", //退回到上一级
  backCheckAppli: "/iwkb/gtasks/backCheck", //退回到申请人
  batchSendEmailPath: "/icstp/CustomerScreen/batchSendEmailPath", //群发短信审核流程
  supportCheck: "/iwkb/gtasks/supportCheck", //申请协办审批流程图
  vipApplyCheck: "/iwkb/gtasks/vipApplyCheck", //vip申请审批流程图
  hdOvApplyCheck: "/iwkb/gtasks/hdOvApplyCheck", //移交申请审批流程图
  customerClaimSuccess: "/icst/customerBlend/customerClaimSuccess", //认领最后一步
  updateAstbyId: "/icst/suptru/updateAstbyId", //协办最后一步
  updateVipbyId: "/icst/suptru/updateVipbyId", //vip最后一步
  getListByBatchId: "/imktm/marketingManager/person/getListByBatchId", // 待办--营销人员管理审批列表
};
