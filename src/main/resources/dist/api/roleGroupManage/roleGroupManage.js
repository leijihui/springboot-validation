/*  角色组管理
	getRoleList         获取角色组菜单
	getRole             获取单个角色组信息 + {id}
	addRoleGroup        新增角色组信息
	getGroupList        通过角色组ID获取角色信息列表 + {rl_grp_cd}
	delRoleAndGroup     删除角色组并解除所有对应角色关系 + {roleGroupId}
	udtRoleGroup        更新角色组信息
	delRole             选中角色从角色组中删除 + {rl_id}/{rl_grp_id}
	addRole             角色组中新增角色 + {rl_grp_cd}
	getRoleManage       获取角色管理列表
	checkName           检测新组名字是否重复
	alterStatus         改变角色组角色状态
	alterSign           改变角色标配
*/
export const roleGroupManage = {
  getRoleList: "/isys/rolGrp/getRoleGroupList", //获取角色组菜单
  getRole: "/isys/rolGrp/get/",                 //获取单个角色组信息 + {id}
  addRoleGroup: "/isys/rolGrp/addRoleGroup",    //新增角色组信息
  getGroupList: "/isys/rolGrp/getPage/",        //通过角色组ID获取角色信息列表 + {rl_grp_cd}
  delRoleAndGroup: "/isys/rolGrp/delRoleAndGroup/",//删除角色组并解除所有对应角色关系 + {roleGroupId}
  udtRoleGroup: "/isys/rolGrp/udtRoleGroup",      //更新角色组信息
  delRole: "/isys/rolGrp/delRoleFromGroup/",      //选中角色从角色组中删除 + {rl_id}/{rl_grp_id}
  addRole: "/isys/rolGrp/addRoleToGroup/",        //角色组中新增角色 + {rl_grp_cd}
  getRoleManage: "/isys/role/getRoleList",        //获取角色管理列表
  checkName: "/isys/rolGrp/checkName",            //检测新组名字是否重复
  alterStatus: "/isys/rolGrp/delByRlIdAndRlGrpCd/", //改变角色组角色状态
  alterSign: "/isys/rolGrp/changeRoleFromGroup/",   //改变角色标配
};
