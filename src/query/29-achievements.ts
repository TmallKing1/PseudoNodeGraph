// 自动生成：查询节点 / 二十九、成就（XXIX. Achievements）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询成就是否完成】 Query If Achievement Is Completed
 * 分类：查询节点 / 二十九、成就（XXIX. Achievements）
 *
 * 查询目标实体上特定序号对应的成就是否完成
 *
 * @en Searches whether the Achievement corresponding to a specific ID on the Target Entity is complete
 * @param targetEntity 目标实体（目标实体：实体）
 * @param achievementID 成就序号（成就序号：整数）
 * @returns 是否完成（是否完成：布尔值）
 */
export declare function queryIfAchievementIsCompleted(targetEntity: Entity, achievementID: int): bool;
