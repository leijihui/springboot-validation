export const userManage = {
  getUserList: '/isys/user/userList', // 获取用户列表
  getRoleList: '/isys/user/roleList', // 获取角色列表
  getInstTree: '/isys/user/instTree', // 获取机构列表
  // 新增dialog页面
  getAddUserList: '/isys/user/userList', // 获取新增用户列表
  getCertificate: '/isys/user/getCertificate', // 证件类型获取
  getAddInsTree: '/isys/user/instTree', // 获取新增机构列表
  addUserInst: '/isys/user/addUserInst', // 配置所属部门
  delUserInst: '/isys/user/delUserInst', // 删除所属部门
  getUserInf: '/isys/user/userInf/', // 初始化基本信息
  uptUserInf: '/isys/user/uptUser', // 更新基本信息
  getUserInst: '/isys/user/userInst/', // 初始化所属部门信息

  findUsrAndRlRels: '/isys/user/findUsrAndRlRels/', // 查询用户与角色关系列表
  delUserRole: '/isys/user/delUserRole/', // 删除用户与角色关系
  addUserRole: '/isys/user/addUserRole', // 添加用户与角色关系
  switchUsrRlRelStatus: '/isys/user/switchUsrRlRelStatus/', // 切换用户与角色状态

  sendAddUser: '/isys/user/addUser', // 保存新增
  rolGrpConfirm: '/isys/user/addRolGrp', // 配置所属角色组
  delRolGrp: '/isys/user/delRoleGrpRel', // 删除所属角色组
  getRolGrpdTree: '/isys/user/getRoleGrp', // 获取角色树列表
  getRolGrpdTreeIns: '/isys/user/userInst/', // 获取用户所属部门信息列表
  getByRoleGrpCd: '/isys/user/getByRoleGrpCd/', // 获取当前选择角色组的角色列表
  changeUsrStatus: '/isys/user/changeUsrStatus', // 更改用户状态
  changeInstDfaltInd: '/isys/user/changeInstDfaltInd', // 修改用户与机构主从属性(主属/从属)
  changeInstRelStCd: '/isys/user/changeInstRelStCd', // 修改用户与机构关系状态(有效/无效)
  passwordReset: '/isys/user/passwordReset/' // 密码重置
}
