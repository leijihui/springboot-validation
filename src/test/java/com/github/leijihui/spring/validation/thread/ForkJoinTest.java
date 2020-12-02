package com.github.leijihui.spring.validation.thread;

import lombok.extern.slf4j.Slf4j;
import org.junit.Test;

import java.util.concurrent.ForkJoinPool;
import java.util.stream.LongStream;

/**
 * @author Lei Ji Hui
 * @version V1.0
 * @date 2020/11/12 15:28
 * @className ForkJoinTest
 * @copyright 天阳宏业科技股份有限公司 - All Rights Reserved
 **/
@Slf4j
public class ForkJoinTest {
    @Test
    public void test01(){
     /*   // 获取任务的开始时间
        long millis = System.currentTimeMillis();

        ForkJoinPool pool = new ForkJoinPool();
       // ForkJoinCommon forkJoinCommon = new ForkJoinCommon(0L, 10000000000L);

        //  执行任务
        Long result = pool.invoke(forkJoinCommon);
        System.out.println(result);

        //获取任务的结束时间
        long millis2 = System.currentTimeMillis();
        // 21444
        System.out.println("使用 Fork/Join框架计算总共用时："+(millis2-millis));*/
    }
    @Test
    public void test02(){
        System.out.println("-------------jkfdlk");
        // 获取任务的开始时间
        long millis = System.currentTimeMillis();

        int num=0;
        for (int i = 0; i < 100000000L; i++) {
            num+=i;
        }

        // 获取任务的结束时间
        long millis2 = System.currentTimeMillis();
        System.out.println(num);
        System.out.println("使用传统方式计算共用时："+(millis2-millis));
    }
    @Test
    public void test03(){
        // 获取任务的开始时间
        long millis = System.currentTimeMillis();

        long sum = LongStream.rangeClosed(0L, 100000000L)
                .parallel()
                .sum();
        // 获取任务的结束时间
        long millis2 = System.currentTimeMillis();
        System.out.println(sum);
        // 84844
        System.out.println("使用Java8并行流方式计算共用时："+(millis2-millis));
    }
}
