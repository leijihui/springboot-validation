package com.github.leijihui.spring.validation;

import com.github.leijihui.spring.validation.config.ValidParamConst;
import org.hibernate.validator.HibernateValidator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

@SpringBootApplication
public class SpringValidationApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringValidationApplication.class, args);
    }


    @Bean(name = ValidParamConst.SPRING_VALIDATOR_BEAN)
    public Validator validator() {
        ValidatorFactory validatorFactory = Validation.byProvider(HibernateValidator.class)
                .configure()
                // 快速失败模式
                .failFast(false)
                .buildValidatorFactory();
        return validatorFactory.getValidator();
    }

}
