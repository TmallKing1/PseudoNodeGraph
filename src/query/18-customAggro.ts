// 自动生成：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询指定实体的仇恨值】 Query the Aggro Value of the Specified Entity
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询目标实体在仇恨拥有者上的仇恨值
 *
 * @en Searches the Aggro Value of the Target Entity on its Aggro Owners
 * @param queryTarget 查询目标（查询目标：实体）
 * @param aggroOwner 仇恨拥有者（仇恨拥有者：实体）
 * @returns 仇恨值（仇恨值：整数）
 */
export declare function queryTheAggroValueOfTheSpecifiedEntity(queryTarget: Entity, aggroOwner: Entity): int;

/**
 * 【查询指定实体的仇恨倍率】 Query the Aggro Multiplier of the Specified Entity
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询指定实体的仇恨倍率
 *
 * @en Query Aggro Multiplier of Specific Entity
 * @param queryTarget 查询目标（查询目标：实体）
 * @returns 仇恨倍率（仇恨倍率：浮点数）
 */
export declare function queryTheAggroMultiplierOfTheSpecifiedEntity(queryTarget: Entity): float;

/**
 * 【查询全局仇恨转移倍率】 Query Global Aggro Transfer Multiplier
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询全局仇恨转移倍率，在【关卡设置】中可以配置
 *
 * @en Searches the Global Aggro Transfer Multiplier; it can be configured in [Stage Settings]
 * @returns 全局仇恨转移倍率（全局仇恨转移倍率：浮点数）
 */
export declare function queryGlobalAggroTransferMultiplier(): float;

/**
 * 【获取指定实体的仇恨目标】 Get the Aggro Target of the Specified Entity
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 获取指定实体的仇恨目标
 *
 * @en Get Aggro Target of Specific Entity
 * @param aggroOwner 仇恨拥有者（仇恨拥有者：实体）
 * @returns 仇恨目标（仇恨目标：实体）
 */
export declare function getTheAggroTargetOfTheSpecifiedEntity(aggroOwner: Entity): Entity;

/**
 * 【获取目标所在仇恨列表的拥有者列表】 Get List of Owners Who Have the Target in Their Aggro List
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询指定目标实体在哪些实体的仇恨列表中
 *
 * @en Searches which Entities' Aggro Lists include the specified Target Entity
 * @param queryTarget 查询目标（查询目标：实体）
 * @returns 仇恨拥有者列表（仇恨拥有者列表：实体列表）
 */
export declare function getListOfOwnersWhoHaveTheTargetInTheirAggroList(queryTarget: Entity): Entity[];

/**
 * 【获取以目标为仇恨目标的拥有者列表】 Get List of Owners That Have the Target As Their Aggro Target
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询哪些实体以目标实体为仇恨目标
 *
 * @en Searches which Entities have the Target Entity as their Aggro Target
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 仇恨拥有者列表（仇恨拥有者列表：实体列表）
 */
export declare function getListOfOwnersThatHaveTheTargetAsTheirAggroTarget(targetEntity: Entity): Entity[];

/**
 * 【获取指定实体的仇恨列表】 Get the Aggro List of the Specified Entity
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 获取指定实体的仇恨列表
 *
 * @en Get Specific Entity's Aggro List
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 仇恨列表（仇恨列表：实体列表）
 */
export declare function getTheAggroListOfTheSpecifiedEntity(targetEntity: Entity): Entity[];

/**
 * 【查询指定实体是否已入战】 Query if Specified Entity Is in Combat
 * 分类：查询节点 / 十八、自定义仇恨（XVIII. Custom Aggro）
 *
 * 查询指定实体是否已经入战
 *
 * @en Searches whether the specified Entity has entered battle
 * @param queryTarget 查询目标（查询目标：实体）
 * @returns 是否入战（是否入战：布尔值）
 */
export declare function queryIfSpecifiedEntityIsInCombat(queryTarget: Entity): bool;
