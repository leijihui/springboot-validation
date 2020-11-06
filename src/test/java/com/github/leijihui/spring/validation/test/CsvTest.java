package com.github.leijihui.spring.validation.test;

import com.github.leijihui.spring.validation.util.CsvUtil;
import com.github.leijihui.spring.validation.util.VueApiUtil;
import com.github.leijihui.spring.validation.util.VueReadJsUtils;
import com.github.leijihui.spring.validation.vo.ApiInfoVO;
import com.github.leijihui.spring.validation.vo.ApiJsVO;
import com.github.leijihui.spring.validation.vo.BankWageMonth;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.io.File;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/6 10:51
 * @className CsvTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class CsvTest {
    /**
     * 测试数据
     */
    @Test
    public void testCSV() {
        ArrayList<BankWageMonth> bankWageList = new ArrayList<BankWageMonth>();
        BankWageMonth bankWage = new BankWageMonth();
        bankWage.setId("123");
        bankWage.setNumber("2016rz0001");

        BankWageMonth bankWage2 = new BankWageMonth();
        bankWage2.setId("124");
        bankWage2.setNumber("2016rz0002");

        bankWageList.add(bankWage);
        bankWageList.add(bankWage2);

        LinkedHashMap map = new LinkedHashMap();
        map.put("1", "第一列");
        map.put("2", "第二列");
        map.put("3", "第三列");
        map.put("4", "第四列");

        String path = "D://export//";
        String fileName = "文件导出";
        String fileds[] = new String[]{"id", "number"};// 设置列英文名（也就是实体类里面对应的列名）
        File file = CsvUtil.createCSVFile(bankWageList, fileds, map, path,
                fileName, BankWageMonth.class);
        String fileName2 = file.getName();
        log.info("文件名称：" + fileName2);
    }

    /**
     * 测试数据API导出
     */
    @Test
    public void testApiCSV() {
        String jsPath = "organizeManage.js";
        ApiJsVO apiJsVO = ApiJsVO.builder()
                .jsPath(jsPath)
                .pathFlag(false)
                .build();
        apiJsVO = VueReadJsUtils.getContentByLine(apiJsVO);
        log.info("-----------------------------------");
        log.info(apiJsVO.toString());


        LinkedHashMap map = new LinkedHashMap();
        map.put("1", "API编号");
        map.put("2", "API组编号（ServiceId）");
        map.put("3", "API名称");
        map.put("4", "请求类型");
        map.put("5", "常量");
        map.put("6", "URI");
        map.put("7", "接口描述");
        String path = "D://export//";
        String fileName = "文件导出";
        String fileds[] = new String[]{"apiInfoId", "apiGroupId", "apiName", "httpMethod", "apiConst", "apiUri", "apiDesc"};// 设置列英文名（也就是实体类里面对应的列名）
        File file = CsvUtil.createCSVFile(apiJsVO.getInfoVOS(), fileds, map, path,
                fileName, ApiInfoVO.class);
        String fileName2 = file.getName();
        log.info("文件名称：" + fileName2);
    }

    /**
     * 测试数据API导出
     */
    @Test
    public void testApiCSV22() {
        String path = JsonTest.class.getClassLoader().getResource("dist/api").getPath();
        List<ApiJsVO> apiJsVOS = VueApiUtil.readVueJsFolder(path);
        log.info("" + apiJsVOS.size());
        List<ApiInfoVO> infoVOS = new ArrayList<>();
        for (ApiJsVO apiJsVO : apiJsVOS) {
            List<ApiInfoVO> vos = apiJsVO.getInfoVOS();
            infoVOS.addAll(vos);
        }
        LinkedHashMap map = new LinkedHashMap();
        map.put("1", "API编号");
        map.put("2", "API组编号（ServiceId）");
        map.put("3", "API名称");
        map.put("4", "请求类型");
        map.put("5", "常量");
        map.put("6", "URI");
        map.put("7", "接口描述");
        String exportPath = "D://export//";
        String fileName = "文件导出";
        String fileds[] = new String[]{"apiInfoId", "apiGroupId", "apiName", "httpMethod", "apiConst", "apiUri", "apiDesc"};// 设置列英文名（也就是实体类里面对应的列名）
        File file = CsvUtil.createCSVFile(infoVOS, fileds, map, exportPath,
                fileName, ApiInfoVO.class);
        String fileName2 = file.getName();
        log.info("文件名称：" + fileName2);
    }
}
