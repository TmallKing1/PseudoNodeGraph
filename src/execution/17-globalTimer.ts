// 自动生成：执行节点 / 十七、全局计时器（XVII. Global Timer）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【暂停全局计时器】 Pause Global Timer
 * 分类：执行节点 / 十七、全局计时器（XVII. Global Timer）
 *
 * 通过节点图，可以暂停运行中的全局计时器
 * 暂停时，若有界面控件引用对应计时器，则其显示时间也会暂停
 *
 * @en Pause a running Global Timer via the Node Graph
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称（计时器名称：字符串）
 */
export declare function pauseGlobalTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【启动全局计时器】 Start Global Timer
 * 分类：执行节点 / 十七、全局计时器（XVII. Global Timer）
 *
 * 在目标实体上启动一个全局计时器
 * 目标实体上的计时器，通过计时器名称进行唯一标识
 * 计时器根据计时器管理中的配置，会对应创生倒计时、正计时的计时器
 *
 * @en Start a Global Timer on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称（计时器名称：字符串）
 */
export declare function startGlobalTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【恢复全局计时器】 Recover Global Timer
 * 分类：执行节点 / 十七、全局计时器（XVII. Global Timer）
 *
 * 使目标实体上一个处于暂停状态的计时器恢复运行
 *
 * @en Resume a paused Global Timer on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称（计时器名称：字符串）
 */
export declare function recoverGlobalTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【终止全局计时器】 Stop Global Timer
 * 分类：执行节点 / 十七、全局计时器（XVII. Global Timer）
 *
 * 通过节点图，提前结束运行中的全局计时器
 *
 * @en Use the node graph to stop running a global timer early
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称（计时器名称：字符串）
 */
export declare function stopGlobalTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【增加全局计时器的值】 Increase Global Timer Value
 * 分类：执行节点 / 十七、全局计时器（XVII. Global Timer）
 *
 * 通过节点图，可以将运行中的全局计时器时间进行调整
 * 若计时器先暂停，后修改减少时间，则修改后时间最少为0s
 * 若为倒计时，则暂停后修改时间为0s且恢复计时器后，会触发【全局计时器触发时】事件
 * 若计时器先暂停，后修改时间到0s，再修改增加时间，再恢复计时器，则不会触发【全局计时器触发时】事件
 * 若有界面控件引用对应计时器，则界面控件的计时表现会同步修改
 *
 * @en Adjust the time of a running Global Timer via the Node Graph
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称（计时器名称：字符串）
 * @param increaseValue 若计时器为倒计时，则正数为增加倒计时剩余时间，负数为减少剩余时间 若计时器为正计时，则正数为增加正计时累计时间，负数为减少累计时间（增加值：浮点数）
 */
export declare function increaseGlobalTimerValue(targetEntity: Entity, timerName: str, increaseValue: float): void;
