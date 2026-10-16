// 自动生成：执行节点 / 四十四、扫描标签（XLIV. Scan Tags）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置扫描标签的规则】 Set Scan Tag Rules
 * 分类：执行节点 / 四十四、扫描标签（XLIV. Scan Tags）
 *
 * 设置扫描标签的规则，会以设置好的规则执行扫描标签的逻辑
 *
 * @en Configure rules for Scan Tags. The scanning logic is executed based on the configured rules
 * @param targetEntity 目标实体（目标实体：实体）
 * @param ruleType 分为视野优先、距离优先（规则类型：枚举）
 */
export declare function setScanTagRules(targetEntity: Entity, ruleType: E.ScanTagRuleType): void;

/**
 * 【设置扫描组件的生效扫描标签序号】 Set Scan Component's Active Scan Tag ID
 * 分类：执行节点 / 四十四、扫描标签（XLIV. Scan Tags）
 *
 * 将目标实体的扫描标签组件中对应序号的扫描标签设置为生效
 *
 * @en Set the Scan Tag with the specified ID in the Target Entity's Scan Tag Component to the active state
 * @param targetEntity 目标实体（目标实体：实体）
 * @param scanTagID 扫描标签序号（扫描标签序号：整数）
 */
export declare function setScanComponentsActiveScanTagID(targetEntity: Entity, scanTagID: int): void;
