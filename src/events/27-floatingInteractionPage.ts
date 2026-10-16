// 自动生成：事件节点 / 二十七、悬浮交互页（XXVII. Floating Interaction Page）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【悬浮交互页操作触发时】事件的出参 / Output parameters of "When Floating Interaction Page is Triggered"
 */
export interface FloatingInteractionPageIsTriggeredEvent {
  /**
   * 生效的玩家实体（玩家实体：实体）
   */
  readonly playerEntity: Entity;
  /**
   * 生效的玩家实体对应的GUID（玩家GUID：GUID）
   */
  readonly playerGUID: GUID;
  /**
   * 悬浮交互页的唯一标识（悬浮交互页索引：整数）
   */
  readonly floatingInteractionPageIndex: int;
  /**
   * 触发该事件的对应控件的索引（交互项索引：整数）
   */
  readonly interactiveItemIndex: int;
  /**
   * 页签/单选项视窗的索引组成的列表，本出参和【列表选中项】出参一一对应（列表索引：整数列表）
   */
  readonly listIndex: int[];
  /**
   * 每个页签/单选项视窗，都至多选中一个项，本出参和【列表索引】出参一一对应（列表选中项：整数列表）
   */
  readonly selectedListItem: int[];
}
/**
 * 【悬浮交互页操作触发时】 When Floating Interaction Page is Triggered
 * 分类：事件节点 / 二十七、悬浮交互页（XXVII. Floating Interaction Page）
 *
 * 页签/单选项视窗启用了【返回服务器事件】开关时，在确认交互后，对应玩家实体的服务器节点图会收到该事件
 * 当玩家选中页签/单选项视窗时
 * 交互项索引为对应页签/单选项视窗的索引
 * 列表索引为对应页签/单选项视窗的索引
 * 列表选中项为对应页签/单选项视窗的当前点击项的索引
 * 当玩家用某按钮，关联监听了页签/单选项视窗，则玩家点击按钮时
 * 交互项索引为对应页签/单选项视窗的索引
 * 列表索引为按钮对应的所有页签/单选项视窗的索引列表
 * 列表选中项为对应页签/单选项视窗的当前点击项的索引列表
 * 在悬浮交互页中配置的交互页关闭按钮、交互按钮、道具展示、自定义按钮，在确认交互后，对应玩家实体的玩家服务器节点图也会收到该事件
 *
 * @en Node Functions When the "Return to Server Event" option is enabled for a tab or single-choice window, confirming the interaction will trigger this event on the corresponding Player Entity's Server Node Graph.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onFloatingInteractionPageIsTriggered(handler: (ev: FloatingInteractionPageIsTriggeredEvent) => void): void;
