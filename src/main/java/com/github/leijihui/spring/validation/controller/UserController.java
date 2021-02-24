package com.github.leijihui.spring.validation.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.leijihui.spring.validation.base.Result;
import com.github.leijihui.spring.validation.base.validation.ValidationList;
import com.github.leijihui.spring.validation.config.ValidParamConst;
import com.github.leijihui.spring.validation.pojo.dto.UserDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.hibernate.validator.constraints.Length;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.util.CollectionUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolation;
import javax.validation.Validator;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

/**
 * @author leijihui
 */
@RequestMapping("/api/user")
@RestController
@Validated
@Api(value = "用户校验测试接口", description = "用户校验测试接口")
public class UserController {

    @Qualifier(ValidParamConst.SPRING_VALIDATOR_BEAN)
    @Autowired
    private Validator globalValidator;


    // 编程式校验
    @PostMapping("/saveWithCodingValidate")
    @ApiOperation(value = "用户校验测试接口->编程式校验", notes = "用户校验测试接口->编程式校验")
    public Result saveWithCodingValidate(@RequestBody UserDTO userDTO) {
        Set<ConstraintViolation<UserDTO>> validate = globalValidator.validate(userDTO, UserDTO.Save.class);
        // 如果校验通过，validate为空；否则，validate包含未校验通过项
        if (validate.isEmpty()) {
            // 校验通过，才会执行业务逻辑处理

        } else {
            for (ConstraintViolation<UserDTO> userDTOConstraintViolation : validate) {
                // 校验失败，做其它逻辑
                System.out.println(userDTOConstraintViolation);
            }
        }
        return Result.ok();
    }

    @ApiOperation(value = "用户校验测试接口->保存对象", notes = "用户校验测试接口->保存对象")
    @PostMapping("/save")
    public Result saveUser(@RequestBody @Validated(UserDTO.Save.class) UserDTO userDTO) {
        // 校验通过，才会执行业务逻辑处理
        return Result.ok();
    }

    @ApiOperation(value = "用户校验测试接口->保存集合", notes = "用户校验测试接口->保存集合")
    @PostMapping("/saveList")
    public Result saveList(@RequestBody @Validated(UserDTO.Save.class) ValidationList<UserDTO> userList) {
        // 校验通过，才会执行业务逻辑处理
        return Result.ok();
    }

    @ApiOperation(value = "用户校验测试接口->编程式校验->保存集合", notes = "用户校验测试接口->编程式校验合->保存集合")
    @PostMapping("/saveListWithCodingValidate")
    public Result saveListWithCodingValidate(@RequestBody String requestBody) {
        // 校验通过，才会执行业务逻辑处理
        ObjectMapper mapper = new ObjectMapper();
        List<UserDTO> userDTOList = null;
        try {
            userDTOList = Arrays.asList(mapper.readValue(requestBody, UserDTO[].class));
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("json格式错误");
        }
        if (CollectionUtils.isEmpty(userDTOList)) {
            throw new RuntimeException("集合长度为0");
        }
        ValidationList<UserDTO> userList = new ValidationList<UserDTO>();
        userDTOList.forEach(item -> {
            userList.add(item);
        });
        Set<ConstraintViolation<ValidationList<UserDTO>>> validate = globalValidator.validate(userList, UserDTO.Save.class);
        // 如果校验通过，validate为空；否则，validate包含未校验通过项
        if (validate.isEmpty()) {
            // 校验通过，才会执行业务逻辑处理

        } else {
            for (ConstraintViolation<ValidationList<UserDTO>> userDTOConstraintViolation : validate) {
                // 校验失败，做其它逻辑
                System.out.println(userDTOConstraintViolation);
            }
        }
        return Result.ok();
    }

    @ApiOperation(value = "用户校验测试接口->修改方法", notes = "用户校验测试接口->修改方法")
    @PostMapping("/update")
    public Result updateUser(@RequestBody @Validated(UserDTO.Update.class) UserDTO userDTO) {
        // 校验通过，才会执行业务逻辑处理
        return Result.ok();
    }


    // 路径变量
    @ApiOperation(value = "用户校验测试接口->路径变量", notes = "用户校验测试接口->路径变量")
    @GetMapping("{userId}")
    public Result detail(@PathVariable("userId") @Min(10000000000000000L) Long userId) {
        // 校验通过，才会执行业务逻辑处理
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(userId);
        userDTO.setAccount("11111111111111111");
        userDTO.setUserName("xixi");
        userDTO.setAccount("11111111111111111");
        return Result.ok(userDTO);
    }

    // 查询参数
    @ApiOperation(value = "用户校验测试接口->查询参数", notes = "用户校验测试接口->查询参数")
    @GetMapping("getByAccount")
    public Result getByAccount(@ApiParam(name = "account", required = true)
                               @RequestParam("account")
                               @Length(min = 6, max = 20) @NotNull String account) {
        // 校验通过，才会执行业务逻辑处理
        UserDTO userDTO = new UserDTO();
        userDTO.setUserId(10000000000000003L);
        userDTO.setAccount(account);
        userDTO.setUserName("xixi");
        userDTO.setAccount("11111111111111111");
        return Result.ok(userDTO);
    }

}
