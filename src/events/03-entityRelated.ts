// 自动生成：事件节点 / 三、实体相关（III. Entity Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【实体创建时】事件的出参 / Output parameters of "When Entity Is Created"
 */
export interface EntityIsCreatedEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
}
/**
 * 【实体创建时】 When Entity Is Created
 * 分类：事件节点 / 三、实体相关（III. Entity Related）
 *
 * 实体被创建时，触发该事件
 * 所有类型的实体均可以触发该事件。关卡实体、角色实体和玩家实体会在进入关卡时触发该事件
 *
 * @en This event is triggered when an Entity is created
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEntityIsCreated(handler: (ev: EntityIsCreatedEvent) => void): void;

/**
 * 【实体移除/销毁时】事件的出参 / Output parameters of "When Entity Is Removed/Destroyed"
 */
export interface EntityIsRemovedDestroyedEvent {
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
}
/**
 * 【实体移除/销毁时】 When Entity Is Removed/Destroyed
 * 分类：事件节点 / 三、实体相关（III. Entity Related）
 *
 * 关卡内任意实体被移除或销毁时触发该事件，该事件仅在关卡实体上可以触发
 * 实体被销毁或被移除均会触发该事件。因此实体被销毁时，会依次触发【实体销毁时】以及【实体移除/销毁时】事件
 *
 * @en This event is triggered when any Entity in the Stage is removed or destroyed, and it can only be triggered on Stage Entities
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEntityIsRemovedDestroyed(handler: (ev: EntityIsRemovedDestroyedEvent) => void): void;

/**
 * 【实体销毁时】事件的出参 / Output parameters of "When Entity Is Destroyed"
 */
export interface EntityIsDestroyedEvent {
  /**
   * 被销毁的实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 位置（位置：三维向量）
   */
  readonly location: Vec3;
  /**
   * 朝向（朝向：三维向量）
   */
  readonly orientation: Vec3;
  /**
   * 实体类型（实体类型：枚举）
   */
  readonly entityType: E.EntityType;
  /**
   * 阵营（阵营：阵营）
   */
  readonly faction: Faction;
  /**
   * 伤害来源（伤害来源：实体）
   */
  readonly damageSource: Entity;
  /**
   * 归属者实体（归属者实体：实体）
   */
  readonly ownerEntity: Entity;
  /**
   * 销毁时，该实体上的自定义变量组件的快照。可以使用【查询自定义变量快照】节点获取其中的自定义变量值（自定义变量组件快照：自定义变量快照）
   */
  readonly customVariableComponentSnapshot: CustomVariableSnapshot;
}
/**
 * 【实体销毁时】 When Entity Is Destroyed
 * 分类：事件节点 / 三、实体相关（III. Entity Related）
 *
 * 关卡内物件和造物被销毁时触发该事件，该事件仅在关卡实体上可以触发
 *
 * @en This event triggers when objects and creations within the stage are destroyed. This event can only trigger on stage entities.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEntityIsDestroyed(handler: (ev: EntityIsDestroyedEvent) => void): void;

/**
 * 【角色移动速度达到条件时】事件的出参 / Output parameters of "When Character Movement SPD Meets Condition"
 */
export interface CharacterMovementSPDMeetsConditionEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 单位状态配置ID（单位状态配置ID：配置ID）
   */
  readonly unitStatusConfigID: ConfigId;
  /**
   * 条件：比较类型（条件：比较类型：枚举）
   */
  readonly conditionComparisonType: E.ComparisonType;
  /**
   * 条件：比较值（条件：比较值：浮点数）
   */
  readonly conditionComparisonValue: float;
  /**
   * 当前移动速度（当前移动速度：浮点数）
   */
  readonly currentMovementSPD: float;
}
/**
 * 【角色移动速度达到条件时】 When Character Movement SPD Meets Condition
 * 分类：事件节点 / 三、实体相关（III. Entity Related）
 *
 * 为角色实体添加单位状态效果【 监听移动速率 】，达成条件会触发该事件
 *
 * @en Adds the Unit Status effect [ Monitor Movement Speed ] to the Character Entity. This event is triggered when the conditions are met
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCharacterMovementSPDMeetsCondition(handler: (ev: CharacterMovementSPDMeetsConditionEvent) => void): void;
