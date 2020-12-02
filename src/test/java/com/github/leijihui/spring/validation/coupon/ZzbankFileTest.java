package com.github.leijihui.spring.validation.coupon;

import com.github.leijihui.spring.validation.util.FileUtils;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/20 17:44
 * @className ZzbankFileTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Data
@Slf4j
public class ZzbankFileTest {
    @Test
    public void testFile() {
        String filePath = "file/zzbank-service1.out";
        List<String> lineList = FileUtils.getContentByLine(filePath, false);
        String updateSqlFlag = " S.c.t.d.k.d.C.updateRghtIvntSt           : ==> Parameters: 2(String)";
        List<String> paramList = lineList
                .stream()
                .filter(line -> (line.contains(updateSqlFlag)))
                .collect(Collectors.toList());
        //Parameters: 2(String), null, 2020-11-20 12:28:05(String), 15698265377(String), 299317(String)
        Set<String> rghtIvntIdSet = new HashSet<>();
        paramList.stream().forEach(line -> {
            String parametersLine = line.substring(line.indexOf("Parameters"));
            String[] parametersArr = parametersLine.split(",");
            rghtIvntIdSet.add(parametersArr[4].trim().replace("(String)", ""));
        });
        log.info("total line count={}", lineList.size());
        log.info("update line  count={}", paramList.size());
        log.info("rghtIvntIdSet size={}", rghtIvntIdSet.size());
    }
}
