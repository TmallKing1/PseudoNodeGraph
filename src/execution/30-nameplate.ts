// 自动生成：执行节点 / 三十、铭牌（XXX. Nameplate）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置实体生效铭牌】 Set Entity Active Nameplate
 * 分类：执行节点 / 三十、铭牌（XXX. Nameplate）
 *
 * 直接设置指定目标的生效铭牌列表，在入参列表中的铭牌配置会生效，不在列表中的会失效
 *
 * @en Set the active Nameplate list for the specified target. Nameplates included in the input list are enabled, while those not included are disabled
 * @param targetEntity 目标实体（目标实体：实体）
 * @param nameplateConfigIDList 铭牌配置ID列表（铭牌配置ID列表：配置ID列表）
 */
export declare function setEntityActiveNameplate(targetEntity: Entity, nameplateConfigIDList: ConfigId[]): void;
