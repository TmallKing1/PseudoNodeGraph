// 自动生成：事件节点 / 四、阵营相关（IV. Faction Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【实体阵营变化时】事件的出参 / Output parameters of "When Entity Faction Changes"
 */
export interface EntityFactionChangesEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 变化前阵营（变化前阵营：阵营）
   */
  readonly preChangeFaction: Faction;
  /**
   * 变化后阵营（变化后阵营：阵营）
   */
  readonly postChangeFaction: Faction;
}
/**
 * 【实体阵营变化时】 When Entity Faction Changes
 * 分类：事件节点 / 四、阵营相关（IV. Faction Related）
 *
 * 实体的阵营变化时，触发该事件
 *
 * @en This event is triggered when an Entity's Faction changes
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEntityFactionChanges(handler: (ev: EntityFactionChangesEvent) => void): void;
