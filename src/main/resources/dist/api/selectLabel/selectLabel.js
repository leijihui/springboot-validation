/*
    getUseFeqlab          常用标签+ {topNum}标签数
    findLblForName        根据标签名查询标签
    labOption             {typeCode}/{parentId}客户标签信息下拉框接口
*/
export const selectLabel = {
  getUseFeqlab: "/icstp/cstLab/getUseFeqlab/", //常用标签+ {topNum}标签数
  getMylab: "/icstp/cstLab/findMnulLblValList", // 获取自建标签
  insertMnulLblValList: "/icstp/cstLab/insertMnulLblValList", //新增标签
  deleteMnulLblValList: "/icstp/cstLab/deleteMnulLblValList", //删除标签
  updateMnulLblValList: "/icstp/cstLab/updateMnulLblValList", //更新标签
  findCstMnulLblInfList: "/icstp/cstLab/findCstMnulLblInfList", //查询标签值客户信息列表
  findLblForName: "/icstp/cstLab/findLblForName", // 标签查询
  labOption: "/icstp/cstLab/labOption/", // 获取标签菜单
};
