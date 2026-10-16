// 自动生成：事件节点 / 十二、界面控件组（XII. UI Control Groups）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【界面控件组触发时】事件的出参 / Output parameters of "When UI Control Group Is Triggered"
 */
export interface UiControlGroupIsTriggeredEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 如果触发该事件的界面控件和其他界面控件组成了多控件界面控件组(即界面控件组组合)，此出参会有对应的值（界面控件组组合索引：整数）
   */
  readonly uiControlGroupCompositeIndex: int;
  /**
   * 触发该事件的界面控件为单控件界面控件组，则此处为该界面控件组的索引。 触发该事件的界面控件为多控件界面控件组，则此处为组合内对应该界面控件的索引（界面控件组索引：整数）
   */
  readonly uiControlGroupIndex: int;
}
/**
 * 【界面控件组触发时】 When UI Control Group Is Triggered
 * 分类：事件节点 / 十二、界面控件组（XII. UI Control Groups）
 *
 * 只有交互按钮、道具展示、自定义按钮、自定义开关的界面控件，才会触发本事件
 * 此事件只有触发交互的 玩家 节点图可以获取
 *
 * @en This event is triggered only by UI controls of the following types: Interactive Button, Item Display, Custom Button, and Custom Switch
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onUiControlGroupIsTriggered(handler: (ev: UiControlGroupIsTriggeredEvent) => void): void;
