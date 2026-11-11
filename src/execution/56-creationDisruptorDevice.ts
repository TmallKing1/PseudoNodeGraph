// 自动生成：执行节点 / 五十六、造物扰动装置（LVI. Creation Disruptor Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置造物扰动装置】 Set Creation Disruptor Device
 * 分类：执行节点 / 五十六、造物扰动装置（LVI. Creation Disruptor Device）
 *
 * 通过序号修改目标实体上生效的造物扰动装置，若序号不存在，则该节点运行后造物扰动装置将不再生效
 *
 * @en Changes which Creation Disruptor Device is active on the target entity based on the specified index. If the index does not exist, no Creation Disruptor Device will be active after this node runs
 * @param targetEntity 挂载造物扰动装置的实体（目标实体：实体）
 * @param deviceIndex 造物扰动装置的标识（装置序号：整数）
 */
export declare function setCreationDisruptorDevice(targetEntity: Entity, deviceIndex: int): void;
