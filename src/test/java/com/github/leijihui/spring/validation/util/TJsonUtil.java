package com.github.leijihui.spring.validation.util;

import java.io.*;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 15:56
 * @className TJsonUtil
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
public class TJsonUtil {
    //读取json文件
    public static String readJsonFile(String fileName) {
        String jsonStr = "";
        try {
            File jsonFile = new File(fileName);
            FileReader fileReader = new FileReader(jsonFile);
            Reader reader = new InputStreamReader(new FileInputStream(jsonFile), "utf-8");
            int ch = 0;
            StringBuffer sb = new StringBuffer();
            while ((ch = reader.read()) != -1) {
                sb.append((char) ch);
            }
            fileReader.close();
            reader.close();
            jsonStr = sb.toString();
            return jsonStr;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
