// 自动生成：执行节点 / 十一、战斗（XI. Combat）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【发起攻击】 Initiate Attack
 * 分类：执行节点 / 十一、战斗（XI. Combat）
 *
 * 使指定实体发起攻击。使用该节点的实体上需要有对应的能力单元配置。
 * 分为两种使用方式：
 * 当能力单元为【攻击盒攻击】时，会以目标实体的位置为基准，打出一次攻击盒攻击
 * 当能力单元为【直接攻击】时，会直接攻击目标实体
 *
 * @en Make the specified Entity initiate an attack. The Entity that uses this node must have the corresponding Ability Unit configured.
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 根据能力单元不同，可以视为攻击盒位置的基准目标或攻击对象（目标实体：实体）
 * @param damageCoefficient 该次攻击造成伤害的系数（伤害系数：浮点数）
 * @param damageIncrement 该次攻击造成伤害的增量（伤害增量：浮点数）
 * @param locationOffset 使用【攻击盒攻击】时，决定了攻击盒的偏移 使用【直接攻击】时，决定了该次攻击的判定位置，影响受击特效等的创建位置（位置偏移：三维向量）
 * @param rotationOffset 使用【攻击盒攻击】时，决定了攻击盒的旋转 使用【直接攻击】时，决定了该次攻击的判定位置，影响受击特效等的旋转（旋转偏移：三维向量）
 * @param abilityUnit 引用的能力单元，需要配置在此节点图所关联的实体上（能力单元：字符串）
 * @param overwriteAbilityUnitConfig 为“是”时，伤害系数、伤害增量、位置偏移、旋转偏移这四个系数会覆写能力单元中的同名配置。为“否”时，则使用能力单元中的配置（是否覆写能力单元配置：布尔值）
 * @param initiatorEntity 决定了该次攻击的发起者实体，默认为该节点图所关联的实体。影响【攻击命中时】、【受到攻击时】等事件中判定的攻击者（发起者实体：实体）
 * @param abilityUnitOwnerEntity 决定能力单元的所属实体。未连接时，默认使用发起者实体上的能力单元（能力单元所属实体：实体）
 */
export declare function initiateAttack(targetEntity: Entity, damageCoefficient: float, damageIncrement: float, locationOffset: Vec3, rotationOffset: Vec3, abilityUnit: str, overwriteAbilityUnitConfig: bool, initiatorEntity: Entity, abilityUnitOwnerEntity: Entity): void;

/**
 * 【恢复生命】 Recover HP
 * 分类：执行节点 / 十一、战斗（XI. Combat）
 *
 * 通过能力单元为指定目标实体恢复生命
 *
 * @en Restore HP to the specified Target Entity via an Ability Unit
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 恢复生命的目标（目标实体：实体）
 * @param recoveryAmount 该次恢复生命的恢复量（恢复量：浮点数）
 * @param abilityUnit 引用的能力单元。需要配置在此节点图所关联的实体上（能力单元：字符串）
 * @param overwriteAbilityUnitConfig 为“是”时，恢复量会覆盖能力单元中的同名配置。为“否”时，使用能力单元中的配置（是否覆写能力单元配置：布尔值）
 * @param recoverInitiatorEntity 决定了该次恢复行为的发起者实体，默认为该节点图所关联的实体。影响【被恢复生命值时】、【发起恢复生命值时】等事件中判定的恢复者（恢复发起者实体：实体）
 */
export declare function recoverHP(targetEntity: Entity, recoveryAmount: float, abilityUnit: str, overwriteAbilityUnitConfig: bool, recoverInitiatorEntity: Entity): void;

/**
 * 【损失生命】 HP Loss
 * 分类：执行节点 / 十一、战斗（XI. Combat）
 *
 * 使指定目标直接损失生命。损失生命不是攻击，因此不会触发攻击相关的事件
 *
 * @en Directly cause the specified target to lose HP. Losing HP is not an attack, so it does not trigger attack-related events
 * @param targetEntity 损失生命的目标（目标实体：实体）
 * @param hpLossAmount 该次损失生命值的损失量（生命损失量：浮点数）
 * @param lethal 为“否”时，该次损失生命最多使目标生命扣为1点（是否致命：布尔值）
 * @param canBeBlockedByInvincible 为“是”时，如果目标已经通过单位状态设置为了无敌，则损失生命不生效（是否可被无敌抵挡：布尔值）
 * @param canBeBlockedByLockedHP 为“是”时，如果目标已经通过单位状态设置为了锁定生命值，则损失生命不生效（是否可被锁定生命值抵挡：布尔值）
 * @param damagePopUpType 无跳字 普通跳字 暴击跳字（伤害跳字类型：枚举）
 * @param initiatorEntity 该次损失生命的发起者，用于伤害归因。留空表示无来源（发起者实体：实体）
 */
export declare function hpLoss(targetEntity: Entity, hpLossAmount: float, lethal: bool, canBeBlockedByInvincible: bool, canBeBlockedByLockedHP: bool, damagePopUpType: E.DamagePopUpType, initiatorEntity: Entity): void;

/**
 * 【直接恢复生命】 Recover HP Directly
 * 分类：执行节点 / 十一、战斗（XI. Combat）
 *
 * 直接恢复指定实体目标的生命。与【恢复生命】不同的是，此节点不需要使用能力单元
 *
 * @en Directly restore HP to the specified Target Entity. Unlike [Recover HP], this node does not require an Ability Unit
 * @param recoverInitiatorEntity 发起恢复的实体（恢复发起实体：实体）
 * @param recoverTargetEntity 恢复的目标实体（恢复目标实体：实体）
 * @param recoveryAmount 该次恢复生命的恢复量（恢复量：浮点数）
 * @param ignoreRecoveryAmountAdjustment 为“是”时，该次恢复量不受目标的恢复量调整类的单位状态的影响（是否忽略恢复量调整：布尔值）
 * @param aggroGenerationMultiplier 此次恢复产生的仇恨倍率。仅使用自定义仇恨模式时有意义（产生仇恨的倍率：浮点数）
 * @param aggroGenerationIncrement 此次恢复产生的仇恨增量。仅使用自定义仇恨模式时有意义（产生仇恨的增量：浮点数）
 * @param healingTagList 此次恢复行为的标签列表。在【发起恢复生命值】时以及【被恢复生命值时】事件中可以取出，用于判定一次特定的恢复行为（治疗标签列表：字符串列表）
 */
export declare function recoverHPDirectly(recoverInitiatorEntity: Entity, recoverTargetEntity: Entity, recoveryAmount: float, ignoreRecoveryAmountAdjustment: bool, aggroGenerationMultiplier: float, aggroGenerationIncrement: float, healingTagList: str[]): void;

/**
 * 【切换战斗文字提示过滤模板】 Switch Combat Text Filter Template
 * 分类：执行节点 / 十一、战斗（XI. Combat）
 *
 * 切换指定玩家的战斗文字提示过滤模板，切换后按新模板过滤该玩家的战斗文字提示信息
 *
 * @en Switches the specified player's Combat Text Filter template, then filters their combat text prompts according to the new template
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param combatTextTemplateID 战斗文字提示模板序号（战斗文字提示模板序号：整数）
 */
export declare function switchCombatTextFilterTemplate(playerEntity: Entity, combatTextTemplateID: int): void;
