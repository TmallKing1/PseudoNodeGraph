// 自动生成：执行节点 / 九、碰撞（IX. Collision）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭原生碰撞】 Activate/Disable Native Collision
 * 分类：执行节点 / 九、碰撞（IX. Collision）
 *
 * 修改实体自带的碰撞
 *
 * @en Edit the Entity's Native Collision
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableNativeCollision(targetEntity: Entity, activate: bool): void;

/**
 * 【激活/关闭原生碰撞可攀爬性】 Activate/Disable Native Collision Climbability
 * 分类：执行节点 / 九、碰撞（IX. Collision）
 *
 * 修改实体自带的碰撞的可攀爬性
 *
 * @en Edit the Climbability of the Entity's Native Collision
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableNativeCollisionClimbability(targetEntity: Entity, activate: bool): void;

/**
 * 【激活/关闭额外碰撞】 Activate/Disable Extra Collision
 * 分类：执行节点 / 九、碰撞（IX. Collision）
 *
 * 修改实体额外碰撞组件内的数据，使额外碰撞开启/关闭
 *
 * @en Edit data in the Entity's Extra Collision Component to enable/disable Extra Collision
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param extraCollisionID 该额外碰撞的标识（额外碰撞序号：整数）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableExtraCollision(targetEntity: Entity, extraCollisionID: int, activate: bool): void;

/**
 * 【激活/关闭额外碰撞可攀爬性】 Activate/Disable Extra Collision Climbability
 * 分类：执行节点 / 九、碰撞（IX. Collision）
 *
 * 修改实体额外碰撞组件的碰撞的可攀爬性
 *
 * @en Edit the Climbability of the Entity's Extra Collision Component
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param extraCollisionID 该额外碰撞的标识（额外碰撞序号：整数）
 * @param activate “是”为激活（是否激活：布尔值）
 */
export declare function activateDisableExtraCollisionClimbability(targetEntity: Entity, extraCollisionID: int, activate: bool): void;
