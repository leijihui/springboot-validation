package com.github.leijihui.spring.validation.util;

import com.github.leijihui.spring.validation.vo.ApiJsVO;
import lombok.extern.slf4j.Slf4j;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/6 11:18
 * @className VueApiUtil
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class VueApiUtil {
    public static List<ApiJsVO> readVueJsFolder(String path) {
        log.info(path);
        String folderPath = path;
        List<Object> fileList = new ArrayList<>();
        try {
            fileList = FolderFileScanner.scanFilesWithRecursion(folderPath);
        } catch (Exception e) {
            e.printStackTrace();
        }
        List<ApiJsVO> apiJsVOList = new ArrayList<>();
        fileList.stream()
                .filter(item -> item.toString().endsWith(".js"))
                .forEach(item -> {
                    log.info(item.toString());
                    String jsPath = item.toString();
                    ApiJsVO apiJsVO = ApiJsVO.builder()
                            .jsPath(jsPath)
                            .pathFlag(true)
                            .build();
                    apiJsVO = VueReadJsUtils.getContentByLine(apiJsVO);
                    log.info("-----------------------------------");
                    log.info(apiJsVO.toString());
                    apiJsVOList.add(apiJsVO);
                });
        log.info("" + apiJsVOList.size());
        return apiJsVOList;
    }
}
