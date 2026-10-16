// 自动生成：执行节点 / 四十六、实体布设组（XLVI. Entity Deployment Group）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭实体布设组】 Activate/Disable Entity Deployment Group
 * 分类：执行节点 / 四十六、实体布设组（XLVI. Entity Deployment Group）
 *
 * 修改实体布设组初始创建开关的状态
 *
 * @en Edit the Initial Creation Switch state of the Entity Layout Group
 * @param entityDeploymentGroupIndex 实体布设组索引（实体布设组索引：整数）
 * @param activate “是”则该实体布设组初始创建开关状态为开启（是否激活：布尔值）
 */
export declare function activateDisableEntityDeploymentGroup(entityDeploymentGroupIndex: int, activate: bool): void;
