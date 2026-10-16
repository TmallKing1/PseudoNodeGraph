// 自动生成：执行节点 / 二十七、单位标签（XXVII. Unit Tags）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【实体添加单位标签】 Add Unit Tag to Entity
 * 分类：执行节点 / 二十七、单位标签（XXVII. Unit Tags）
 *
 * 对指定实体添加单位标签
 *
 * @en Add Unit Tags to the specified Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param unitTagIndex 单位标签索引（单位标签索引：整数）
 */
export declare function addUnitTagToEntity(targetEntity: Entity, unitTagIndex: int): void;

/**
 * 【实体移除单位标签】 Remove Unit Tag from Entity
 * 分类：执行节点 / 二十七、单位标签（XXVII. Unit Tags）
 *
 * 对指定实体移除单位标签
 *
 * @en Remove Unit Tags from the specified Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param unitTagIndex 单位标签索引（单位标签索引：整数）
 */
export declare function removeUnitTagFromEntity(targetEntity: Entity, unitTagIndex: int): void;

/**
 * 【实体清空单位标签】 Clear Unit Tags from Entity
 * 分类：执行节点 / 二十七、单位标签（XXVII. Unit Tags）
 *
 * 对指定实体清空单位标签
 *
 * @en Clear Unit Tags for the specified Entity
 * @param targetEntity 目标实体（目标实体：实体）
 */
export declare function clearUnitTagsFromEntity(targetEntity: Entity): void;
