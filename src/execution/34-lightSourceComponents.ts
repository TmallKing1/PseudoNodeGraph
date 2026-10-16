// 自动生成：执行节点 / 三十四、光源组件（XXXIV. Light Source Components）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【开关实体光源】 Toggle Entity Light Source
 * 分类：执行节点 / 三十四、光源组件（XXXIV. Light Source Components）
 *
 * 调整指定目标实体上的光源组件对应序号的光源状态
 *
 * @en Adjust the Light Source state at the specified ID in the Light Source Component on the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param lightSourceID 光源序号（光源序号：整数）
 * @param enableOrDisable “是”为打开（打开或关闭：布尔值）
 */
export declare function toggleEntityLightSource(targetEntity: Entity, lightSourceID: int, enableOrDisable: bool): void;
