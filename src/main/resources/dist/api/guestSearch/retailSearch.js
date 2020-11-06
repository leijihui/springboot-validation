// 管辖查询
export const retail = {
    searlist: '/icst/jurisdictionQuery/findParmList', // 获取零售客户列表
    coremessage:'/icst/customerPortrait/findCstCoreMsgByCstId', //客户核心信息
    customer:'/icst/customerPortrait/findCstBaseInf',//客户基本信息
    getGuestTag: '/icst/customerPortrait/findCstLabel', // 获取客户标签
    structure:'/icst/customerPortrait/findCstAssetStructure',//客户资产结构
    trend:'/icst/customerPortrait/findCstAssetTrend', //资产走势
    hassset:'/icst/customerPortrait/getPPdCover' //客户持有资产情况
  }