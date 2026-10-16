// 自动生成：查询节点 / 三十五、关卡任务（XXXV. Stage Tasks）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询指定任务计数】 Query Specified Task Count
 * 分类：查询节点 / 三十五、关卡任务（XXXV. Stage Tasks）
 *
 * 仅超限模式可用
 * 可以查询对应玩家的指定任务的当前计数
 *
 * @en Available only in Beyond Mode
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param questIndex 任务索引（任务索引：整数）
 * @returns 任务计数（任务计数：整数）
 */
export declare function querySpecifiedTaskCount(playerEntity: Entity, questIndex: int): int;

/**
 * 【查询指定任务是否完成】 Query If Specified Task is Completed
 * 分类：查询节点 / 三十五、关卡任务（XXXV. Stage Tasks）
 *
 * 仅超限模式可用
 * 可以查询对应玩家的指定任务是否完成
 *
 * @en Available only in Beyond Mode
 * @param playerEntity 所查询的玩家实体（玩家实体：实体）
 * @param questIndex 所要查询的任务对应的索引（任务索引：整数）
 * @returns 是否完成（是否完成：布尔值）
 */
export declare function queryIfSpecifiedTaskIsCompleted(playerEntity: Entity, questIndex: int): bool;
