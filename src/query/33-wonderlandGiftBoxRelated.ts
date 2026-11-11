// 自动生成：查询节点 / 三十三、奇域礼盒相关（XXXIII. Wonderland Gift Box Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询对应礼盒数量】 Query Corresponding Gift Box Quantity
 * 分类：查询节点 / 三十三、奇域礼盒相关（XXXIII. Wonderland Gift Box Related）
 *
 * 查询玩家实体上指定礼盒的数量
 *
 * @en Searches the quantity of the specified Gift Box on the Player Entity
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param giftBoxIndex 礼盒索引（礼盒索引：整数）
 * @returns 数量（数量：整数）
 */
export declare function queryCorrespondingGiftBoxQuantity(playerEntity: Entity, giftBoxIndex: int): int;

/**
 * 【查询对应华丽演绎礼盒消耗数量】 Query Corresponding Gorgeous Performance Box Consumption Quantity
 * 分类：查询节点 / 三十三、奇域礼盒相关（XXXIII. Wonderland Gift Box Related）
 *
 * 查询玩家实体上华丽演绎礼盒的消耗数量(无法对其他类型的礼盒使用)
 *
 * @en Queries the number of Gorgeous Performance Boxes consumed by the player entity (cannot be used for other gift box types)
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param giftBoxIndex 礼盒索引（礼盒索引：整数）
 * @returns 数量（数量：整数）
 */
export declare function queryCorrespondingGorgeousPerformanceBoxConsumptionQuantity(playerEntity: Entity, giftBoxIndex: int): int;
