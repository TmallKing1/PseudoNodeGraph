// 自动生成：执行节点 / 十、碰撞触发器（X. Collision Triggers）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭碰撞触发器】 Activate/Disable Collision Trigger
 * 分类：执行节点 / 十、碰撞触发器（X. Collision Triggers）
 *
 * 修改碰撞触发器组件的数据，使某一个序号的触发器激活/关闭
 *
 * @en Edit the Collision Trigger Component data to Activate/Disable the Trigger at the specified ID
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param triggerID 该碰撞触发器的标识（触发器序号：整数）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableCollisionTrigger(targetEntity: Entity, triggerID: int, activate: bool): void;
