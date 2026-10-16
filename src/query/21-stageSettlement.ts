// 自动生成：查询节点 / 二十一、关卡结算（XXI. Stage Settlement）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取玩家结算排名数值】 Get Player Settlement Ranking Value
 * 分类：查询节点 / 二十一、关卡结算（XXI. Stage Settlement）
 *
 * 获取指定玩家实体结算的排名数值
 *
 * @en Returns the Settlement ranking value for the specified Player Entity
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 排名数值（排名数值：整数）
 */
export declare function getPlayerSettlementRankingValue(playerEntity: Entity): int;

/**
 * 【获取玩家结算成功状态】 Get Player Settlement Success Status
 * 分类：查询节点 / 二十一、关卡结算（XXI. Stage Settlement）
 *
 * 获取玩家结算成功状态
 *
 * @en Get Player Settlement Success Status
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 分为未定、胜利、失败（结算状态：枚举）
 */
export declare function getPlayerSettlementSuccessStatus(playerEntity: Entity): E.SettlementStatus;

/**
 * 【获取阵营结算排名数值】 Get Faction Settlement Ranking Value
 * 分类：查询节点 / 二十一、关卡结算（XXI. Stage Settlement）
 *
 * 获取指定阵营结算的排名数值
 *
 * @en Returns the Settlement ranking value for the specified Faction
 * @param faction 阵营（阵营：阵营）
 * @returns 排名数值（排名数值：整数）
 */
export declare function getFactionSettlementRankingValue(faction: Faction): int;

/**
 * 【获取阵营结算成功状态】 Get Faction Settlement Success Status
 * 分类：查询节点 / 二十一、关卡结算（XXI. Stage Settlement）
 *
 * 获取阵营结算成功状态
 *
 * @en Get Faction Settlement Success Status
 * @param faction 阵营（阵营：阵营）
 * @returns 分为未定、胜利、失败（结算状态：枚举）
 */
export declare function getFactionSettlementSuccessStatus(faction: Faction): E.SettlementStatus;
