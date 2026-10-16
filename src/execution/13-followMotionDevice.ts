// 自动生成：执行节点 / 十三、跟随运动器（XIII. Follow Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【以GUID切换跟随运动器的目标】 Switch Follow Motion Device Target by GUID
 * 分类：执行节点 / 十三、跟随运动器（XIII. Follow Motion Device）
 *
 * 以GUID切换跟随运动器的跟随目标
 *
 * @en Switch the Follow Target of the Follow Motion Device by GUID
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 跟随运动器组件所在的实体（目标实体：实体）
 * @param followTargetGUID 跟随目标的标识（跟随目标GUID：GUID）
 * @param followTargetAttachmentPointName 跟随的挂接点名称（跟随目标挂接点名称：字符串）
 * @param locationOffset 以【跟随坐标系】为基准产生的位置偏移（位置偏移：三维向量）
 * @param rotationOffset 以【跟随坐标系】为基准产生的旋转偏移（旋转偏移：三维向量）
 * @param followCoordinateSystem 可选”相对坐标系“、”世界坐标系“（跟随坐标系：枚举）
 * @param followType 可选”完全跟随“、”跟随位置“、”跟随旋转”（跟随类型：枚举）
 */
export declare function switchFollowMotionDeviceTargetByGUID(targetEntity: Entity, followTargetGUID: GUID, followTargetAttachmentPointName: str, locationOffset: Vec3, rotationOffset: Vec3, followCoordinateSystem: E.FollowCoordinateSystem, followType: E.FollowType): void;

/**
 * 【激活/关闭跟随运动器】 Activate/Disable Follow Motion Device
 * 分类：执行节点 / 十三、跟随运动器（XIII. Follow Motion Device）
 *
 * 使目标实体上的跟随运动器组件逻辑激活/关闭
 *
 * @en Enable/Disable the Follow Motion Device logic on the Target Entity
 * @param targetEntity 跟随运动器组件所在的实体（目标实体：实体）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableFollowMotionDevice(targetEntity: Entity, activate: bool): void;

/**
 * 【以实体切换跟随运动器的目标】 Switch Follow Motion Device Target by Entity
 * 分类：执行节点 / 十三、跟随运动器（XIII. Follow Motion Device）
 *
 * 以实体切换跟随运动器的跟随目标
 *
 * @en Switch the Follow Target of the Follow Motion Device by Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 跟随运动器组件所在的实体（目标实体：实体）
 * @param followTargetEntity 跟随目标的实体（跟随目标实体：实体）
 * @param followTargetAttachmentPointName 跟随的挂接点名称（跟随目标挂接点名称：字符串）
 * @param locationOffset 以【跟随坐标系】为基准产生的位置偏移（位置偏移：三维向量）
 * @param rotationOffset 以【跟随坐标系】为基准产生的旋转偏移（旋转偏移：三维向量）
 * @param followCoordinateSystem 可选”相对坐标系“、”世界坐标系“（跟随坐标系：枚举）
 * @param followType 可选”完全跟随“、”跟随位置“、”跟随旋转”（跟随类型：枚举）
 */
export declare function switchFollowMotionDeviceTargetByEntity(targetEntity: Entity, followTargetEntity: Entity, followTargetAttachmentPointName: str, locationOffset: Vec3, rotationOffset: Vec3, followCoordinateSystem: E.FollowCoordinateSystem, followType: E.FollowType): void;
