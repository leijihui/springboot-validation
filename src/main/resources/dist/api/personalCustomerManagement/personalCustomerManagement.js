/*  个人客户管理
 *
 */
export const personalCustomerManagement = {
    // ------------ 我的客户 ------------
    selectMyCustomerlist: '/icst/myCustomer/selectMyCustomerlist', //查询我的客户
    saveOrUpdateSelectedCst: '/icst/suptru/saveOrUpdateSelectedCst', //助理分配/托管
    personAgncAllCst: '/icst/suptru/personAgncAllCst', //全部助理/全部托管(确认保存)
    takeBackSelectedCst: '/icst/suptru/takeBackSelectedCst', //上收
    findVipUserMgr: '/icst/myCustomer/findVipUserMgr', //获取当前登入人的县联社管理员与机构信息
    saveVipById: '/icst/suptru/saveVipById', //vip申请
    findHdOvAprvStCd: '/icst/suptru/findHdOvAprvStCd', //移交是不是审批中
    findCustomerIsApproval: '/icst/myCustomer/findCustomerIsApproval', //效验认领、vip调入、vip调出、协办、群发短信审批中(新)
    startProcess: '/isys/wftasks/startProcess', //启动流程(新)
    queryCstBlTp: '/icst/customerBlend/queryCstBlTp/', //获取协办、认领流程参数(新)
    submitTask: '/isys/wftasks/submitTask', //流程提交任务(新)
    queryNextTaskList: '/isys/wftasks/queryNextTaskList', //查找下一审批人(新)
    findHiTaskByProcessInstanceId: '/isys/wftasks/findHiTaskByProcessInstanceId', //查找可退回的审批人(新)
    findCustomerIsVip: '/icst/myCustomer/findCustomerIsVip', //判断是否是vip
    sendEmail: '/icst/myCustomer/sendEmail', //发送短信
    smsTemplate: '/icst/myCustomer/smsTemplate', //短信模板
    // ------------ 我的客户 移交------------
    saveHdOvById: '/icst/suptru/saveHdOvById', //我的客户-提交移交申请
    saveAllHdOvById: '/icst/suptru/saveAllHdOvById', //我的客户-全部移交申请
    // ------------ 客户视图->基本信息 ------------
    selectCustomerById: '/icst/myCustomer/selectCustomerById/', //客户视图-客户信息-基本信息
    updateCstInfoByPerson: '/icst/myCustomer/updateCstInfoByPerson', //修改客户基本信息（对私）
    // ------------ 客户视图->证件信息 ------------
    selectCustCardById: '/icst/myCustomer/selectCustCardById', //客户视图-客户信息-证件信息
    updateCstIdInfByPerson: '/icst/myCustomer/updateCstIdInfByPerson', //客户视图-客户信息-修改客户证件信息
    delCstIdInf: '/icst/myCustomer/delCstIdInf', //删除客户证件信息
    // ------------ 客户视图->联系信息 ------------
    selectCustAddrById: '/icst/myCustomer/selectCustAddrById', //客户视图-客户信息-联系地址
    addPstAdr: '/icstp/publiccustomers/addPstAdr', //客户视图-客户信息-修改客户地址
    delCustomerAdr: '/icst/myCustomer/delCustomerAdr', //删除客户联系地址
    selectCustContactById: '/icst/myCustomer/selectCustContactById', //客户视图-客户信息-联系方式
    upCustomerCtc: '/icstp/publiccustomers/upCustomerCtc', //客户视图-客户信息-修改客户联系方式
    delCustomerCtc: '/icst/myCustomer/delCustomerCtc', //删除客户联系方式
    // ------------ 客户视图->关联方 ------------
    selectCustRelationById: '/icst/myCustomer/selectCustRelationById', //客户视图-客户信息-关联方
    findAllCst: '/icst/myCustomer/findAllCst', //关联方选择客户数据
    addRelevance: '/icst/myCustomer/addRelevance', //修改关联方信息
    delBeIpIpRel: '/icst/myCustomer/delBeIpIpRel', //删除客户关联人信息
    // ------------ 客户视图->客户等级变动历史 ------------
    selectCstGrdChgHistById: '/icst/myCustomer/selectCstGrdChgHistById', //客户视图-客户信息-客户等级变动历史
    // ------------ 客户视图->纪念日 ------------
    selectCustAnvrsById: '/icst/myCustomer/selectCustAnvrsById', //客户视图-客户信息-纪念日
    addCustomerAnvrs: '/icst/myCustomer/addCustomerAnvrs', //新增客户纪念日
    upCustomerAnvrs: '/icst/myCustomer/upCustomerAnvrs', //编辑客户纪念日
    delCustomerAnvrs: '/icst/myCustomer/delCustomerAnvrs/', //删除客户纪念日
    // ------------ 客户视图->外系统客户评级信息 ------------
    selectExoStmCsRtById: '/icst/myCustomer/selectExoStmCsRtById', //客户视图-客户信息-外系统客户评级信息
    // ------------ 客户视图->客户画像-优惠权益信息------------
    findCstInf: '/icst/customerPortrait/findCstInf', //客户基本信息
    findHoldPdInfo: '/icst/customerPortrait/findHoldPdInfo', //持有产品信息
    findPreferentialRights: '/icst/customerPortrait/findPreferentialRights', //优惠权益信息
    findContractInfo: '/icst/customerPortrait/findContractInfo', //签约信息
    // ------------ 客户视图->关系图谱 ------------
    personRelation: '/icst/myCustomer/personRelation', //关系图谱
    // ------------ 客户视图->持有产品 ------------
    selectShrGldInf: '/icst/myCustomer/selectShrGldInf', //股金信息
    selectDbCrdById: '/icst/myCustomer/selectDbCrdById', //借记卡
    // ------------ 客户视图->客户互动 ------------
    findMyCstVstInf: '/isys/cstvstaction/findMyCstVstInf', //客户互动
    // ------------ 客户查询 ------------
    findParmList: '/icst/customerQuery/findParmList', //客户查询客户信息列表
    customerClaim: '/icst/customerBlend/customerClaim', //客户认领
    personApplyAssist: '/icst/assist/personApplyAssist', //协办申请
    findInstSpvsById: '/icst/suptru/findInstSpvsById', //协办申请
    findLoginManager: '/icst/customerQuery/findLoginManager', //认领审批人
    userAndCusterRelation: '/icst/public/userAndCusterRelation', //登入用户与客户的关系
    // ------------ 管辖查询 ------------
    findJurisdictionList: '/icst/jurisdictionQuery/findParmList', //管辖查询客户信息列表
    // ------------ 客户调配 ------------
    getCustomerdeploymentListPersonal: '/icst/customerBlend/getCustomerdeploymentListPersonal', //客户调配列表
    allChange: '/icst/customerBlend/allChange', //客户全部调配
    calloutVip: '/icst/customerBlend/calloutVip', //vip调出
    changeCollect: '/icst/customerBlend/changeCollect', //客户上收
    // ------------ 短信历史查询接口 ------------
    findSmsSndTskInfPage: '/icst/smsSndTskInf/findSmsSndTskInfPage', //短信历史查询接口
    findGroupList: '/icst/smsSndTskInf/findGroupList', //查询客群接口
    // ------------ 潜在客户批次查询 ------------
    findLatCusManagement: '/icst/ptInfTbl/findLatCusManagement', //潜在客户批次查询接口
    findSingleCustomer: '/icst/ptInfTbl/findSingleCustomer', //单批次客户查询接口
    importExcel: '/icst/ptInfTbl/importExcel', //导入接口
    downloadTemplate: '/icst/ptInfTbl/downloadTemplate', //下载模板接口
    //---------------潜在客户模块
    importCstList: '/icst/csLsMtch/importCstList',
    csLsImprBtInfList: '/icst/csLsMtch/csLsImprBtInfList',
    csLsImprBtInf: '/icst/csLsMtch/csLsImprBtInf',
    csLsMtchInfList: '/icst/csLsMtch/csLsMtchInfList',
    delCsLsMtchInf: '/icst/csLsMtch/delCsLsMtchInf',
    getSetLblVle: '/icst/csLsMtch/getSetLblVle',
    deleSetLblVle: '/icst/csLsMtch/deleSetLblVle',
    saveSetLblVle: '/icst/csLsMtch/saveSetLblVle',

    //客户分析图表
    getRetCusDataOne:'/icst/customerPortrait/assetDistribution', //资产分布图
    getRetCusDataTwo:'/icst/customerPortrait/assetDistribution',//负债分布图
    getRetCusDataThree:'/icst/customerPortrait/assetDistribution', //客户利润分布   //
    getRetCusDataFour:'/icst/customerPortrait/depositBusiness', //客户存款趋势图
    getRetCusDataFive:'/icst/customerPortrait/depositBusiness', //客户贷款趋势图
    getRetCusDataSix:'/icst/customerPortrait/findCFNumTrndByMon', //现金流 按月 
    getRetCusDataSixs:'/icst/customerPortrait/findCFNumTrndByDay', //现金流 按日 
    getRetCusDataSeven:'/icst/customerPortrait/findDepCtbByMon', //客户分析图表-存款贡献度按月
    getRetCusDataSevens:'/icst/customerPortrait/findDepCtbByDay', //客户分析图表-存款贡献度按日
    getRetCusDataEight:'/icst/customerPortrait/findLnCtbByMon', //客户分析图表-贷款贡献度按月
    getRetCusDataEights:'/icst/customerPortrait/findLnCtbByDay', //客户分析图表-贷款贡献度按日
    getRetCusDataNine:'/icst/customerPortrait/findIntrBsnCtbByMon', //客户分析图表-中间业务贡献度按月
    getRetCusDataNines:'/icst/customerPortrait/findIntrBsnCtbByDay',//客户分析图表-中间业务贡献度按日
    getRetCusDataTen:'/icst/customerPortrait/findCprsvCtbByMon',//客户分析图表-综合贡献度按月
    getRetCusDataTens:'/icst/customerPortrait/findCprsvCtbByDay',//客户分析图表-综合贡献度按日
}