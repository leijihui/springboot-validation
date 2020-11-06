package com.github.leijihui.spring.validation.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.leijihui.spring.validation.util.TJsonUtil;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 15:49
 * @className JsonTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class JsonTest {


    @Test
    public void readJsonFileTest() {
        String path = JsonTest.class.getClassLoader().getResource("Movie.json").getPath();
        String s = TJsonUtil.readJsonFile(path);
        JSONObject jobj = JSON.parseObject(s);
        JSONArray movies = jobj.getJSONArray("RECORDS");//构建JSONArray数组
        for (int i = 0; i < movies.size(); i++) {
            JSONObject key = (JSONObject) movies.get(i);
            String name = (String) key.get("name");
            String director = (String) key.get("director");
            String scenarist = ((String) key.get("scenarist"));
            String actors = ((String) key.get("actors"));
            String type = ((String) key.get("type"));
            String ratingNum = ((String) key.get("ratingNum"));
            String tags = ((String) key.get("tags"));
           log.info(name);
           log.info(director);
           log.info(scenarist);
           log.info(actors);
           log.info(type);
           log.info(director);
           log.info(ratingNum);
           log.info(tags);
        }
    }
}
