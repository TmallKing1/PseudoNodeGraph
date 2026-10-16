// 自动生成：执行节点 / 二十一、选项卡（XXI. Tabs）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭选项卡】 Activate/Disable Tab
 * 分类：执行节点 / 二十一、选项卡（XXI. Tabs）
 *
 * 可以修改目标实体的选项卡组件中对应序号的选项卡状态
 *
 * @en Edit the Tab state by ID in the Target Entity's Tab Component
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param tabID 选项卡的标识（选项卡序号：整数）
 * @param activate 为“是”则激活，可以被选取（是否激活：布尔值）
 */
export declare function activateDisableTab(targetEntity: Entity, tabID: int, activate: bool): void;
