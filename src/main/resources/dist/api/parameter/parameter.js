/*  参数管理
 findParmList       参数列表
 addOneParm         添加参数
 uptOneParm         更新参数
 delParm         删除参数(失效)
 findParValByEcdAndId   根据参数编码和参数编号获取参数值
 */
export const parameter = {
  findParmList: "/isys/sysParm/findParmList", //参数列表
  addOneParm: "/isys/sysParm/addOneParm", //添加参数
  uptOneParm: "/isys/sysParm/uptOneParm", //更新参数
  delParm: "/isys/sysParm/delParm", //删除参数(失效)
  findParValByEcdAndId: "/isys/sysParm/findParValByEcdAndId", //根据参数编码和参数编号获取参数值
};
