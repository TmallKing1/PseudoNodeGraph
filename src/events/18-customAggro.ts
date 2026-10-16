// 自动生成：事件节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【仇恨目标变化时】事件的出参 / Output parameters of "When Aggro Target Changes"
 */
export interface AggroTargetChangesEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 变化前仇恨目标（变化前仇恨目标：实体）
   */
  readonly preChangeAggroTarget: Entity;
  /**
   * 变化后仇恨目标（变化后仇恨目标：实体）
   */
  readonly postChangeAggroTarget: Entity;
}
/**
 * 【仇恨目标变化时】 When Aggro Target Changes
 * 分类：事件节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 仇恨目标发生变化时，触发该事件
 * 入战和脱战也可以触发该事件
 *
 * @en Available only in Custom Aggro Mode
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onAggroTargetChanges(handler: (ev: AggroTargetChangesEvent) => void): void;

/**
 * 【自身入战时】事件的出参 / Output parameters of "When Self Enters Combat"
 */
export interface SelfEntersCombatEvent {
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
 * 【自身入战时】 When Self Enters Combat
 * 分类：事件节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 实体自身入战时，触发该事件
 *
 * @en Available only in Custom Aggro Mode
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onSelfEntersCombat(handler: (ev: SelfEntersCombatEvent) => void): void;

/**
 * 【自身脱战时】事件的出参 / Output parameters of "When Self Leaves Combat"
 */
export interface SelfLeavesCombatEvent {
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
 * 【自身脱战时】 When Self Leaves Combat
 * 分类：事件节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 实体自身脱战时，触发该事件
 *
 * @en Available only in Custom Aggro Mode
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onSelfLeavesCombat(handler: (ev: SelfLeavesCombatEvent) => void): void;
