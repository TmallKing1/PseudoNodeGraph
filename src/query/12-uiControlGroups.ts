// 自动生成：查询节点 / 十二、界面控件组（XII. UI Control Groups）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取玩家当前界面布局】 Get Player's Current UI Layout
 * 分类：查询节点 / 十二、界面控件组（XII. UI Control Groups）
 *
 * 获取指定玩家实体上当前生效的界面布局的索引
 *
 * @en Returns the ID of the currently active Interface Layout on the specified Player Entity
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 布局索引（布局索引：整数）
 */
export declare function getPlayersCurrentUILayout(playerEntity: Entity): int;
