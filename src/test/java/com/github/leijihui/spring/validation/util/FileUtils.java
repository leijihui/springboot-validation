package com.github.leijihui.spring.validation.util;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/5 16:57
 * @className FileUtils
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
public class FileUtils {

    private static final String ENCODING = "UTF-8";//编码方式

    /**
     * 获取文件的行
     *
     * @param fileName 文件名称
     * @return List<String>
     */
    public static List<String> getContentByLine(String fileName) {
        return getContentByLine(fileName, false);
    }

    public static List<String> getContentByLine(String fileName, boolean absolutePathFlag) {
        InputStreamReader read = null;
        BufferedReader bufferedReader = null;
        List<String> lineList = new ArrayList<>();
        try {
            String configPath = fileName;
            if (absolutePathFlag == Boolean.FALSE) {
                configPath = FileUtils.class.getClassLoader().getResource(fileName).getPath();
            }
            configPath = configPath.replaceAll("%20", " ");// 处理文件路径中空格问题
            File file = new File(configPath);
            if (file.isFile() && file.exists()) { // 判断文件是否存在
                read = new InputStreamReader(new FileInputStream(file), ENCODING);
                bufferedReader = new BufferedReader(read);
                String lineTxt = null;
                while ((lineTxt = bufferedReader.readLine()) != null) {
                    if (lineTxt == null || lineTxt.length() == 0) {
                        continue;
                    }
                    lineList.add(lineTxt);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (read != null) {
                    read.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                if (bufferedReader != null) {
                    try {
                        bufferedReader.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
        return lineList;
    }
}
