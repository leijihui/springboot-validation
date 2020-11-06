export const roleManage = {
  getRoleList: '/isys/role/getRoleList', // 获取角色列表
  addRole: '/isys/role/addRole', // 新增角色
  uptRsc: '/isys/role/uptRsc', // 修改角色
  delRole: '/isys/role/delRole/', // 删除角色
  getRol: '/isys/role/get/', // 初始化角色信息
  saveRsc: '/isys/role/saveRsc', // 给角色分配资源
  searchrlQueryTp:'/isys/dict/findDictListByCd/A0120',//查询权限类型
  getMenus: '/isys/role/getMenus/', // 通过角色Id查询所属资源
  findRoleGraphRes: '/isys/role/findRoleGraphRes/', // 角色首页图表配置初始化
  saveRlGraphRels: '/isys/role/saveRlGraphRels', // 保存角色与首页图表关联数据
  findRlBsnRscRels: '/isys/role/findRlBsnRscRels?', // 获取角色业务资源配置
  saveRlBsnRscRels: '/isys/role/saveRlBsnRscRels?' // 保存角色业务资源配置
}
