// 自动生成：查询节点 / 十一、全局计时器（XI. Global Timer）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取全局计时器当前时间】 Get Current Global Timer Time
 * 分类：查询节点 / 十一、全局计时器（XI. Global Timer）
 *
 * 获取目标实体上指定全局计时器的当前时间
 *
 * @en Returns the current time of the specified Global Timer on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 目标实体（目标实体：实体）
 * @param timerName 计时器名称（计时器名称：字符串）
 * @returns 当前时间（当前时间：浮点数）
 */
export declare function getCurrentGlobalTimerTime(targetEntity: Entity, timerName: str): float;
