// 自动生成：查询节点 / 三十、扫描标签（XXX. Scan Tags）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取当前生效的扫描标签配置ID】 Get the Currently Active Scan Tag Config ID
 * 分类：查询节点 / 三十、扫描标签（XXX. Scan Tags）
 *
 * 获取目标实体上当前生效的扫描标签的配置ID
 *
 * @en Returns the Configuration ID of the currently active Scan Tags on the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 扫描标签配置ID（扫描标签配置ID：配置ID）
 */
export declare function getTheCurrentlyActiveScanTagConfigID(targetEntity: Entity): ConfigId;
