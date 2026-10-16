// 自动生成：事件节点 / 二十五、造物巡逻（XXV. Creation Patrol）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【造物抵达巡逻路点时】事件的出参 / Output parameters of "When Creation Reaches Patrol Waypoint"
 */
export interface CreationReachesPatrolWaypointEvent {
  /**
   * 运行时的造物实体（造物实体：实体）
   */
  readonly creationEntity: Entity;
  /**
   * 造物的GUID，若非初始布设的造物，则输出为空（造物GUID：GUID）
   */
  readonly creationGUID: GUID;
  /**
   * 造物当前生效的巡逻模板序号（当前巡逻模板序号：整数）
   */
  readonly currentPatrolTemplateID: int;
  /**
   * 造物当前生效的巡逻模板引用的路径索引（当前路径索引：整数）
   */
  readonly currentPathIndex: int;
  /**
   * 造物当前抵达的路点序号（当前抵达路点序号：整数）
   */
  readonly currentReachedWaypointID: int;
  /**
   * 造物即将前往的路点序号（即将前往路点序号：整数）
   */
  readonly nextWaypointID: int;
}
/**
 * 【造物抵达巡逻路点时】 When Creation Reaches Patrol Waypoint
 * 分类：事件节点 / 二十五、造物巡逻（XXV. Creation Patrol）
 *
 * 若在巡逻模板编辑中，勾选了指定路点的 到达发送节点图事件 选项，则会在满足条件时，收到该节点图事件
 * 该节点图事件只能造物的节点图收到
 *
 * @en When the Send Node Graph Event on Arrival option is enabled for a waypoint in the Patrol template, a Node Graph Event is triggered once the specified conditions are met
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCreationReachesPatrolWaypoint(handler: (ev: CreationReachesPatrolWaypointEvent) => void): void;
