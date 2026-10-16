// 自动生成：执行节点 / 十二、运动器（XII. Motion Devices）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【添加匀速直线型基础运动器】 Add Uniform Basic Linear Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 在运行时动态添加一个匀速直线型基础运动器
 *
 * @en Dynamically add a Basic Motion Device with Uniform Linear Motion at runtime
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 * @param motionDeviceDuration 该运动器生效的时长（运动器时长：浮点数）
 * @param velocityVector 决定了速度大小和方向（速度向量：三维向量）
 */
export declare function addUniformBasicLinearMotionDevice(targetEntity: Entity, motionDeviceName: str, motionDeviceDuration: float, velocityVector: Vec3): void;

/**
 * 【添加匀速旋转型基础运动器】 Add Uniform Basic Rotation-Based Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 在运行时动态添加一个匀速旋转型基础运动器
 *
 * @en Dynamically add a Basic Motion Device with Uniform Rotation at runtime
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 * @param motionDeviceDuration 该运动器生效的时长（运动器时长：浮点数）
 * @param angularVelocityS 角速度大小（角速度(角度/秒)：浮点数）
 * @param rotationAxisOrientation 相对朝向（旋转轴朝向：三维向量）
 */
export declare function addUniformBasicRotationBasedMotionDevice(targetEntity: Entity, motionDeviceName: str, motionDeviceDuration: float, angularVelocityS: float, rotationAxisOrientation: Vec3): void;

/**
 * 【停止并删除基础运动器】 Stop and Delete Basic Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 停止并删除一个运行中的运动器
 *
 * @en Stop and delete a running Motion Device
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 * @param stopAllBasicMotionDevices “是”则停止该实体上的所有基础运动器，“否”则只停止与运动器名称对应的运动器（是否停止所有基础运动器：布尔值）
 */
export declare function stopAndDeleteBasicMotionDevice(targetEntity: Entity, motionDeviceName: str, stopAllBasicMotionDevices: bool): void;

/**
 * 【暂停基础运动器】 Pause Basic Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 暂停一个运行中的运动器，之后可使用恢复运动器节点使其恢复运动
 *
 * @en Pause a running Motion Device. The Resume Motion Device node can then be used to resume it
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 */
export declare function pauseBasicMotionDevice(targetEntity: Entity, motionDeviceName: str): void;

/**
 * 【恢复基础运动器】 Recover Basic Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 使目标实体上一个处于暂停状态的基础运动器恢复运动，需要目标实体持有基础运动器组件
 *
 * @en Resume a paused Basic Motion Device on the Target Entity. The Target Entity must have the Basic Motion Device Component
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 */
export declare function recoverBasicMotionDevice(targetEntity: Entity, motionDeviceName: str): void;

/**
 * 【激活基础运动器】 Activate Basic Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 激活一个配置在目标实体基础运动器组件上的运动器
 *
 * @en Activate a Basic Motion Device configured within the Target Entity's Basic Motion Device Component
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 */
export declare function activateBasicMotionDevice(targetEntity: Entity, motionDeviceName: str): void;

/**
 * 【添加朝向目标旋转型基础运动器】 Add Target-Oriented Rotation-Based Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 在关卡运行时为目标实体动态添加一个朝向目标旋转型基础运动器
 *
 * @en Dynamically add a Basic Motion Device with Target-Oriented Rotation to the Target Entity during Stage runtime
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 * @param motionDeviceDuration 该运动器生效的时长（运动器时长：浮点数）
 * @param targetAngle 绝对角度（目标角度：三维向量）
 */
export declare function addTargetOrientedRotationBasedMotionDevice(targetEntity: Entity, motionDeviceName: str, motionDeviceDuration: float, targetAngle: Vec3): void;

/**
 * 【开启定点运动器】 Activate Fixed-Point Motion Device
 * 分类：执行节点 / 十二、运动器（XII. Motion Devices）
 *
 * 在关卡运行时为目标实体动态添加一个定点运动型基础运动器
 *
 * @en Dynamically add a Fixed-Point Basic Motion Device to the Target Entity during Stage runtime
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param motionDeviceName 该运动器的标识（运动器名称：字符串）
 * @param movementMode 移动方式（移动方式：枚举）
 * @param movementSPD 移动速度（移动速度：浮点数）
 * @param targetLocation 绝对位置（目标位置：三维向量）
 * @param targetRotation 绝对旋转（目标旋转：三维向量）
 * @param lockRotation 是否锁定旋转（是否锁定旋转：布尔值）
 * @param parameterType 分为固定速度、固定时间（参数类型：枚举）
 * @param movementTime 移动时间（移动时间：浮点数）
 */
export declare function activateFixedPointMotionDevice(targetEntity: Entity, motionDeviceName: str, movementMode: E.FixedPointMovementMode, movementSPD: float, targetLocation: Vec3, targetRotation: Vec3, lockRotation: bool, parameterType: E.FixedPointParamType, movementTime: float): void;
