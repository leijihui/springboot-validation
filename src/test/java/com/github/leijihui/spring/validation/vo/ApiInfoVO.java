package com.github.leijihui.spring.validation.vo;

import lombok.Builder;
import lombok.Data;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 17:12
 * @className ApiInfoVO
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Data
@Builder
public class ApiInfoVO {
    private String apiInfoId;//API编号
    private String apiGroupId;//API组编号（ServiceId）
    private String apiName;//API名称
    private String httpMethod;//请求类型
    private String apiConst;//常量
    private String apiUri;//URI
    private String apiDesc;//接口描述
}
