package com.github.leijihui.spring.validation.util;

import com.github.leijihui.spring.validation.vo.ApiInfoVO;
import com.github.leijihui.spring.validation.vo.ApiJsVO;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 17:37
 * @className VueReadJsUtils
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class VueReadJsUtils {
    /**
     * 读取js文件
     *
     * @param apiJsVO
     * @return
     */
    public static ApiJsVO getContentByLine(ApiJsVO apiJsVO) {
        String jsPath = apiJsVO.getJsPath();
        List<String> lineList = FileUtils.getContentByLine(jsPath, apiJsVO.isPathFlag());
        String constName = lineList.stream()
                .filter(line -> line.indexOf("= ") > 0).findFirst().get();
        apiJsVO.setConstName(constName.substring(constName.indexOf("const") + 5, constName.indexOf("=")).trim());
        List<ApiInfoVO> infoVOS = new ArrayList<>();
        lineList.stream()
                .filter(line -> line.indexOf(":") > 0)
                .forEach(line -> {
                    //  getById: '/isys/inst/get/', // 根据机构ID获取机构信息
                    //    todayNum: "/iwkb/gtasks/todayNum",                                  //首页今日新增
                    log.info(line);
                    String apiConst = line.substring(0, line.indexOf(":")).trim();
                    String apiUri = null;
                    if (line.indexOf("'") > 0) {
                        apiUri = line.substring(line.indexOf("'") + 1, line.lastIndexOf("'")).trim();
                    }
                    if (line.indexOf("\"") > 0) {
                        apiUri = line.substring(line.indexOf("\"") + 1, line.lastIndexOf("\"")).trim();
                    }
                    String apiName = "";
                    if (line.lastIndexOf("//") > 0) {
                        apiName = line.substring(line.lastIndexOf("//")).trim().replaceAll("//", "");
                    }
                    ApiInfoVO apiInfoVO = ApiInfoVO
                            .builder()
                            .apiConst(apiConst)
                            .apiName(apiName)
                            .apiDesc(apiName)
                            .apiUri(apiUri)
                            .build();
                    log.info(apiInfoVO.toString());
                    infoVOS.add(apiInfoVO);
                });
        apiJsVO.setInfoVOS(infoVOS);
        return apiJsVO;
    }
}
