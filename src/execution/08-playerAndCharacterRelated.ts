// 自动生成：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活复苏点】 Activate Revive Point
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 为该玩家激活指定序号的复苏点，此玩家后续触发复苏逻辑时，可以从该复苏点复苏
 *
 * @en Activate the specified Revive Point ID for the player. When the player later triggers Revive logic, they can revive at this Revive Point
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param revivePointID 该复苏点的标识（复苏点序号：整数）
 */
export declare function activateRevivePoint(playerEntity: Entity, revivePointID: int): void;

/**
 * 【注销复苏点】 Deactivate Revive Point
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 为该玩家注销指定序号的复苏点。该玩家下次复苏时不会从该复苏点复苏
 *
 * @en Unregister the specified Revive Point ID for the player. The layer will not revive at this Revive Point next time
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param revivePointID 该复苏点的标识（复苏点序号：整数）
 */
export declare function deactivateRevivePoint(playerEntity: Entity, revivePointID: int): void;

/**
 * 【允许/禁止玩家复苏】 Allow/Forbid Player to Revive
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 设置指定玩家是否允许复苏
 *
 * @en Set whether the specified player is allowed to revive
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param allow “是”则允许复苏（是否允许：布尔值）
 */
export declare function allowForbidPlayerToRevive(playerEntity: Entity, allow: bool): void;

/**
 * 【设置玩家剩余复苏次数】 Set Player Remaining Revives
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 设置指定玩家剩余复苏次数。设置为0时，该玩家无法复苏
 *
 * @en Set the remaining number of revives for the specified Player. When set to 0, the Player cannot revive
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param remainingTimes 设置为0时，该玩家无法复苏（剩余次数：整数）
 */
export declare function setPlayerRemainingRevives(playerEntity: Entity, remainingTimes: int): void;

/**
 * 【设置玩家复苏耗时】 Set Player Revive Time
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 设置指定玩家的下一次复苏的时长。如果玩家当前正处于复苏中，不会影响该次复苏的耗时
 *
 * @en Set the duration for the Player's next revive. If the Player is currently reviving, this does not affect the ongoing revive process
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param duration 单位为秒（时长：整数）
 */
export declare function setPlayerReviveTime(playerEntity: Entity, duration: int): void;

/**
 * 【复苏角色】 Revive Character
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 仅超限模式可用，复苏指定的角色实体
 *
 * @en Available only in Beyond Mode, revive the specified Character Entity
 * @param characterEntity 会被复苏的角色实体（角色实体：实体）
 */
export declare function reviveCharacter(characterEntity: Entity): void;

/**
 * 【击倒玩家所有角色】 Defeat All Player's Characters
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 击倒指定玩家的所有角色，会导致该玩家进入 玩家所有角色倒下状态
 *
 * @en Knock down all characters of the specified player, causing the player to enter When All Player's Characters Are Down state .
 * @param playerEntity 角色归属的玩家实体（玩家实体：实体）
 */
export declare function defeatAllPlayersCharacters(playerEntity: Entity): void;

/**
 * 【复苏玩家所有角色】 Revive All Player's Characters
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 复苏指定玩家的所有角色实体，只有在玩家处于所有角色倒下状态的时候，该节点才有效。
 * 在超限模式中，由于每个玩家只有一个角色，该节点与【复苏角色】的效果相同
 * 在经典模式中，玩家可以有多个角色，如果仅有部分角色倒下时，此节点不生效，即不会复苏倒下的角色
 *
 * @en Revive all character entities of a specified player, but this node is only effective when the player is in a state where all their characters are down.
 * @param playerEntity 角色归属的玩家实体（玩家实体：实体）
 * @param deductRevives 为否时，不会扣除复苏次数（是否扣除复苏次数：布尔值）
 */
export declare function reviveAllPlayersCharacters(playerEntity: Entity, deductRevives: bool): void;

/**
 * 【传送玩家(超限)】 Teleport Player
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 传送指定玩家实体。会根据传送距离的远近决定是否有加载界面
 * 如果要传送到物件上，传送目标位置的Y轴坐标需要比落脚点高一点
 *
 * @en Teleport the specified Player Entity. A loading interface may appear depending on teleport distance
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param targetLocation 绝对位置（目标位置：三维向量）
 * @param targetRotation 绝对旋转（目标旋转：三维向量）
 */
export declare function teleportPlayer(playerEntity: Entity, targetLocation: Vec3, targetRotation: Vec3): void;

/**
 * 【设置环境配置】 Set Environment Configuration
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 使指定玩家应用指定的环境配置，运行后会立即生效
 *
 * @en Apply the specified Environment Configuration to the designated player. Takes effect immediately upon execution
 * @param environmentConfigIndex 环境配置的标识（环境配置索引：整数）
 * @param targetPlayerList 只对指定玩家列表中的玩家生效（目标玩家列表：实体列表）
 * @param enableWeatherConfig “是”为启用（是否启用天气配置：布尔值）
 * @param weatherConfigIndex 会生效该序号对应的天气配置，不存在该序号则不生效（天气配置序号：整数）
 */
export declare function setEnvironmentConfiguration(environmentConfigIndex: int, targetPlayerList: Entity[], enableWeatherConfig: bool, weatherConfigIndex: int): void;

/**
 * 【设置角色元素能量】 Set Character's Elemental Energy
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 仅经典模式可用，设置指定角色的元素能量
 *
 * @en Available only in Classic Mode, sets the elemental energy for a specific character.
 * @param characterEntity 角色实体（角色实体：实体）
 * @param elementalEnergy 元素能量（元素能量：浮点数）
 */
export declare function setCharactersElementalEnergy(characterEntity: Entity, elementalEnergy: float): void;

/**
 * 【增加角色元素能量】 Increases Character's Elemental Energy
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 仅经典模式可用，增加指定角色的元素能量
 *
 * @en Available only in Classic Mode, increases the elemental energy for a specific character.
 * @param characterEntity 角色实体（角色实体：实体）
 * @param elementalEnergyIncreaseValue 元素能量增加值（元素能量增加值：浮点数）
 */
export declare function increasesCharactersElementalEnergy(characterEntity: Entity, elementalEnergyIncreaseValue: float): void;

/**
 * 【复苏当前场上角色】 Revive the active character
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 仅经典模式可用，复苏指定玩家的当前场上倒下的角色实体
 *
 * @en Available only in Classic Mode, revive the defeated active character entity of the specified player
 * @param playerEntity 玩家实体（玩家实体：实体）
 */
export declare function reviveTheActiveCharacter(playerEntity: Entity): void;

/**
 * 【传送玩家(经典)】 Teleport Player (Classic Mode)
 * 分类：执行节点 / 八、玩家与角色相关（VIII. Player and Character Related）
 *
 * 传送指定玩家实体。会根据传送距离的远近决定是否有加载界面
 * 如果要传送到物件上，传送目标位置的Y轴坐标需要比落脚点高一点
 *
 * @en Teleports the specified Player Entity. A loading screen may appear depending on the travel distance
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param targetLocation 绝对位置（目标位置：三维向量）
 * @param targetRotation 绝对旋转（目标旋转：三维向量）
 */
export declare function teleportPlayerClassicMode(playerEntity: Entity, targetLocation: Vec3, targetRotation: Vec3): void;
