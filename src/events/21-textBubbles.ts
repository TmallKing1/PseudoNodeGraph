// 自动生成：事件节点 / 二十一、文本气泡（XXI. Text Bubbles）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【文本气泡完成时】事件的出参 / Output parameters of "When Text Bubble Is Completed"
 */
export interface TextBubbleIsCompletedEvent {
  /**
   * 挂载文本气泡组件的运行时实体（气泡归属者实体：实体）
   */
  readonly bubbleOwnerEntity: Entity;
  /**
   * 当前气泡对话的目标角色（角色实体：实体）
   */
  readonly characterEntity: Entity;
  /**
   * 当前生效的文本气泡配置ID（文本气泡配置ID：配置ID）
   */
  readonly textBubbleConfigurationID: ConfigId;
  /**
   * 当前生效的文本气泡，对该对话角色，完整播放了几次（文本气泡完成次数：整数）
   */
  readonly textBubbleCompletionCount: int;
}
/**
 * 【文本气泡完成时】 When Text Bubble Is Completed
 * 分类：事件节点 / 二十一、文本气泡（XXI. Text Bubbles）
 *
 * 该事件仅能被挂载文本气泡组件，且完成对话的实体节点图接收
 * 完成的含义是最后一句对话播放完成
 *
 * @en This event can only be mounted by Text Bubble Components and is received by the Entity's Node Graph that completed the dialogue
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onTextBubbleIsCompleted(handler: (ev: TextBubbleIsCompletedEvent) => void): void;
