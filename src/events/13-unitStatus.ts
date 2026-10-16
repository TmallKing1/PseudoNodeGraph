// 自动生成：事件节点 / 十三、单位状态（XIII. Unit Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【单位状态结束时】事件的出参 / Output parameters of "When Unit Status Ends"
 */
export interface UnitStatusEndsEvent {
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
   * 施加者实体（施加者实体：实体）
   */
  readonly applierEntity: Entity;
  /**
   * 持续时间是否无限（持续时间是否无限：布尔值）
   */
  readonly infiniteDuration: bool;
  /**
   * 状态剩余时长（状态剩余时长：浮点数）
   */
  readonly remainingStatusDuration: float;
  /**
   * 状态剩余层数（状态剩余层数：整数）
   */
  readonly remainingStatusStacks: int;
  /**
   * 移除者实体（移除者实体：实体）
   */
  readonly removerEntity: Entity;
  /**
   * 其他单位状态顶替：因被施加了顶替状态导致单位状态被移除 超出持续时间：超出单位状态持续时间 被驱散：单位状态被直接移除 状态失效：因其他原因导致的状态失效 职业变更：因职业变更导致的状态被移除（移除原因：枚举）
   */
  readonly removalReason: E.UnitStatusRemovalReason;
  /**
   * 发生变化的单位状态槽位的序号（槽位序号：整数）
   */
  readonly slotID: int;
}
/**
 * 【单位状态结束时】 When Unit Status Ends
 * 分类：事件节点 / 十三、单位状态（XIII. Unit Status）
 *
 * 单位状态因为各种原因被移除或因时长结束时触发该事件
 *
 * @en This event is triggered when a Unit Status is removed for any reason or when its Runtime Duration expires
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onUnitStatusEnds(handler: (ev: UnitStatusEndsEvent) => void): void;

/**
 * 【单位状态变更时】事件的出参 / Output parameters of "When Unit Status Changes"
 */
export interface UnitStatusChangesEvent {
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
   * 施加者实体（施加者实体：实体）
   */
  readonly applierEntity: Entity;
  /**
   * 持续时间是否无限（持续时间是否无限：布尔值）
   */
  readonly infiniteDuration: bool;
  /**
   * 状态剩余时长（状态剩余时长：浮点数）
   */
  readonly remainingStatusDuration: float;
  /**
   * 变化后的层数（状态剩余层数：整数）
   */
  readonly remainingStatusStacks: int;
  /**
   * 变化前的层数（状态原始层数：整数）
   */
  readonly originalStatusStacks: int;
  /**
   * 发生变化的单位状态槽位的序号（槽位序号：整数）
   */
  readonly slotID: int;
}
/**
 * 【单位状态变更时】 When Unit Status Changes
 * 分类：事件节点 / 十三、单位状态（XIII. Unit Status）
 *
 * 单位状态的层数发生变化时，触发该事件
 * 单位状态的施加以及移除都会触发该事件
 *
 * @en This event is triggered when the Stack Count of a Unit Status changes
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onUnitStatusChanges(handler: (ev: UnitStatusChangesEvent) => void): void;

/**
 * 【发生元素反应事件时】事件的出参 / Output parameters of "When Elemental Reaction Event Occurs"
 */
export interface ElementalReactionEventOccursEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 元素反应类型（元素反应类型：枚举）
   */
  readonly elementalReactionType: E.ElementalReactionType;
  /**
   * 触发者实体（触发者实体：实体）
   */
  readonly triggererEntity: Entity;
  /**
   * 触发者GUID（触发者GUID：GUID）
   */
  readonly triggererEntityGUID: GUID;
}
/**
 * 【发生元素反应事件时】 When Elemental Reaction Event Occurs
 * 分类：事件节点 / 十三、单位状态（XIII. Unit Status）
 *
 * 为实体添加单位状态效果【 监听元素反应 】，达成条件会触发该事件
 *
 * @en Adds the Unit Status effect [ Monitor Elemental Reaction ] to the Entity. This event is triggered when the conditions are met
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onElementalReactionEventOccurs(handler: (ev: ElementalReactionEventOccursEvent) => void): void;

/**
 * 【护盾受到攻击时】事件的出参 / Output parameters of "When Shield Is Attacked"
 */
export interface ShieldIsAttackedEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 攻击者实体（攻击者实体：实体）
   */
  readonly attackerEntity: Entity;
  /**
   * 攻击者GUID（攻击者GUID：GUID）
   */
  readonly attackerGUID: GUID;
  /**
   * 单位状态配置ID（单位状态配置ID：配置ID）
   */
  readonly unitStatusConfigID: ConfigId;
  /**
   * 攻击前层数（攻击前层数：整数）
   */
  readonly preAttackLayers: int;
  /**
   * 攻击后层数（攻击后层数：整数）
   */
  readonly postAttackLayers: int;
  /**
   * 攻击前该单位状态的护盾含量（攻击前该单位状态的护盾含量：浮点数）
   */
  readonly shieldValueOfThisUnitStatusBeforeAttack: float;
  /**
   * 攻击后该单位状态的护盾含量（攻击后该单位状态的护盾含量：浮点数）
   */
  readonly shieldValueOfThisUnitStatusAfterAttack: float;
}
/**
 * 【护盾受到攻击时】 When Shield Is Attacked
 * 分类：事件节点 / 十三、单位状态（XIII. Unit Status）
 *
 * 为实体添加单位状态效果【添加护盾】，受到攻击时触发该事件
 *
 * @en Adds the Unit Status effect [Add Shield] to the Entity. This event is triggered when the Shield takes damage
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onShieldIsAttacked(handler: (ev: ShieldIsAttackedEvent) => void): void;
