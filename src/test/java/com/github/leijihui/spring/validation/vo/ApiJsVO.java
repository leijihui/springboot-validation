package com.github.leijihui.spring.validation.vo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 17:12
 * @className ApiInfoVO
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Data
@Builder
public class ApiJsVO {
    private String jsPath;
    private String constName;
    private boolean pathFlag;//ture:绝对路径，false：相对路径
    private List<ApiInfoVO> infoVOS;
}
