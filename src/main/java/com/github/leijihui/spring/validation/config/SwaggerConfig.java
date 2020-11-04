package com.github.leijihui.spring.validation.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.request.async.DeferredResult;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


@Configuration
@EnableSwagger2
public class SwaggerConfig {
    private final String basePackageName = "com.github.leijihui.spring.validation.controller";

    @Bean
    public Docket wxcpApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("springboot-validation")
                .genericModelSubstitutes(DeferredResult.class)
                .useDefaultResponseMessages(false)
                .forCodeGeneration(true)
                .pathMapping("/")// base，最终调用接口后会和paths拼接在一起
                .select()
                .apis(RequestHandlerSelectors.basePackage(basePackageName))
                //.paths(or(regex("/upload/.*")))//过滤的接口
                .build()
                .apiInfo(apiInfo());
    }


    private ApiInfo apiInfo() {
        ApiInfo apiInfo = new ApiInfo("Springboot Validation 最佳实践及实现原理，参数校验没那么简单！",//大标题
                "“Springboot Validation 最佳实践及实现原理，参数校验没那么简单！",//小标题
                "0.1",//版本
                "NO terms of service",
                "00000@qq.com",//作者
                "后台网址",//链接显示文字
                ""//网站链接
        );
        return apiInfo;
    }
}
