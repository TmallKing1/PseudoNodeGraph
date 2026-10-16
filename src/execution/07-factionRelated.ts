// 自动生成：执行节点 / 七、阵营相关（VII. Faction Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置实体阵营】 Set Entity Faction
 * 分类：执行节点 / 七、阵营相关（VII. Faction Related）
 *
 * 设置指定目标实体的阵营
 *
 * @en Set the faction of the specified target entity.
 * @param targetEntity 所要修改阵营的实体（目标实体：实体）
 * @param faction 修改后的阵营（阵营：阵营）
 */
export declare function setEntityFaction(targetEntity: Entity, faction: Faction): void;
