// 自动生成：查询节点 / 十六、单位状态（XVI. Unit Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询实体是否具有单位状态】 Query If Entity Has Unit Status
 * 分类：查询节点 / 十六、单位状态（XVI. Unit Status）
 *
 * 查询指定实体是否具有特定配置ID的单位状态
 *
 * @en Searches whether the specified Entity has a Unit Status with the given Config ID
 * @param targetEntity 目标实体（目标实体：实体）
 * @param unitStatusConfigID 单位状态配置ID（单位状态配置ID：配置ID）
 * @returns 是否具有（是否具有：布尔值）
 */
export declare function queryIfEntityHasUnitStatus(targetEntity: Entity, unitStatusConfigID: ConfigId): bool;

/**
 * 【根据槽位序号查询单位状态层数】 Query Unit Status Stacks by Slot ID
 * 分类：查询节点 / 十六、单位状态（XVI. Unit Status）
 *
 * 查询目标实体指定槽位上的特定单位状态的层数
 *
 * @en Searches the Stack Count of the specified Unit Status on the Target Entity's designated Slot
 * @param queryTargetEntity 查询目标实体（查询目标实体：实体）
 * @param unitStatusConfigID 单位状态配置ID（单位状态配置ID：配置ID）
 * @param slotID 槽位序号（槽位序号：整数）
 * @returns 层数（层数：整数）
 */
export declare function queryUnitStatusStacksBySlotID(queryTargetEntity: Entity, unitStatusConfigID: ConfigId, slotID: int): int;

/**
 * 【根据槽位序号查询单位状态施加者】 Query Unit Status Applier by Slot ID
 * 分类：查询节点 / 十六、单位状态（XVI. Unit Status）
 *
 * 查询目标实体指定槽位上的特定单位状态的施加者
 *
 * @en Searches the Applier of the specified Unit Status on the Target Entity's designated Slot
 * @param queryTargetEntity 查询目标实体（查询目标实体：实体）
 * @param unitStatusConfigID 单位状态配置ID（单位状态配置ID：配置ID）
 * @param slotID 槽位序号（槽位序号：整数）
 * @returns 施加者实体（施加者实体：实体）
 */
export declare function queryUnitStatusApplierBySlotID(queryTargetEntity: Entity, unitStatusConfigID: ConfigId, slotID: int): Entity;

/**
 * 【查询单位状态的槽位序号列表】 List of Slot IDs Querying Unit Status
 * 分类：查询节点 / 十六、单位状态（XVI. Unit Status）
 *
 * 查询指定目标实体上特定配置ID的单位状态的所有槽位序号列表
 *
 * @en Searches the list of all Slot IDs for the Unit Status with the specified Config ID on the Target Entity
 * @param queryTargetEntity 查询目标实体（查询目标实体：实体）
 * @param unitStatusConfigID 单位状态配置ID（单位状态配置ID：配置ID）
 * @returns 槽位序号列表（槽位序号列表：整数列表）
 */
export declare function listOfSlotIDsQueryingUnitStatus(queryTargetEntity: Entity, unitStatusConfigID: ConfigId): int[];
