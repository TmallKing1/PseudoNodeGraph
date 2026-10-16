// 自动生成：查询节点 / 十、跟随运动器（X. Follow Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取跟随运动器的目标】的多个出参 / Outputs of "Get Follow Motion Device Target"
 */
export interface GetFollowMotionDeviceTargetResult {
  /**
   * 跟随目标实体（跟随目标实体：实体）
   */
  readonly followTargetEntity: Entity;
  /**
   * 跟随目标GUID（跟随目标GUID：GUID）
   */
  readonly followTargetGUID: GUID;
}
/**
 * 【获取跟随运动器的目标】 Get Follow Motion Device Target
 * 分类：查询节点 / 十、跟随运动器（X. Follow Motion Device）
 *
 * 获取跟随运动器的目标，可以获取目标实体和实体的GUID
 *
 * @en Returns the Target of the Follow Motion Device, including the Target Entity and its GUID
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetFollowMotionDeviceTargetResult（多出参，见接口字段）
 */
export declare function getFollowMotionDeviceTarget(targetEntity: Entity): GetFollowMotionDeviceTargetResult;
