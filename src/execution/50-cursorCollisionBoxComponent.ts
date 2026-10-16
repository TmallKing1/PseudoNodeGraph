// 自动生成：执行节点 / 五十、光标碰撞盒组件（LIII. Cursor Collision Box Component）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭光标碰撞盒】 Activate/Disable Cursor Collision Box
 * 分类：执行节点 / 五十、光标碰撞盒组件（LIII. Cursor Collision Box Component）
 *
 * 可以修改目标实体的点击碰撞组件中对应序号的点击碰撞盒是否激活
 *
 * @en Set whether the Cursor Collision Box at the specified index in the Target Entity's Clickable Collision Component is active
 * @param targetEntity 仅对物件生效（目标实体：实体）
 * @param collisionBoxID 碰撞盒序号（碰撞盒序号：整数）
 * @param activate 是否激活（是否激活：布尔值）
 */
export declare function activateDisableCursorCollisionBox(targetEntity: Entity, collisionBoxID: int, activate: bool): void;
