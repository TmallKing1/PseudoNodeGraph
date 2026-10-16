// 自动生成：查询节点 / 三十八、光标（XXXVIII. Cursor）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询玩家光标是否激活】 Check Whether Player Cursor Is Active
 * 分类：查询节点 / 三十八、光标（XXXVIII. Cursor）
 *
 * 查询指定玩家当前的光标是否处于激活（常驻显示）状态
 *
 * @en Checks whether the specified player's cursor is currently active (always visible).
 * @param playerEntity 要查询的玩家（玩家实体：实体）
 * @returns 光标常驻显示则为“是”（是否激活：布尔值）
 */
export declare function checkWhetherPlayerCursorIsActive(playerEntity: Entity): bool;
