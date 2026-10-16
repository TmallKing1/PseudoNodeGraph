// 自动生成：查询节点 / 三十六、操控运动器（XXXVI. Control Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询玩家当前激活操控运动器列表】 Query Player's Currently Activated Control Motion Device List
 * 分类：查询节点 / 三十六、操控运动器（XXXVI. Control Motion Device）
 *
 * 查询玩家当前激活操控运动器列表
 *
 * @en Query the player's currently activated Control Motion Device List.
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 操控运动器实体列表（操控运动器实体列表：实体列表）
 */
export declare function queryPlayersCurrentlyActivatedControlMotionDeviceList(playerEntity: Entity): Entity[];

/**
 * 【查询玩家当前跟随操控运动器】 Query Player's Followed Control Motion Device
 * 分类：查询节点 / 三十六、操控运动器（XXXVI. Control Motion Device）
 *
 * 查询玩家当前跟随操控运动器
 *
 * @en Query the player's Followed Control Motion Device.
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 操控运动器实体（操控运动器实体：实体）
 */
export declare function queryPlayersFollowedControlMotionDevice(playerEntity: Entity): Entity;

/**
 * 【查询操控运动器当前运动参数】的多个出参 / Outputs of "Query Control Motion Device's Current Movement Parameters"
 */
export interface QueryControlMotionDevicesCurrentMovementParametersResult {
  /**
   * 前进加速度（前进加速度：浮点数）
   */
  readonly forwardAcceleration: float;
  /**
   * 后退加速度（后退加速度：浮点数）
   */
  readonly reverseAcceleration: float;
  /**
   * 转向速率（转向速率：浮点数）
   */
  readonly turnSpeed: float;
  /**
   * 基础阻力（基础阻力：浮点数）
   */
  readonly baseResistance: float;
  /**
   * 阻力系数（阻力系数：浮点数）
   */
  readonly resistanceCoefficient: float;
  /**
   * 最大前进速度（最大前进速度：浮点数）
   */
  readonly maxForwardSpeed: float;
  /**
   * 最大后退速度（最大后退速度：浮点数）
   */
  readonly maxReverseSpeed: float;
}
/**
 * 【查询操控运动器当前运动参数】 Query Control Motion Device's Current Movement Parameters
 * 分类：查询节点 / 三十六、操控运动器（XXXVI. Control Motion Device）
 *
 * 查询操控运动器当前运动参数。不包含操控技能节点添加的临时运动参数。
 *
 * @en Retrieves the current movement parameters of the Motion Controller. Temporary movement parameters added by Motion Controller Skill nodes are excluded.
 * @param controlMotionDevice 操控运动器（操控运动器：实体）
 * @returns QueryControlMotionDevicesCurrentMovementParametersResult（多出参，见接口字段）
 */
export declare function queryControlMotionDevicesCurrentMovementParameters(controlMotionDevice: Entity): QueryControlMotionDevicesCurrentMovementParametersResult;
