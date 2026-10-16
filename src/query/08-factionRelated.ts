// 自动生成：查询节点 / 八、阵营相关（VIII. Faction Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询实体阵营】 Query Entity Faction
 * 分类：查询节点 / 八、阵营相关（VIII. Faction Related）
 *
 * 查询指定实体的阵营
 *
 * @en Searches the Faction of the specified Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 阵营（阵营：阵营）
 */
export declare function queryEntityFaction(targetEntity: Entity): Faction;

/**
 * 【查询阵营是否敌对】 Query If Faction Is Hostile
 * 分类：查询节点 / 八、阵营相关（VIII. Faction Related）
 *
 * 查询两个阵营是否敌对
 *
 * @en Searches whether two Factions are hostile to each other
 * @param faction1 阵营1（阵营1：阵营）
 * @param faction2 阵营2（阵营2：阵营）
 * @returns 是否敌对（是否敌对：布尔值）
 */
export declare function queryIfFactionIsHostile(faction1: Faction, faction2: Faction): bool;
