// 自动生成：查询节点 / 十三、造物（XIII. Creation）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取造物当前目标】 Get Creation's Current Target
 * 分类：查询节点 / 十三、造物（XIII. Creation）
 *
 * 根据造物当前行为的不同，目标实体也不尽相同。
 * 例如当造物在攻击敌方时，造物的目标为敌方指定实体。
 * 例如当造物在对友方进行治疗时，造物的目标为友方指定实体。
 *
 * @en The Target Entity varies with the Creation's current behavior
 * @param creationEntity 运行时的造物实体（造物实体：实体）
 * @returns 造物当前的智能选取目标实体（目标实体：实体）
 */
export declare function getCreationsCurrentTarget(creationEntity: Entity): Entity;

/**
 * 【获取造物属性】的多个出参 / Outputs of "Get Creation Attribute"
 */
export interface GetCreationAttributeResult {
  /**
   * 等级（等级：整数）
   */
  readonly level: int;
  /**
   * 当前生命值（当前生命值：浮点数）
   */
  readonly currentHP: float;
  /**
   * 上限生命值（上限生命值：浮点数）
   */
  readonly maxHP: float;
  /**
   * 当前攻击力（当前攻击力：浮点数）
   */
  readonly currentATK: float;
  /**
   * 基础攻击力（基础攻击力：浮点数）
   */
  readonly baseATK: float;
  /**
   * 受打断值上限（受打断值上限：浮点数）
   */
  readonly interruptValueThreshold: float;
  /**
   * 当前受打断值（当前受打断值：浮点数）
   */
  readonly currentInterruptValue: float;
  /**
   * 当前受打断状态（当前受打断状态：枚举）
   */
  readonly currentInterruptStatus: E.InterruptStatus;
}
/**
 * 【获取造物属性】 Get Creation Attribute
 * 分类：查询节点 / 十三、造物（XIII. Creation）
 *
 * 获取指定造物的属性
 *
 * @en Returns the Attributes of the specified Creation
 * @param creationEntity 造物实体（造物实体：实体）
 * @returns GetCreationAttributeResult（多出参，见接口字段）
 */
export declare function getCreationAttribute(creationEntity: Entity): GetCreationAttributeResult;

/**
 * 【获取默认模式的造物仇恨列表】 Get Aggro List of Creation in Default Mode
 * 分类：查询节点 / 十三、造物（XIII. Creation）
 *
 * 获取造物的默认仇恨模式的仇恨列表，即仅仇恨配置为【默认类型】时，该节点才会有正确的输出列表
 *
 * @en Returns the Aggro List in Default Mode. This Node only outputs a valid list when the Aggro Configuration is set to [Default Type]
 * @param creationEntity 运行时的造物实体（造物实体：实体）
 * @returns 造物当前对哪些实体有仇恨，该列表是无序的（仇恨列表：实体列表）
 */
export declare function getAggroListOfCreationInDefaultMode(creationEntity: Entity): Entity[];
