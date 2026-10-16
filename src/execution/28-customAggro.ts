// 自动生成：执行节点 / 二十八、自定义仇恨（XXVIII. Custom Aggro）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置指定实体的仇恨值】 Set the Aggro Value of Specified Entity
 * 分类：执行节点 / 二十八、自定义仇恨（XXVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 设置指定目标实体在指定仇恨拥有者上的仇恨值
 *
 * @en Available only in Custom Aggro Mode
 * @param targetEntity 目标实体（目标实体：实体）
 * @param aggroOwnerEntity 仇恨拥有者实体（仇恨拥有者实体：实体）
 * @param aggroValue 仇恨值（仇恨值：整数）
 */
export declare function setTheAggroValueOfSpecifiedEntity(targetEntity: Entity, aggroOwnerEntity: Entity, aggroValue: int): void;

/**
 * 【将目标实体移除出仇恨列表】 Remove Target Entity From Aggro List
 * 分类：执行节点 / 二十八、自定义仇恨（XXVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 将目标实体从仇恨拥有者的仇恨列表中移除，可能会导致目标实体脱战
 *
 * @en Available only in Custom Aggro Mode
 * @param targetEntity 目标实体（目标实体：实体）
 * @param aggroOwnerEntity 仇恨拥有者实体（仇恨拥有者实体：实体）
 */
export declare function removeTargetEntityFromAggroList(targetEntity: Entity, aggroOwnerEntity: Entity): void;

/**
 * 【清空指定目标的仇恨列表】 Clear Specified Target's Aggro List
 * 分类：执行节点 / 二十八、自定义仇恨（XXVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 清空仇恨拥有者的仇恨列表。可能会导致其脱战
 *
 * @en Available only in Custom Aggro Mode
 * @param aggroOwner 仇恨拥有者（仇恨拥有者：实体）
 */
export declare function clearSpecifiedTargetsAggroList(aggroOwner: Entity): void;

/**
 * 【嘲讽目标】 Taunt Target
 * 分类：执行节点 / 二十八、自定义仇恨（XXVIII. Custom Aggro）
 *
 * 仅自定义仇恨模式可用
 * 使嘲讽者实体嘲讽指定目标实体
 *
 * @en Available only in Custom Aggro Mode
 * @param taunterEntity 嘲讽者实体（嘲讽者实体：实体）
 * @param targetEntity 目标实体（目标实体：实体）
 */
export declare function tauntTarget(taunterEntity: Entity, targetEntity: Entity): void;
