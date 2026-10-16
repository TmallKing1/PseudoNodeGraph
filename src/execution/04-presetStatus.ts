// 自动生成：执行节点 / 四、预设状态（IV. Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置预设状态】 Set Preset Status
 * 分类：执行节点 / 四、预设状态（IV. Preset Status）
 *
 * 设置指定目标实体的预设状态
 *
 * @en Set the Preset Status of the specified Target Entity
 * @param targetEntity 所要设置预设状态的实体（目标实体：实体）
 * @param presetStatusIndex 预设状态的唯一标识（预设状态索引：整数）
 * @param presetStatusValue 一般“0”为关闭，“1”为开启（预设状态值：整数）
 */
export declare function setPresetStatus(targetEntity: Entity, presetStatusIndex: int, presetStatusValue: int): void;
