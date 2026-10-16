// 自动生成：执行节点 / 三十一、文本气泡（XXXI. Text Bubbles）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【切换生效的文本气泡】 Switch Active Text Bubble
 * 分类：执行节点 / 三十一、文本气泡（XXXI. Text Bubbles）
 *
 * 目标实体的文本气泡组件中，会以配置ID对应的文本气泡替换当前生效的文本气泡
 *
 * @en In the Target Entity's Text Bubble Component, replace the current active Text Bubble with the one corresponding to the Config ID
 * @param targetEntity 目标实体（目标实体：实体）
 * @param textBubbleConfigurationID 文本气泡配置ID（文本气泡配置ID：配置ID）
 */
export declare function switchActiveTextBubble(targetEntity: Entity, textBubbleConfigurationID: ConfigId): void;
