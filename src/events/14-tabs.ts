// 自动生成：事件节点 / 十四、选项卡（XIV. Tabs）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【选项卡选中时】事件的出参 / Output parameters of "When Tab Is Selected"
 */
export interface TabIsSelectedEvent {
  /**
   * 挂载选项卡组件的实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 挂载选项卡组件的实体GUID，若无则输出0（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 选项卡的序号（选项卡序号：整数）
   */
  readonly tabID: int;
  /**
   * 触发选项卡时的角色实体（选择者实体：实体）
   */
  readonly selectorEntity: Entity;
}
/**
 * 【选项卡选中时】 When Tab Is Selected
 * 分类：事件节点 / 十四、选项卡（XIV. Tabs）
 *
 * 生效的选项卡被选中后，会向节点图发送事件
 * 配置选项卡组件的实体节点图，会接收该事件
 *
 * @en When the active tab is selected, it will send an event to the node graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onTabIsSelected(handler: (ev: TabIsSelectedEvent) => void): void;
