package com.github.leijihui.spring.validation.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.github.leijihui.spring.validation.util.FileUtils;
import com.github.leijihui.spring.validation.util.TJsonUtil;
import com.github.leijihui.spring.validation.util.VueReadJsUtils;
import com.github.leijihui.spring.validation.vo.ApiJsVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.List;
import java.util.Map;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 15:52
 * @className VueTest2
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class VueTest2 {
    @Test
    public void testReadLine() {
        String jsPath = "organizeManage.js";
        ApiJsVO apiJsVO = ApiJsVO.builder()
                .jsPath(jsPath)
                .pathFlag(false)
                .build();
        apiJsVO = VueReadJsUtils.getContentByLine(apiJsVO);
        log.info("-----------------------------------");
        log.info(apiJsVO.toString());
    }

    @Test
    public void testRead() {
        log.info("xxxxxxxx");

        String jsonPath = "organizeManage.json";
        String path = JsonTest.class.getClassLoader().getResource(jsonPath).getPath();
        String s = TJsonUtil.readJsonFile(path);
        JSONObject itemJSONObj = JSON.parseObject(s);
        log.info(itemJSONObj.toJSONString());
        Map<String, Object> itemMap = JSONObject.toJavaObject(itemJSONObj, Map.class);
        log.info("********************");
        itemMap.forEach((k, v) -> {
                    log.info("key={},val={}", k, v);
                    log.info("key={},val={}", k, v);
                }
        );
        List<String> lineList = FileUtils.getContentByLine(jsonPath);
        lineList.forEach(line -> {
            log.info(line);
            // if(line)
        });
    }
}
