// 自动生成：查询节点 / 十九、路径（XIX. Global Path）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取指定路径点信息】的多个出参 / Outputs of "Get Specified Waypoint Info"
 */
export interface GetSpecifiedWaypointInfoResult {
  /**
   * 路点位置（路点位置：三维向量）
   */
  readonly waypointLocation: Vec3;
  /**
   * 路点朝向（路点朝向：三维向量）
   */
  readonly waypointOrientation: Vec3;
}
/**
 * 【获取指定路径点信息】 Get Specified Waypoint Info
 * 分类：查询节点 / 十九、路径（XIX. Global Path）
 *
 * 查询指定路径的特定路点信息
 *
 * @en Searches the specified Waypoint information for the given Path
 * @param pathIndex 路径索引（路径索引：整数）
 * @param pathWaypointID 路径路点序号（路径路点序号：整数）
 * @returns GetSpecifiedWaypointInfoResult（多出参，见接口字段）
 */
export declare function getSpecifiedWaypointInfo(pathIndex: int, pathWaypointID: int): GetSpecifiedWaypointInfoResult;

/**
 * 【获得全局路径的路点个数】 Get the Number of Waypoints in the Global Path
 * 分类：查询节点 / 十九、路径（XIX. Global Path）
 *
 * 获得指定全局路径的路点个数
 *
 * @en Get the number of Waypoints in the Global Path
 * @param pathIndex 路径索引（路径索引：整数）
 * @returns 路点个数（路点个数：整数）
 */
export declare function getTheNumberOfWaypointsInTheGlobalPath(pathIndex: int): int;
