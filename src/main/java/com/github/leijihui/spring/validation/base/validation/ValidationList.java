package com.github.leijihui.spring.validation.base.validation;

import lombok.experimental.Delegate;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

public class ValidationList<E> implements List<E> {

    @Delegate
    @Valid // 一定要加@Valid注解
    public List<E> list = new ArrayList<>();

}
