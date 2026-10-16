// 自动生成：查询节点 / 二十六、碰撞触发器（XXVI. Collision Trigger）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取碰撞触发器内所有实体】 Get All Entities Within the Collision Trigger
 * 分类：查询节点 / 二十六、碰撞触发器（XXVI. Collision Trigger）
 *
 * 获取目标实体上碰撞触发器组件中特定序号对应的碰撞触发器内的所有实体
 *
 * @en Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param triggerID 触发器序号（触发器序号：整数）
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getAllEntitiesWithinTheCollisionTrigger(targetEntity: Entity, triggerID: int): Entity[];
