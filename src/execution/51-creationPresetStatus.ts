// 自动生成：执行节点 / 五十一、造物预设状态（L. Creation Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置复杂造物的预设状态值】 Set the Preset Status Value of the Complex Creation
 * 分类：执行节点 / 五十一、造物预设状态（L. Creation Preset Status）
 *
 * 可以设置复杂造物的指定预设状态索引的预设状态值
 *
 * @en You can set the preset state value for a specified preset state index of a complex creation.
 * @param targetEntity 仅对复杂造物生效（目标实体：实体）
 * @param presetStatusIndex 预设状态索引（预设状态索引：整数）
 * @param presetStatusValue 预设状态值（预设状态值：整数）
 */
export declare function setThePresetStatusValueOfTheComplexCreation(targetEntity: Entity, presetStatusIndex: int, presetStatusValue: int): void;
