// 自动生成：查询节点 / 十七、标签（XVII. Unit Tags）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取实体单位标签列表】 Get Entity Unit Tag List
 * 分类：查询节点 / 十七、标签（XVII. Unit Tags）
 *
 * 获取目标实体上携带的所有单位标签组成的列表
 *
 * @en Returns a list of all Unit Tags carried by the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 单位标签列表（单位标签列表：整数列表）
 */
export declare function getEntityUnitTagList(targetEntity: Entity): int[];

/**
 * 【获取单位标签的实体列表】 Get Entity List by Unit Tag
 * 分类：查询节点 / 十七、标签（XVII. Unit Tags）
 *
 * 获取在场所有携带该单位标签的实体列表
 *
 * @en Returns a list of all Entities in the scene that carry this Unit Tag
 * @param unitTagIndex 单位标签索引（单位标签索引：整数）
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getEntityListByUnitTag(unitTagIndex: int): Entity[];
