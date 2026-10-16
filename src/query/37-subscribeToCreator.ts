// 自动生成：查询节点 / 三十七、作者订阅（XXXVII. Subscribe to Creator）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询玩家是否订阅】 Check Whether Player Has Subscribed
 * 分类：查询节点 / 三十七、作者订阅（XXXVII. Subscribe to Creator）
 *
 * 可以查询对应玩家是否订阅该奇匠
 * 奇匠无法订阅自己，但该节点由奇匠自身触发时，出参结果为true
 *
 * @en Checks whether the specified player has subscribed to the Craftsperson.
 * @param playerEntity 所查询的玩家实体（玩家实体：实体）
 * @returns 是否订阅（是否订阅：布尔值）
 */
export declare function checkWhetherPlayerHasSubscribed(playerEntity: Entity): bool;
