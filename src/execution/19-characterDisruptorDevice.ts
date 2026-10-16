// 自动生成：执行节点 / 十九、角色扰动装置（XIX. Character Disruptor Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置角色扰动装置】 Set Character Disruptor Device
 * 分类：执行节点 / 十九、角色扰动装置（XIX. Character Disruptor Device）
 *
 * 通过序号修改目标实体上生效的角色扰动装置，若序号不存在，则修改过后角色扰动装置将不再生效
 *
 * @en Edit the Character Disruptor Device active on the Target Entity by ID; if the ID does not exist, the Character Disruptor Device will no longer function after the modification
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param deviceID 角色扰动装置的标识（装置序号：整数）
 */
export declare function setCharacterDisruptorDevice(targetEntity: Entity, deviceID: int): void;
