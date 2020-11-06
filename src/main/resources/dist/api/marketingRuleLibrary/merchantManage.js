// 商户管理
export const merchantManage = {
  merchantList: "/imktr/merchant/info/list", // 获取商户列表

  merchantDetail: "/imktr/merchant/info/detail", // 根据商户编号, 查询单个商户信息

  saveMerchant: "/imktr/merchant/info/save", // 新建商户

  uploadImg: "/imktr/merchant/info/img/upload", // 上传图片

  getImg: "/imktr/merchant/info/img/get/", // 获取商户图片

  goodList: "/imktr/merchant/info/goods/list", // 获取商品列表

  savaMainGoods: "/imktr/merchant/info/rltGoods/save", // 保存商户所属商品信息

  getMainGoods: "/imktr/merchant/info/rltGoods/list", // 查询商户所属商品信息

  delMerchant: "/imktr/merchant/info/del", // 删除商户

  delMainGoods: "/imktr/merchant/info/rltGoods/del", // 删除商户所属商品信息
};
