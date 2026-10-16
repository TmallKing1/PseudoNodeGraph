// 自动生成：事件节点 / 七、战斗（VII. Combat）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【受到攻击时】事件的出参 / Output parameters of "When Attacked"
 */
export interface AttackedEvent {
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
   * 实际造成的伤害量。因无敌等原因未造成伤害时，伤害量为0（伤害量：浮点数）
   */
  readonly damage: float;
  /**
   * 攻击标签列表（攻击标签列表：字符串列表）
   */
  readonly attackTagList: str[];
  /**
   * 元素类型（元素类型：枚举）
   */
  readonly elementalType: E.ElementType;
  /**
   * 攻击包含的元素含量（元素攻击强效：浮点数）
   */
  readonly elementalAttackPotency: float;
  /**
   * 是否暴击（是否暴击：布尔值）
   */
  readonly isCrit: bool;
}
/**
 * 【受到攻击时】 When Attacked
 * 分类：事件节点 / 七、战斗（VII. Combat）
 *
 * 实体受到攻击时触发该事件
 * (在经典模式下，由于奇匠的设置，造成的实际伤害与其他各种情景都可能存在差异)
 *
 * @en This event is triggered when the Entity is attacked
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onAttacked(handler: (ev: AttackedEvent) => void): void;

/**
 * 【攻击命中时】事件的出参 / Output parameters of "When Attack Hits"
 */
export interface AttackHitsEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 受击者实体（受击者实体：实体）
   */
  readonly hitTargetEntity: Entity;
  /**
   * 实际造成的伤害量。因无敌等原因未造成伤害时，伤害量为0（伤害量：浮点数）
   */
  readonly damage: float;
  /**
   * 攻击标签列表（攻击标签列表：字符串列表）
   */
  readonly attackTagList: str[];
  /**
   * 元素类型（元素类型：枚举）
   */
  readonly elementalType: E.ElementType;
  /**
   * 攻击包含的元素含量（元素攻击强效：浮点数）
   */
  readonly elementalAttackPotency: float;
  /**
   * 是否暴击（是否暴击：布尔值）
   */
  readonly isCrit: bool;
}
/**
 * 【攻击命中时】 When Attack Hits
 * 分类：事件节点 / 七、战斗（VII. Combat）
 *
 * 实体的攻击命中其他实体时，触发该事件
 * (在经典模式下，由于奇匠的设置，造成的实际伤害与其他各种情景都可能存在差异)
 *
 * @en This event is triggered when an Entity's attack hits other Entities
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onAttackHits(handler: (ev: AttackHitsEvent) => void): void;

/**
 * 【被恢复生命值时】事件的出参 / Output parameters of "When HP Is Recovered"
 */
export interface HpIsRecoveredEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 治疗者实体（治疗者实体：实体）
   */
  readonly healerEntity: Entity;
  /**
   * 实际的恢复量。如果实体恢复前并未损失生命值，则恢复量为0（恢复量：浮点数）
   */
  readonly recoveryAmount: float;
  /**
   * 恢复标签列表（恢复标签列表：字符串列表）
   */
  readonly recoverTagList: str[];
}
/**
 * 【被恢复生命值时】 When HP Is Recovered
 * 分类：事件节点 / 七、战斗（VII. Combat）
 *
 * 实体被恢复生命值时，触发该事件
 *
 * @en This event is triggered when an Entity's HP is restored
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onHpIsRecovered(handler: (ev: HpIsRecoveredEvent) => void): void;

/**
 * 【发起恢复生命值时】事件的出参 / Output parameters of "When Initiating HP Recovery"
 */
export interface InitiatingHPRecoveryEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 恢复目标实体（恢复目标实体：实体）
   */
  readonly recoverTargetEntity: Entity;
  /**
   * 实际的恢复量。如果目标实体恢复前并未损失生命值，则恢复量为0（恢复量：浮点数）
   */
  readonly recoveryAmount: float;
  /**
   * 恢复标签列表（恢复标签列表：字符串列表）
   */
  readonly recoverTagList: str[];
}
/**
 * 【发起恢复生命值时】 When Initiating HP Recovery
 * 分类：事件节点 / 七、战斗（VII. Combat）
 *
 * 实体向其他实体恢复生命值时，发起者实体上触发该事件
 *
 * @en This event is triggered on the initiating Entity when an Entity restores HP to other Entities
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onInitiatingHPRecovery(handler: (ev: InitiatingHPRecoveryEvent) => void): void;

/**
 * 【进入易受打断状态时】事件的出参 / Output parameters of "When Entering an Interruptible State"
 */
export interface EnteringAnInterruptibleStateEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 攻击者（攻击者：实体）
   */
  readonly attacker: Entity;
}
/**
 * 【进入易受打断状态时】 When Entering an Interruptible State
 * 分类：事件节点 / 七、战斗（VII. Combat）
 *
 * 仅超限模式可用，实体被攻击进入易受打断状态时触发该事件
 *
 * @en Available only in Beyond Mode.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEnteringAnInterruptibleState(handler: (ev: EnteringAnInterruptibleStateEvent) => void): void;
