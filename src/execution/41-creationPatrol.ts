// 自动生成：执行节点 / 四十一、造物巡逻（XLI. Creation Patrol）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【切换造物巡逻模板】 Switch Creation Patrol Template
 * 分类：执行节点 / 四十一、造物巡逻（XLI. Creation Patrol）
 *
 * 造物切换的巡逻模板即刻切换，并按照新的巡逻模板进行移动
 *
 * @en Immediately switch the patrol template for the Creation and move according to the new template
 * @param creationEntity 造物实体（造物实体：实体）
 * @param patrolTemplateID 巡逻模板序号（巡逻模板序号：整数）
 */
export declare function switchCreationPatrolTemplate(creationEntity: Entity, patrolTemplateID: int): void;
