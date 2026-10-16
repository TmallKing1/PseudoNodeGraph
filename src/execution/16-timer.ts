// 自动生成：执行节点 / 十六、定时器（XVI. Timer）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【启动定时器】 Start Timer
 * 分类：执行节点 / 十六、定时器（XVI. Timer）
 *
 * 在目标实体上启动一个定时器
 * 定时器通过定时器名称进行唯一标识
 * 定时器由一个循环或不循环的定时器序列组成。定时器序列应是一组从小到大排列的，以秒为单位的时间点，在定时器运行到这些时间点时，会触发【定时器触发时】事件。该定时器序列最大限制为100
 * 例如：[1,3,5,7]，如果传入这样的定时器序列，那么分别在第1、3、5、7秒，会触发【定时器触发时】事件
 * 当是否循环为“是”时，在定时器到达最后一个时间点后，会从0秒开始进行循环计时。以[1,3,5,7]这样的定时器为例，则在运行到7秒后，再从0秒开始计时
 *
 * @en Start a Timer on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该定时器的标识（定时器名称：字符串）
 * @param loop “是”则会循环执行定时器序列（是否循环：布尔值）
 * @param timerSequence 需要传入一个从小到大排列的列表。如果传入的列表不合法（不是严格按照从小到大排列、存在负数等），定时器不会运行（定时器序列：浮点数列表）
 */
export declare function startTimer(targetEntity: Entity, timerName: str, loop: bool, timerSequence: float[]): void;

/**
 * 【暂停定时器】 Pause Timer
 * 分类：执行节点 / 十六、定时器（XVI. Timer）
 *
 * 暂停指定目标实体上的指定定时器。之后可以使用【恢复定时器】节点恢复该定时器的计时
 *
 * @en Pauses the specified Timer on the Target Entity. The [Resume Timer] node can then be used to resume its countdown
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该定时器的标识（定时器名称：字符串）
 */
export declare function pauseTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【恢复定时器】 Resume Timer
 * 分类：执行节点 / 十六、定时器（XVI. Timer）
 *
 * 使目标实体上一个处于暂停状态的定时器恢复运行
 *
 * @en Resume a paused Timer on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该定时器的标识（定时器名称：字符串）
 */
export declare function resumeTimer(targetEntity: Entity, timerName: str): void;

/**
 * 【终止定时器】 Stop Timer
 * 分类：执行节点 / 十六、定时器（XVI. Timer）
 *
 * 完全终止目标实体上的指定定时器，不可恢复
 *
 * @en Completely terminate the specified Timer on the Target Entity; it cannot be resumed
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param timerName 该定时器的标识（定时器名称：字符串）
 */
export declare function stopTimer(targetEntity: Entity, timerName: str): void;
