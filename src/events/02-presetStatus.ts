// 自动生成：事件节点 / 二、预设状态（II. Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【预设状态变化时】事件的出参 / Output parameters of "When Preset Status Changes"
 */
export interface PresetStatusChangesEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 预设状态索引（预设状态索引：整数）
   */
  readonly presetStatusID: int;
  /**
   * 变化前值（变化前值：整数）
   */
  readonly preChangeValue: int;
  /**
   * 变化后值（变化后值：整数）
   */
  readonly postChangeValue: int;
}
/**
 * 【预设状态变化时】 When Preset Status Changes
 * 分类：事件节点 / 二、预设状态（II. Preset Status）
 *
 * 节点图所关联的实体的预设状态发生变化时，触发该事件
 *
 * @en This event is triggered when the Preset Status of the Entity associated with the Node Graph changes
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPresetStatusChanges(handler: (ev: PresetStatusChangesEvent) => void): void;
