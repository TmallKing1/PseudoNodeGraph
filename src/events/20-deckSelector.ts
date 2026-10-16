// 自动生成：事件节点 / 二十、卡牌选择器（XX. Deck Selector）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【卡牌选择器完成时】事件的出参 / Output parameters of "When Deck Selector Is Complete"
 */
export interface DeckSelectorIsCompleteEvent {
  /**
   * 生效的玩家实体（目标玩家：实体）
   */
  readonly targetPlayer: Entity;
  /**
   * 触发选择交互时，合法的 选择结果 会作为该出参提供，并且完成原因为 玩家完成 唤起弹窗选择 全量刷新， 触发刷新交互时，全量的 选择结果对应列表 会作为该出参提供，并且完成原因为 全量刷新 唤起弹窗选择 部分刷新， 触发刷新交互时，合法的 选择结果 会作为该出参提供，并且完成原因为 定量刷新 卡牌选择器超时未交互时， 默认返回选择 会作为该出参提供，并且完成原因为 超时关闭 卡牌选择器的 可放弃选择勾选 时，触发关闭交互时， 默认返回选择 会作为该出参提供，并且完成原因为 主动关闭 通过节点图关闭卡牌选择器节点造成的卡牌选择器关闭，该出参会为空，并且完成原因为 节点图关闭（选择结果列表：整数列表）
   */
  readonly selectionResultList: int[];
  /**
   * 六种原因枚举 玩家完成、全量刷新、定量刷新、超时关闭、主动关闭、节点图关闭（完成原因：枚举）
   */
  readonly completionReason: E.DeckSelectorCompletionReason;
  /**
   * 引用的卡牌选择器索引（卡牌选择器索引：整数）
   */
  readonly deckSelectorIndex: int;
}
/**
 * 【卡牌选择器完成时】 When Deck Selector Is Complete
 * 分类：事件节点 / 二十、卡牌选择器（XX. Deck Selector）
 *
 * 玩家操作完成卡牌选择器/或者因为时间原因强制关闭等，都会给玩家节点图触发本事件
 * 出参可以通知本次卡牌选择器的结果，和对应原因
 *
 * @en This event is triggered on the Player's Node Graph when the Player completes the Deck Selector, or when it is forcibly closed due to time constraints
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onDeckSelectorIsComplete(handler: (ev: DeckSelectorIsCompleteEvent) => void): void;
