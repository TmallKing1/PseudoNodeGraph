// 自动生成：查询节点 / 三十二、实体布设组（XXXII. Entity Layout Group）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询当前激活的实体布设组列表】 Get Currently Active Entity Deployment Groups
 * 分类：查询节点 / 三十二、实体布设组（XXXII. Entity Layout Group）
 *
 * 查询当前关卡激活的实体布设组组成的列表
 *
 * @en Searches the list of Entity Layout Groups currently active in the Stage
 * @returns 实体布设组索引列表（实体布设组索引列表：整数列表）
 */
export declare function getCurrentlyActiveEntityDeploymentGroups(): int[];
