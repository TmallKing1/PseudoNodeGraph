// 自动生成：执行节点 / 二十、单位状态（XX. Unit Status）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【添加单位状态】的多个出参 / Outputs of "Add Unit Status"
 */
export interface AddUnitStatusResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 失败，其他异常 失败，让位于其他状态：目标上已有的单位状态与尝试施加的状态之间有让位关系 失败，超出并存上限：超出目标实体上的指定单位状态的并存上限 失败，附加叠层未成功：叠层失败 成功，施加新状态：成功附加新状态 成功，槽位叠层：目标上已有该单位状态，叠层（施加结果：枚举）
   */
  readonly applicationResult: E.UnitStatusApplyResult;
  /**
   * 如果施加成功，则返回一个该单位状态实例所在的单位状态槽位序号（槽位序号：整数）
   */
  readonly slotID: int;
}
/**
 * 【添加单位状态】 Add Unit Status
 * 分类：执行节点 / 二十、单位状态（XX. Unit Status）
 *
 * 向指定目标实体添加一定层数的单位状态
 *
 * @en Add a specified Stack Count of Unit Status to the Target Entity
 * @param applierEntity 决定了该次行为的施加者实体，默认为该节点图所关联的实体（施加者实体：实体）
 * @param applicationTargetEntity 实际被添加该单位状态的实体（施加目标实体：实体）
 * @param unitStatusConfigID 该单位状态的标识（单位状态配置ID：配置ID）
 * @param appliedStacks 该单位状态的层数（施加层数：整数）
 * @param unitStatusParameterDictionary 可以携带一组参数，用于覆写单位状态中的配置值（单位状态参数字典：字典）
 * @returns AddUnitStatusResult（多出参，见接口字段）
 */
export declare function addUnitStatus<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(applierEntity: Entity, applicationTargetEntity: Entity, unitStatusConfigID: ConfigId, appliedStacks: int, unitStatusParameterDictionary: Dict<K, V>): AddUnitStatusResult<K, V>;

/**
 * 【移除单位状态】 Remove Unit Status
 * 分类：执行节点 / 二十、单位状态（XX. Unit Status）
 *
 * 从目标实体上移除指定单位状态。可以选择全部移除，或移除其中一层
 *
 * @en Remove a specified Unit Status from the Target Entity. Either all stacks or a single stack can be removed
 * @param removeTargetEntity 被移除该单位状态的实体（移除目标实体：实体）
 * @param unitStatusConfigID 该单位状态的标识（单位状态配置ID：配置ID）
 * @param removalMethod 所有同名并存状态：移除以该配置ID施加的所有同名状态 最快丢失叠加层数的状态：移除最快丢失叠加层数的一层状态（移除方式：枚举）
 * @param removerEntity 决定了该次行为的移除者实体，默认为该节点图所关联的实体（移除者实体：实体）
 */
export declare function removeUnitStatus(removeTargetEntity: Entity, unitStatusConfigID: ConfigId, removalMethod: E.UnitStatusRemovalMethod, removerEntity: Entity): void;
