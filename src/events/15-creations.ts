// 自动生成：事件节点 / 十五、造物（XV. Creations）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【造物入战时】事件的出参 / Output parameters of "When Creation Enters Combat"
 */
export interface CreationEntersCombatEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
}
/**
 * 【造物入战时】 When Creation Enters Combat
 * 分类：事件节点 / 十五、造物（XV. Creations）
 *
 * 仅在经典仇恨模式生效
 * 造物入战时触发该事件
 *
 * @en Only effective in Classic Aggro Mode
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCreationEntersCombat(handler: (ev: CreationEntersCombatEvent) => void): void;

/**
 * 【造物脱战时】事件的出参 / Output parameters of "When Creation Leaves Combat"
 */
export interface CreationLeavesCombatEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
}
/**
 * 【造物脱战时】 When Creation Leaves Combat
 * 分类：事件节点 / 十五、造物（XV. Creations）
 *
 * 仅在经典仇恨模式生效
 * 造物脱战时触发该事件
 *
 * @en Only effective in Classic Aggro Mode
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCreationLeavesCombat(handler: (ev: CreationLeavesCombatEvent) => void): void;
