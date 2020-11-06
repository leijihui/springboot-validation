/*  产品查询
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
*/
export const productQuery = {
  getPdTree: "/ipdt/product/getPdTree", //获取产品树信息
  getPdInfVw: "/ipdt/product/getPdInfVw", //条件分页查询产品详情列表
  getLabels: "/ipdt/product/getLabels/", //	获取产品所有标签
  getCstForProduct: "/ipdt/product/getCstForProduct/", //分页获取产品持有用户
  getProducts: "/ipdt/product/getProducts/", //	获取产品基本信息
  getProductForAttribute: "/ipdt/product/getProductForAttribute/", //获取产品基本属性
  getProductToCst: "/ipdt/product/getProductToCst", //获取产品推荐用户
  getCstTrend: "/ipdt/pdIdxAnl/getCstTrend/", //产品分析-客户趋势
  getSaleTrend: "/ipdt/pdIdxAnl/getSaleTrend/", //产品分析-产品销量趋势
  getIdxAnl: "/ipdt/pdIdxAnl/getIdxAnl/", //产品分析-标签分析
  getAgeAnl: "/ipdt/pdIdxAnl/getAgeAnl/", //产品分析-年龄分布
  getInstRank: "/ipdt/pdIdxAnl/getInstRank/", //产品分析-机构TOP15
};
