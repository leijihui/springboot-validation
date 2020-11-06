/* 保存模型信息
 * 查询模型信息(单个)
 * 查询模型列表
 * 删除模型
 * 根据字典类型代码取字典下拉框   来自数据字典管理
 * 根据参数编码获取参数列表     来自参数管理
 * 查询某特征项下属所有特征项
 * 查询根特征项信息
 * 获取模型变量统计信息
 *
 * 更新缺失值处理方法
 * 模型脚本文件上传
*/
export const modePractice = {
  saveModlInf: "/imdl/model/saveModlInf", //保存模型信息
  findModlInf: "/imdl/model/findModlInf", //查询模型信息(单个)
  list: "/imdl/model/list", //查询模型列表
  delModlInf: "/imdl/model/delModlInf", //删除模型
  findDictListByCd: "/isys/dict/findDictListByCd/", //根据字典类型代码取字典下拉框   来自数据字典管理
  findParValListByEcd: "/isys/sysParm/findParValListByEcd/", //根据参数编码获取参数列表     来自参数管理
  findAllFtrItmInf: "/imdl/model/dataImport/findAllFtrItmInf", //查询某特征项下属所有特征项
  findTopFtrItmInf: "/imdl/model/dataImport/findTopFtrItmInf", //查询根特征项信息
  modlVrsnInfList: "/imdl/model/modlVrsnInfList", // 模型版本号
  delModlVrsnInf: "/imdl/model/delModlVrsnInf", // 删除模型版本信息
  loadModelDataInputInf: "/imdl/model/dataImport/loadModelDataInputInf", // 加载数据导入信息
  saveModelDataInputInf: "/imdl/model/dataImport/saveModelDataInputInf", // 保存数据导入信息
  loadModlSelDataDetail: "/imdl/model/dataImport/loadModlSelDataDetail", // 加载筛选的客户特征数据
  getNumericModlArg: "/imdl/model/dataExploration/getInputModlArg", // 数据探查-查询数值型模型输入变量信息
  getHistogramData: "/imdl/model/dataExploration/getHistogramData", // 数据探查-查询直方图数据
  getBarData: "/imdl/model/dataExploration/getBarData", // 数据探查-查询柱形图数据
  getCorrelationCoefficientData: "/imdl/model/dataExploration/getCorrelationCoefficientData", // 查询相关系数图数据
  getBoxplotData: "/imdl/model/dataExploration/getBoxplotData", // 查询箱线图数据
  getModlArgInfStatistics: "/imdl/model/dataModeling/getModlArgInfStatistics", // 获取模型变量统计信息
  updateStndznPcsgMth: "/imdl/model/dataModeling/updateStndznPcsgMth", // 更新标准化处理方法接口
  updateMssValPcsgMth: "/imdl/model/dataModeling/updateMssValPcsgMth", // 更新缺失值处理方法
  updateDataSplitPctg: "/imdl/model/dataModeling/updateDataSplitPctg", // 更新数据分割比例
  loadModelDataModelingInf: "/imdl/model/dataModeling/loadModelDataModelingInf", // 加载模型数据建模信息
  getModlAsesIdxInf: "/imdl/model/modelAssess/getModlAsesIdxInf", // 查询模型评估指标信息
  applyAlgorithm: "/imdl/model/modelAssess/applyAlgorithm", // 模型评估-应用算法
  applyAlgorithmInf: "/imdl/model/modelAssess/applyAlgorithmInf", // 模型评估-二分类-查询应用算法信息
  modelTraining: "/imdl/model/dataModeling/modelTraining", // 模型训练
  uploadModlScript: "/imdl/model/uploadModlScript", // 模型脚本文件上传
  findModlLogInf: "/imdl/model/dataModeling/findModlLogInf", // 查询模型日志信息列表
  saveClstModlInf: "/imdl/model/modelAssess/saveClstModlInf", // 聚类-保存聚类模型信息
  getCstClstModlStatistics: "/imdl/model/modelAssess/getCstClstModlStatistics", // 聚类-获取客户聚类模型统计信息
  getModlVrsnStatusInf: "/imdl/model/getModlVrsnStatusInf", // 查询模型版本状态信息
  checkModlVrsnAncSt: "/imdl/model/modelAssess/checkModlVrsnAncSt", // 模型评估-检查模型版本发布状态
};
