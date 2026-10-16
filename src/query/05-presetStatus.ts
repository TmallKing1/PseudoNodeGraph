// 自动生成：查询节点 / 五、预设状态（V. Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取预设状态】 Get Preset Status
 * 分类：查询节点 / 五、预设状态（V. Preset Status）
 *
 * 获取目标实体的指定预设状态的预设状态值。如果该实体没有指定的预设状态，则返回0
 *
 * @en Returns the value of the specified Preset Status for the Target Entity. Returns 0 if the Entity does not have that Preset Status
 * @param targetEntity 目标实体（目标实体：实体）
 * @param presetStatusIndex 预设状态索引（预设状态索引：整数）
 * @returns 预设状态值（预设状态值：整数）
 */
export declare function getPresetStatus(targetEntity: Entity, presetStatusIndex: int): int;
