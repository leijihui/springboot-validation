/*  产品管理
    getPdTree             		获取产品树信息
    getPdInfVw        			条件分页查询产品详情列表
    getLabels        			获取产品所有标签
    getCstForProduct        	分页获取产品持有用户
    getProducts     			获取产品基本信息
    getProductForAttribute  	获取产品基本属性
  	getProductToCst				获取产品推荐用户
  	getCstTrend					产品分析-客户趋势
  	getSaleTrend				产品分析-产品销量趋势
  	getIdxAnl					产品分析-标签分析
  	getAgeAnl					产品分析-年龄分布
  	getInstRank					产品分析-机构TOP15
  	delPdAttribute				删除产品属性
  	addPdAttribute				新增产品属性
  	updatePdAttribute			编辑产品属性
	addPdNode					新增产品节点接口
	modifyPdNode				修改产品节点接口
	deletePdNode				删除产品节点接口
	transferPds					移动产品接口
	targetPdList				目标产品列表
*/
export const productManage = {
  getPdTree: "/ipdt/product/getPdTree", //获取产品树信息
  getPdInfVw: "/ipdt/product/getPdInfVw", //条件分页查询产品详情列表
  updateProductMainInd: "/ipdt/product/updateProductMainInd", //
  getLabels: "/ipdt/product/getLabels/", //获取产品所有标签
  getCstForProduct: "/ipdt/product/getCstForProduct/", //分页获取产品持有用户
  getProducts: "/ipdt/product/getProducts/", //获取产品基本信息
  getProductForAttribute: "/ipdt/product/getProductForAttribute/", //获取产品基本属性
  getProductToCst: "/ipdt/product/getProductToCst", //获取产品推荐用户
  getCstTrend: "/ipdt/pdIdxAnl/getCstTrend/", //产品分析-客户趋势
  getSaleTrend: "/ipdt/pdIdxAnl/getSaleTrend/", //产品分析-产品销量趋势
  getIdxAnl: "/ipdt/pdIdxAnl/getIdxAnl/", //产品分析-年龄分布
  getAgeAnl: "/ipdt/pdIdxAnl/getAgeAnl/", //产品分析-年龄分布
  getInstRank: "/ipdt/pdIdxAnl/getInstRank/", //产品分析-机构TOP15
  delPdAttribute: "/ipdt/product/delPdAttribute", //删除产品属性
  addPdAttribute: "/ipdt/product/addPdAttribute", //新增产品属性
  updatePdAttribute: "/ipdt/product/updatePdAttribute/", //编辑产品属性
  addPdNode: "/ipdt/productManagement/addPdNode", //新增产品节点接口
  modifyPdNode: "/ipdt/productManagement/modifyPdNode", //	修改产品节点接口
  deletePdNode: "/ipdt/productManagement/deletePdNode/", //删除产品节点接口
  transferPds: "/ipdt/productManagement/transferPds", //移动产品接口
  targetPdList: "/ipdt/productManagement/targetPdList", //目标产品列表
  /**
   * xm接口
   */

  getPdHdCstTrend: "/ipdt/pdIdxAnl/getPdHdCstTrend", // 获取产品客户男女趋势

  getPdOrdrTrend: "/ipdt/pdIdxAnl/getPdOrdrTrend", // 获取产品销量增长趋势

  getPdLblTrend: "/ipdt/pdIdxAnl/getPdLblTrend/", // 产品标签分布趋势

  getPdCstAgeTrend: "/ipdt/pdIdxAnl/getPdCstAgeTrend/", // 获取产品年龄分布饼

  getPdInstTrend: "/ipdt/pdIdxAnl/getPdInstTrend/", // 产品机构分布趋势

  getPdCfgList: "/ipdt/pdCfg/getPdCfgList", // 获取金融产品信息列表

  addOrUpPdCfg: "/ipdt/pdCfg/addOrUpPdCfg", // 新增或更新产品信息

  getOnePdCfg: "/ipdt/pdCfg/getOnePdCfg/", // 获取金融产品详情

  delPdCfg: "/ipdt/pdCfg/delPdCfg", // 删除产品信息

  getPdSrcList: "/ipdt/pdCfg/getPdSrcList", // 获取产品来源下拉框

  importPdCfgList: "/ipdt/pdCfg/importPdCfgList", // 批量导入金融产品信息

  getPdCfgStckList: "/ipdt/htsptrcmmcfg/getPdCfgStckList", // 金融产品热门置顶信息列表

  savePdCfgStckAllNum: "/ipdt/htsptrcmmcfg/savePdCfgStckAllNum", // 保存金融产品可推荐总数

  addOrUpPdCfgStck: "/ipdt/htsptrcmmcfg/addOrUpPdCfgStck", // 保存金融产品置顶时间

  delPdCfgStck: "/ipdt/htsptrcmmcfg/delPdCfgStck", // 删除产品置顶时间

  getFncHmPgCfgList: "/ipdt/fnchmpgcfg/getFncHmPgCfgList", // 获取金融首页模块信息列表

  saveFstgDsplRcmmTotNum: "/ipdt/fnchmpgcfg/saveFstgDsplRcmmTotNum", // 保存前台推荐总数
  // 获取前台推荐总数
  getFstgDsplRcmmTotNum: "/ipdt/fnchmpgcfg/getFstgDsplRcmmTotNum", // 获取前台推荐总数

  topOnePd: "/ipdt/fnchmpgcfg/topOnePd/", // 置顶产品

  deletePdDocListById: "/ipdt/pdIdxAnl/deletePdDocListById/", // 删除文档{productDocId}

  downLoadPdDoc: "/ipdt/pdIdxAnl/downLoadPdDoc/", // 下载文档
};
