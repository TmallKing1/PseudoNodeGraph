// 自动生成：执行节点 / 二十二、碰撞触发源（XXII. Collision Trigger Source）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭碰撞触发源】 Activate/Disable Collision Trigger Source
 * 分类：执行节点 / 二十二、碰撞触发源（XXII. Collision Trigger Source）
 *
 * 可以修改目标实体的碰撞触发源组件状态
 *
 * @en Edit the state of the Collision Trigger Source Component on the Target Entity
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param activate 为“是”则激活，可以与携带碰撞触发器组件的实体产生碰撞（是否激活：布尔值）
 */
export declare function activateDisableCollisionTriggerSource(targetEntity: Entity, activate: bool): void;
