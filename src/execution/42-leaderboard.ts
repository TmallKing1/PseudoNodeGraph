// 自动生成：执行节点 / 四十二、排行榜（XLII. Leaderboard）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【以整数设置玩家排行榜分数】 Set Player Leaderboard Score as an Integer
 * 分类：执行节点 / 四十二、排行榜（XLII. Leaderboard）
 *
 * 以整数设置玩家排行榜分数
 *
 * @en Set Player Leaderboard Score (Integer)
 * @param playerIDList 玩家序号列表（玩家序号列表：整数列表）
 * @param leaderboardScore 排行榜分数（排行榜分数：整数）
 * @param leaderboardID 外围系统管理中指定排行榜对应的序号（排行榜序号：整数）
 */
export declare function setPlayerLeaderboardScoreAsAnInteger(playerIDList: int[], leaderboardScore: int, leaderboardID: int): void;

/**
 * 【以浮点数设置玩家排行榜分数】 Set Player Leaderboard Score as a Float
 * 分类：执行节点 / 四十二、排行榜（XLII. Leaderboard）
 *
 * 以浮点数设置玩家排行榜分数
 *
 * @en Set Player Leaderboard Score (Float)
 * @param playerIDList 玩家序号列表（玩家序号列表：整数列表）
 * @param leaderboardScore 排行榜分数（排行榜分数：浮点数）
 * @param leaderboardID 外围系统管理中指定排行榜对应的序号（排行榜序号：整数）
 */
export declare function setPlayerLeaderboardScoreAsAFloat(playerIDList: int[], leaderboardScore: float, leaderboardID: int): void;
