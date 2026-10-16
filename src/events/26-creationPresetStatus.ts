// 自动生成：事件节点 / 二十六、造物预设状态（XXVI. Creation Preset Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【复杂造物预设状态变化时】事件的出参 / Output parameters of "When Complex Creation Preset Status Changes"
 */
export interface ComplexCreationPresetStatusChangesEvent {
  /**
   * 复杂造物实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 复杂造物的GUID（事件源GUID：GUID）
   */
  readonly eventSourceEntityGUID: GUID;
  /**
   * 预设状态索引（预设状态索引：整数）
   */
  readonly presetStatusIndex: int;
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
 * 【复杂造物预设状态变化时】 When Complex Creation Preset Status Changes
 * 分类：事件节点 / 二十六、造物预设状态（XXVI. Creation Preset Status）
 *
 * 节点功能 使用【 设置复杂造物的预设状态值】 节点改变了复杂造物的预设状态时，会触发该事件(修改后和修改前必须为不同的值才会触发)
 * 该节点图事件只有复杂造物的节点图能收到
 *
 * @en This event is triggered when the preset state of a complex creation is changed using the " Set the preset status value of the complex creation " node (the modified and unmodified values ​​must be different for this event to trigger).
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onComplexCreationPresetStatusChanges(handler: (ev: ComplexCreationPresetStatusChangesEvent) => void): void;
