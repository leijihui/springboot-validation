package com.github.leijihui.spring.validation.test;

import com.github.leijihui.spring.validation.util.VueApiUtil;
import com.github.leijihui.spring.validation.vo.ApiJsVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.List;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/6 9:56
 * @className FileTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class FileTest {
    @Test
    public void testFileFolder() {
        String path = JsonTest.class.getClassLoader().getResource("dist/api").getPath();
        List<ApiJsVO> apiJsVOS = VueApiUtil.readVueJsFolder(path);
        log.info("" + apiJsVOS.size());
    }
}
