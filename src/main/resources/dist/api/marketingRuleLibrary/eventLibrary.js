/*  事件库
    getEventInfoById     根据事件编号获取事件信息
    addEvents            增加事件信息
    upEvents             编辑事件信息
    delete               根据事件编号删除事件
    getEventTree         获取事件树
*/
export const eventLibrary = {
  getEventInfoById: "/imktr/events/getEventInfoById/", //根据事件编号获取事件信息
  addEvents: "/imktr/events/addEvents", //增加事件信息
  upEvents: "/imktr/events/upEvents", //编辑事件信息
  delete: "/imktr/events/delEvents/", //根据事件编号删除事件
  getEventTree: "/imktr/events/getEventTree", //获取事件树
};
