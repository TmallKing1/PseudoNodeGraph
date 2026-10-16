// 自动生成：查询节点 / 一、通用（I. General）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询对局游玩方式及人数】的多个出参 / Outputs of "Query Game Mode and Player Number"
 */
export interface QueryGameModeAndPlayerNumberResult {
  /**
   * 游玩人数（游玩人数：整数）
   */
  readonly playerCount: int;
  /**
   * 分为试玩、房间游玩、匹配游玩（游玩方式：枚举）
   */
  readonly gameplayMode: E.GameplayMode;
}
/**
 * 【查询对局游玩方式及人数】 Query Game Mode and Player Number
 * 分类：查询节点 / 一、通用（I. General）
 *
 * 查询进入对局的理论人数，即参与匹配或开房间的人数和进入对局的方式
 *
 * @en Searches the theoretical number of players entering the match, including players via Matchmaking or Room creation, and the method of entry
 * @returns QueryGameModeAndPlayerNumberResult（多出参，见接口字段）
 */
export declare function queryGameModeAndPlayerNumber(): QueryGameModeAndPlayerNumberResult;
