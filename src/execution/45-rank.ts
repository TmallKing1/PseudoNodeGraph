// 自动生成：执行节点 / 四十五、段位（XLV. Rank）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置玩家逃跑合法性】 Set Player Escape Validity
 * 分类：执行节点 / 四十五、段位（XLV. Rank）
 *
 * 设置指定玩家逃跑的合法性
 *
 * @en Set whether escaping is permitted for the specified Player
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param valid 是否合法（是否合法：布尔值）
 */
export declare function setPlayerEscapeValidity(playerEntity: Entity, valid: bool): void;

/**
 * 【设置玩家段位变化分数】 Set Player Rank Score Change
 * 分类：执行节点 / 四十五、段位（XLV. Rank）
 *
 * 根据结算状态设置玩家的段位变化分数
 *
 * @en Set the Player's rank score change based on the settlement status
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param settlementStatus 分为未定、胜利、失败、逃跑（结算状态：枚举）
 * @param scoreChange 变化分数（变化分数：整数）
 */
export declare function setPlayerRankScoreChange(playerEntity: Entity, settlementStatus: E.RankSettlementStatus, scoreChange: int): void;

/**
 * 【切换玩家竞技段位生效的计分组】 Switch the Scoring Group that Affects Player's Competitive Rank
 * 分类：执行节点 / 四十五、段位（XLV. Rank）
 *
 * 以计分组的序号切换指定玩家竞技段位生效的计分组
 *
 * @en Switch the active Scoring Group of the specified Player's Ranking by Scoring Group ID
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param scoreGroupID 外围系统管理中指定计分组对应的序号（计分组序号：整数）
 */
export declare function switchTheScoringGroupThatAffectsPlayersCompetitiveRank(playerEntity: Entity, scoreGroupID: int): void;
