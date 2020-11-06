/*  渠道库
    chnlStoreTree       渠道库树查询
    getChnlInfo         获取渠道详情
    addChnl             新增渠道
    udtChnl             更新渠道
    findChnlCount       查询是否有下级渠道(删除前先请求)
    delete              删除渠道(物理)
	findPshModCd		      查询推送方式
	getChTypeDict         获取渠道接口
	getFirstScpCntnt      获取一级渠道
*/
export const channelLibrary = {
  chnlStoreTree: "/imktr/channel/chnlStoreTree", //渠道库树查询
  getChnlInfo: "/imktr/channel/getChnlInfo/", //获取渠道详情
  addChnl: "/imktr/channel/addChnl", //新增渠道
  udtChnl: "/imktr/channel/udtChnl", //更新渠道
  findChnlCount: "/imktr/channel/findChnlCount/", //查询是否有下级渠道(删除前先请求)
  delete: "/imktr/channel/delChnl", //删除渠道(物理)
  findPshModCd: "/imktr/channel/findPshModCd/", //查询推送方式
  getChTypeDict: "/isys/dict/findDictListByCd/XM038", //获取渠道接口
  getFirstScpCntnt: "/imktr/scope/getFirstScpCntnt", //获取一级渠道
  activetype: "/imktr/channel/findAvyStcdDdct", //活动状态
  activelist: "/imktr/channel/findMarketAvyList", //活动列表
  uplod: "/imktr/channel/uploadPic", //上传图片
  imglist: "/imktr/channel/findPicList", //素材库
};
