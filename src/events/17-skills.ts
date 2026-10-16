// 自动生成：事件节点 / 十七、技能（XVII. Skills）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【技能节点调用时】事件的出参 / Output parameters of "When Skill Node Is Called"
 */
export interface SkillNodeIsCalledEvent {
  /**
   * 调用者实体（调用者实体：实体）
   */
  readonly callerEntity: Entity;
  /**
   * 调用者GUID（调用者GUID：GUID）
   */
  readonly callerGUID: GUID;
  /**
   * 参数1（参数1：字符串）
   */
  readonly parameter1: str;
  /**
   * 参数2（参数2：字符串）
   */
  readonly parameter2: str;
  /**
   * 参数3（参数3：字符串）
   */
  readonly parameter3: str;
}
/**
 * 【技能节点调用时】 When Skill Node Is Called
 * 分类：事件节点 / 十七、技能（XVII. Skills）
 *
 * 通过技能节点图的【通知服务器节点图】节点触发，可以传入三个字符串类型的值
 *
 * @en This event is triggered by the [Notify Server Node Graph] Node in the Skill Node Graph. Up to three strings can be passed in
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onSkillNodeIsCalled(handler: (ev: SkillNodeIsCalledEvent) => void): void;
