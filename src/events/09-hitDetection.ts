// 自动生成：事件节点 / 九、命中判定（IX. Hit Detection）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【命中检测触发时】事件的出参 / Output parameters of "When On-Hit Detection Is Triggered"
 */
export interface OnHitDetectionIsTriggeredEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 为否时，命中的是场景 为是时，命中实体，此时可以从【命中实体】出参中取出值（是否命中受击盒：布尔值）
   */
  readonly onHitHurtbox: bool;
  /**
   * 仅当命中受击盒时，命中实体才有意义（命中实体：实体）
   */
  readonly onHitEntity: Entity;
  /**
   * 命中位置（命中位置：三维向量）
   */
  readonly onHitLocation: Vec3;
}
/**
 * 【命中检测触发时】 When On-Hit Detection Is Triggered
 * 分类：事件节点 / 九、命中判定（IX. Hit Detection）
 *
 * 命中检测组件命中其他实体或场景时组件的持有者触发该事件
 *
 * @en This event is triggered when the On-Hit Detection Component's Owner hits other Entities or the Scene
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onOnHitDetectionIsTriggered(handler: (ev: OnHitDetectionIsTriggeredEvent) => void): void;
