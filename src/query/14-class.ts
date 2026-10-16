// 自动生成：查询节点 / 十四、职业（XIV. Class）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询玩家职业】 Query Player Class
 * 分类：查询节点 / 十四、职业（XIV. Class）
 *
 * 查询玩家当前的职业，会输出该职业的配置ID
 *
 * @en Searches the Player's current Class; outputs the Config ID of that Class
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 职业配置ID（职业配置ID：配置ID）
 */
export declare function queryPlayerClass(playerEntity: Entity): ConfigId;

/**
 * 【查询玩家职业的等级】 Query Player Class Level
 * 分类：查询节点 / 十四、职业（XIV. Class）
 *
 * 查询玩家指定职业的等级
 *
 * @en Searches the Player's Level of the specified Class
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param classConfigID 职业配置ID（职业配置ID：配置ID）
 * @returns 等级（等级：整数）
 */
export declare function queryPlayerClassLevel(playerEntity: Entity, classConfigID: ConfigId): int;
