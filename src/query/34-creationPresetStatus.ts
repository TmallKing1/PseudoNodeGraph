// 自动生成：查询节点 / 三十四、造物预设状态（XXXIV. Creation Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取复杂造物的预设状态值】 Get the Preset Status Value of the Complex Creation
 * 分类：查询节点 / 三十四、造物预设状态（XXXIV. Creation Preset Status）
 *
 * 节点功能 获取复杂造物指定预设状态索引的预设状态值
 *
 * @en Node Functions Get the preset status value of the complex creation
 * @param targetEntity 复杂造物实体（目标实体：实体）
 * @param presetStatusIndex 预设状态索引（预设状态索引：整数）
 * @returns 预设状态值（预设状态值：整数）
 */
export declare function getThePresetStatusValueOfTheComplexCreation(targetEntity: Entity, presetStatusIndex: int): int;
