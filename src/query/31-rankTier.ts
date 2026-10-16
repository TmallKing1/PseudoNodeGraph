// 自动生成：查询节点 / 三十一、段位（XXXI. Rank Tier）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取玩家段位变化分数】 Get Player Rank Score Change
 * 分类：查询节点 / 三十一、段位（XXXI. Rank Tier）
 *
 * 获取玩家实体在不同结算状态下段位的变化分数
 *
 * @en Returns the Rank change score for the Player Entity under different Settlement states
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param settlementStatus 结算状态（结算状态：枚举）
 * @returns 分数（分数：整数）
 */
export declare function getPlayerRankScoreChange(playerEntity: Entity, settlementStatus: E.RankSettlementStatus): int;

/**
 * 【获取玩家段位信息】的多个出参 / Outputs of "Get Player Ranking Info"
 */
export interface GetPlayerRankingInfoResult {
  /**
   * 玩家段位总分（玩家段位总分：整数）
   */
  readonly playerRankTotalScore: int;
  /**
   * 玩家连胜次数（玩家连胜次数：整数）
   */
  readonly playerWinStreak: int;
  /**
   * 玩家连败次数（玩家连败次数：整数）
   */
  readonly playerLoseStreak: int;
  /**
   * 玩家连续逃跑次数（玩家连续逃跑次数：整数）
   */
  readonly playerConsecutiveEscapes: int;
}
/**
 * 【获取玩家段位信息】 Get Player Ranking Info
 * 分类：查询节点 / 三十一、段位（XXXI. Rank Tier）
 *
 * 获取玩家段位相关信息
 *
 * @en Returns the Player's Rank-related information
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns GetPlayerRankingInfoResult（多出参，见接口字段）
 */
export declare function getPlayerRankingInfo(playerEntity: Entity): GetPlayerRankingInfoResult;

/**
 * 【获取玩家逃跑合法性】 Get Player Escape Validity
 * 分类：查询节点 / 三十一、段位（XXXI. Rank Tier）
 *
 * 获取玩家逃跑合法性
 *
 * @en Get Player Escape Permission
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 是否合法（是否合法：布尔值）
 */
export declare function getPlayerEscapeValidity(playerEntity: Entity): bool;
