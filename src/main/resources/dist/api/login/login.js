// 登录
export const login = {
  findLoginLogPage: '/isys/login/findLoginLogPage',
  getToken: '/uaa/auth/token', // 获取token
  switch: '/uaa/auth/role/switch', // 角色切换
  getUserInfo: '/uaa/auth/user/info', // 获取用户认证信息
  getDashboardInfo: '/isys/user/dashboard/info', // 获取路由和首页图表信息
  drawCaptcha: '/uaa/auth/drawCaptcha', // 获取验证码
  verifyCaptcha: '/uaa/auth/verifyCaptcha', // 校验验证码
  logout: '/uaa/auth/logout' // 登出
}
