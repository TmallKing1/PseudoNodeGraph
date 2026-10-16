// 自动生成：执行节点 / 六、关卡相关（VI. Stage Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【结算关卡】 Settle Stage
 * 分类：执行节点 / 六、关卡相关（VI. Stage Related）
 *
 * 触发关卡结算流程，会按照 关卡结算 内的逻辑进行局外的逻辑结算
 *
 * @en Triggers the Stage Settlement process, which executes out-of-stage logic as defined in Stage Settlement
 */
export declare function settleStage(): void;

/**
 * 【设置当前环境时间】 Set Current Environment Time
 * 分类：执行节点 / 六、关卡相关（VI. Stage Related）
 *
 * 立即切换环境时间到指定小时，参数需要是0~24之间的浮点数值
 * 若目标小时数小于当前时间，视为天数+1
 *
 * @en Instantly switch Environment Time to the specified hour. The parameter must be a Floating Point Number between 0 and 24
 * @param environmentTime 需要是0~24浮点数值，超出范围外时节点不生效（环境时间：浮点数）
 */
export declare function setCurrentEnvironmentTime(environmentTime: float): void;

/**
 * 【设置环境时间流逝速度】 Set Environment Time Passage Speed
 * 分类：执行节点 / 六、关卡相关（VI. Stage Related）
 *
 * 每秒流逝分钟数，会被限制在0~60之间（提瓦特速度为1）
 *
 * @en Minutes elapsed per second, limited to 0 - 60 (Teyvat speed is 1)
 * @param environmentTimePassageSpeed 会被限制在0~60之间，超出范围外时会按0或60生效（环境时间流逝速度：浮点数）
 */
export declare function setEnvironmentTimePassageSpeed(environmentTimePassageSpeed: float): void;
