package com.github.leijihui.spring.validation.coupon;

import com.alibaba.fastjson.JSONObject;
import com.github.leijihui.spring.validation.vo.CouponInfoVO;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/20 10:03
 * @className CouponTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class CouponTest {
    @Test
    public void couponVotoJson() {
        CouponInfoVO infoVO =  CouponInfoVO.builder().build();
        String jsonStr = JSONObject.toJSONString(infoVO);
        log.info(jsonStr);
    }
}
