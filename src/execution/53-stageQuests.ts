// 自动生成：执行节点 / 五十三、关卡任务（LII. Stage Quests）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置任务计数】 Set Task Count
 * 分类：执行节点 / 五十三、关卡任务（LII. Stage Quests）
 *
 * 仅超限模式可用
 * 可以将玩家对应任务的当前计数设置为指定的值
 *
 * @en Available only for Beyond Mode
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param questIndex 任务索引（任务索引：整数）
 * @param taskCount 任务计数（任务计数：整数）
 */
export declare function setTaskCount(playerEntity: Entity, questIndex: int, taskCount: int): void;

/**
 * 【增加任务计数】 Increase Task Count
 * 分类：执行节点 / 五十三、关卡任务（LII. Stage Quests）
 *
 * 仅超限模式可用
 * 可以增加玩家对应任务的当前计数值，增加值可以为负数
 *
 * @en Available only for Beyond Mode
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param questIndex 任务索引（任务索引：整数）
 * @param taskCountIncreasedBy 修改后的值=修改前的值+增加值（任务计数增加值：整数）
 */
export declare function increaseTaskCount(playerEntity: Entity, questIndex: int, taskCountIncreasedBy: int): void;
