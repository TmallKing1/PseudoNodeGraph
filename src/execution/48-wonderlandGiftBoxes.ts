// 自动生成：执行节点 / 四十八、奇域礼盒相关（XLVIII. Wonderland Gift Boxes）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【消耗礼盒】 Consume Gift Box
 * 分类：执行节点 / 四十八、奇域礼盒相关（XLVIII. Wonderland Gift Boxes）
 *
 * 可以消耗指定玩家的奇域礼盒
 *
 * @en Consume the specified Player's Wonderland Gift Box
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param giftBoxIndex 礼盒索引（礼盒索引：整数）
 * @param consumptionQuantity 消耗数量（消耗数量：整数）
 * @returns 礼盒被成功消耗以后该出参为是（是否消耗：布尔值）
 */
export declare function consumeGiftBox(playerEntity: Entity, giftBoxIndex: int, consumptionQuantity: int): bool;

/**
 * 【打开礼盒界面】 Open Gift Box Interface
 * 分类：执行节点 / 四十八、奇域礼盒相关（XLVIII. Wonderland Gift Boxes）
 *
 * 执行该节点时，会自动打开该玩家的奇域礼盒界面并选中索引对应的礼盒
 * 如索引不存在则默认选中第一个礼盒
 *
 * @en When this node is executed, it automatically opens the specified Player's Wonderland Gift Box interface and selects the Gift Box corresponding to the specified index
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param giftBoxIndex 礼盒索引（礼盒索引：整数）
 */
export declare function openGiftBoxInterface(playerEntity: Entity, giftBoxIndex: int): void;
