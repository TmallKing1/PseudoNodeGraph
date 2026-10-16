// 自动生成：查询节点 / 七、关卡相关（VII. Stage Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询游戏已进行时间】 Query Game Time Elapsed
 * 分类：查询节点 / 七、关卡相关（VII. Stage Related）
 *
 * 查询游戏已进行了多长时间，单位秒
 *
 * @en Searches how long the game has been running, in seconds
 * @returns 游戏已进行时间（游戏已进行时间：整数）
 */
export declare function queryGameTimeElapsed(): int;

/**
 * 【查询当前环境时间】的多个出参 / Outputs of "Query Current Environment Time"
 */
export interface QueryCurrentEnvironmentTimeResult {
  /**
   * 获取到的值范围为[0,24)（当前环境时间：浮点数）
   */
  readonly currentEnvironmentTime: float;
  /**
   * 当前已经循环了多少天（当前循环天数：整数）
   */
  readonly currentLoopDay: int;
}
/**
 * 【查询当前环境时间】 Query Current Environment Time
 * 分类：查询节点 / 七、关卡相关（VII. Stage Related）
 *
 * 查询当前的环境时间，范围为[0,24)
 *
 * @en Searches the current Environment Time, in the range [0, 24)
 * @returns QueryCurrentEnvironmentTimeResult（多出参，见接口字段）
 */
export declare function queryCurrentEnvironmentTime(): QueryCurrentEnvironmentTimeResult;
