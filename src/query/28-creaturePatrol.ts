// 自动生成：查询节点 / 二十八、造物巡逻（XXVIII. Creature Patrol）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取当前造物的巡逻模板】的多个出参 / Outputs of "Get Current Creation's Patrol Template"
 */
export interface GetCurrentCreationsPatrolTemplateResult {
  /**
   * 造物当前生效的巡逻模板序号（巡逻模板序号：整数）
   */
  readonly patrolTemplateID: int;
  /**
   * 造物当前生效的巡逻模板引用的路径索引（路径索引：整数）
   */
  readonly pathIndex: int;
  /**
   * 造物即将前往的路点序号（目标路点序号：整数）
   */
  readonly targetWaypointIndex: int;
}
/**
 * 【获取当前造物的巡逻模板】 Get Current Creation's Patrol Template
 * 分类：查询节点 / 二十八、造物巡逻（XXVIII. Creature Patrol）
 *
 * 获取指定造物实体的巡逻模板信息
 *
 * @en Returns the Patrol Template information of the specified Creation Entity
 * @param creationEntity 运行时的造物实体（造物实体：实体）
 * @returns GetCurrentCreationsPatrolTemplateResult（多出参，见接口字段）
 */
export declare function getCurrentCreationsPatrolTemplate(creationEntity: Entity): GetCurrentCreationsPatrolTemplateResult;
