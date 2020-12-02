package com.github.leijihui.spring.validation.coupon;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/27 14:06
 * @className TestJava
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class TestJava {
    private String a;
    @Test
    public void test() {
        double d = 0.6332;
        Double c = 0.6332;
        float a = 0.6332f;
        String str = new String("abcde");
        str.replace('c', 'x');
        System.out.println(str);
    }

    public TestJava() {
    }

    public TestJava(String a) {
        this.a = a;
    }
}
