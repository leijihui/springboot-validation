package com.github.leijihui.spring.validation.test;

import com.alibaba.fastjson.JSONObject;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/23 15:02
 * @className WfJsonTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Data
@Slf4j
public class WfJsonTest {
    @Test
    public void test() {
        //String jsonStr = "{\"taskId\":\"任务ID\"}";
        String jsonStr = "{\\\"taskId\\\":\\\"任务ID\\\"}";
        String candidateUser = null;
        log.info("xxxxx");
        // JSONObject jasonObject = JSONObject.parseObject(jsonStr);
        JSONObject jasonObject = JSONObject.parseObject(jsonStr);
        log.info(jasonObject.toJSONString());
        String value = (String) jasonObject.get("value");
        log.info(value);
    }
}
