/*  字典管理
    treeMenu         左侧字典（根节点）列表
    findDictS        点击类型获取类型下字典值
    getClassOrDict   选中查询字典类型信息或字典详情
    uptDictType      更新字典类型信息（根节点）
    uptDict          更新字典详情信息（子节点）
   delDictType       删除字典类型或字典详情信息
   addDictType       新增字典类型信息（根节点）
   addDict           新增字典详情信息（子节点）
   getDctTree        获取查询字典树(耗时慢)
*/
export const dictionaryManage = {
  findDictListByCd: "/isys/dict/findDictListByCd/", // 根据字典类型代码取字典下拉框
  treeMenu: "/isys/dictType/tree", // 左侧字典（根节点）列表
  findDictS: "/isys/dictType/findDictS/", //点击类型获取类型下字典值
  getClassOrDict: "/isys/dictType/get/", //选中查询字典类型信息或字典详情
  uptDictType: "/isys/dictType/uptDictType", //更新字典类型信息（根节点）
  uptDict: "/isys/dictType/uptDict", //更新字典详情信息（子节点）
  delDictType: "/isys/dictType/delDictType", //删除字典类型或字典详情信息
  addDictType: "/isys/dictType/addDictType", //新增字典类型信息（根节点）
  addDict: "/isys/dictType/addDict", //新增字典详情信息（子节点）
  getDctTree: "/isys/dictType/getDctTree", //获取查询字典树(耗时慢)
};
