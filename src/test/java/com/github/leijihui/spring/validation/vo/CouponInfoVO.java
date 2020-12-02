package com.github.leijihui.spring.validation.vo;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.io.Serializable;

@Data
@Builder
public class CouponInfoVO implements Serializable {

    private String cpnBatchId; // 卡券批次id（权益id）

    private String cpnName; // 卡券名称

    private String cpnType; // 卡券类型[0-抵用券1-折扣券  2-兑换码 3-直充券]

    private float discntrAmt; // 抵用券金额

    private int totalCnt; // 卡券总数量

    private int reaminCpnNum; // 剩余卡券数量

    private String cpnPic; // 卡券图片

    private String cpnUseComnt; // 卡券使用说明

    private String orgNo; // 扩展信息, 机构编号

    //@NotBlank(message = "H5活动编号不可为空")
    private String activityId; // 扩展信息, H5活动编号

    //@NotBlank(message = "用户open_id不可为空")
    private String openId; // 扩展信息, 用户open_id

    @NotBlank(message = "用户手机号不可为空")
    private String mblPhNo; // 扩展信息, 用户手机号

    // @NotBlank(message = "平台id不可为空")
    private String platformId; // 扩展信息, 平台id

    //    @NotBlank(message = "渠道id不可为空")
    private String channelId; // 扩展信息, 渠道id

    @NotBlank(message = "订单id不可为空")
    private String orderId; // 扩展信息, 唯一订单id[避免重复推送]

    @NotBlank(message = "系统奖品id不可为空")
    private String prizeId; // 系统奖品id

    @NotBlank(message = "奖品类型不可为空")
    private String prizeType; // 奖品类型

    @NotBlank(message = "奖品名称不可为空")
    private String prizeName; // 奖品名称

    @NotBlank(message = "中奖时间不可为空")
    private String dataDt; // 中奖时间, 格式: yyyy-MM-dd HH:mm:ss


}
