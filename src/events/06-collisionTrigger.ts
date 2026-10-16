// 自动生成：事件节点 / 六、碰撞触发器（VI. Collision Trigger）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【离开碰撞触发器时】事件的出参 / Output parameters of "When Exiting Collision Trigger"
 */
export interface ExitingCollisionTriggerEvent {
  /**
   * 上述中的实体A（离开者实体：实体）
   */
  readonly exitingEntity: Entity;
  /**
   * 离开者实体GUID（离开者实体GUID：GUID）
   */
  readonly exitingEntityGUID: GUID;
  /**
   * 上述中的实体B（触发器实体：实体）
   */
  readonly triggerEntity: Entity;
  /**
   * 触发器实体GUID（触发器实体GUID：GUID）
   */
  readonly triggerEntityGUID: GUID;
  /**
   * 触发器序号（触发器序号：整数）
   */
  readonly triggerID: int;
}
/**
 * 【离开碰撞触发器时】 When Exiting Collision Trigger
 * 分类：事件节点 / 六、碰撞触发器（VI. Collision Trigger）
 *
 * 运行中实体A的“碰撞触发源”范围，离开其他运行中实体B的“碰撞触发器”范围
 * 会发送节点图事件给配置“碰撞触发器”的实体B
 *
 * @en When the "Collision Trigger Source" range of active Entity A leaves the "Collision Trigger" range of active Entity B
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onExitingCollisionTrigger(handler: (ev: ExitingCollisionTriggerEvent) => void): void;

/**
 * 【进入碰撞触发器时】事件的出参 / Output parameters of "When Entering Collision Trigger"
 */
export interface EnteringCollisionTriggerEvent {
  /**
   * 上述中的实体A（进入者实体：实体）
   */
  readonly enteringEntity: Entity;
  /**
   * 进入者实体GUID（进入者实体GUID：GUID）
   */
  readonly enteringEntityGUID: GUID;
  /**
   * 上述中的实体B（触发器实体：实体）
   */
  readonly triggerEntity: Entity;
  /**
   * 触发器实体GUID（触发器实体GUID：GUID）
   */
  readonly triggerEntityGUID: GUID;
  /**
   * 实体B碰撞触发器组件中的对应序号的触发器（触发器序号：整数）
   */
  readonly triggerID: int;
}
/**
 * 【进入碰撞触发器时】 When Entering Collision Trigger
 * 分类：事件节点 / 六、碰撞触发器（VI. Collision Trigger）
 *
 * 运行中实体A的”碰撞触发源“范围，进入其他运行中实体B的“碰撞触发器”范围。
 * 会发送节点图事件给配置“碰撞触发器”的实体B
 *
 * @en The "Collision Trigger Source" range of a runtime entity A enters the "Collision Trigger" range of another runtime entity B
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEnteringCollisionTrigger(handler: (ev: EnteringCollisionTriggerEvent) => void): void;
