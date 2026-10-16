// 自动生成：事件节点 / 二十二、商店（XXII. Shop）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【商店出售自定义商品时】事件的出参 / Output parameters of "When Custom Shop Item Is Sold"
 */
export interface CustomShopItemIsSoldEvent {
  /**
   * 商店持有者（商店持有者：实体）
   */
  readonly shopOwner: Entity;
  /**
   * 商店持有者GUID（商店持有者GUID：GUID）
   */
  readonly shopOwnerGUID: GUID;
  /**
   * 购买者实体（购买者实体：实体）
   */
  readonly buyerEntity: Entity;
  /**
   * 商店序号（商店序号：整数）
   */
  readonly shopID: int;
  /**
   * 商品序号（商品序号：整数）
   */
  readonly shopItemID: int;
  /**
   * 购买数量（购买数量：整数）
   */
  readonly purchaseQuantity: int;
}
/**
 * 【商店出售自定义商品时】 When Custom Shop Item Is Sold
 * 分类：事件节点 / 二十二、商店（XXII. Shop）
 *
 * 商店出售自定义物品时触发，商店组件的持有者可收到
 *
 * @en This event is triggered when Custom items are sold in the Shop. The Owner of the Shop Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCustomShopItemIsSold(handler: (ev: CustomShopItemIsSoldEvent) => void): void;

/**
 * 【商店出售背包物品时】事件的出参 / Output parameters of "When Selling Inventory Items in the Shop"
 */
export interface SellingInventoryItemsInTheShopEvent {
  /**
   * 商店持有者（商店持有者：实体）
   */
  readonly shopOwner: Entity;
  /**
   * 商店持有者GUID（商店持有者GUID：GUID）
   */
  readonly shopOwnerGUID: GUID;
  /**
   * 购买者实体（购买者实体：实体）
   */
  readonly buyerEntity: Entity;
  /**
   * 商店序号（商店序号：整数）
   */
  readonly shopID: int;
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 购买数量（购买数量：整数）
   */
  readonly purchaseQuantity: int;
}
/**
 * 【商店出售背包物品时】 When Selling Inventory Items in the Shop
 * 分类：事件节点 / 二十二、商店（XXII. Shop）
 *
 * 商店出售背包物品时触发，商店组件的持有者可收到
 *
 * @en This event is triggered when Inventory items are sold in the Shop. The Owner of the Shop Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onSellingInventoryItemsInTheShop(handler: (ev: SellingInventoryItemsInTheShopEvent) => void): void;

/**
 * 【商店收购道具时】事件的出参 / Output parameters of "When selling items to the shop"
 */
export interface SellingItemsToTheShopEvent<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 商店持有者（商店持有者：实体）
   */
  readonly shopOwner: Entity;
  /**
   * 商店持有者GUID（商店持有者GUID：GUID）
   */
  readonly shopOwnerGUID: GUID;
  /**
   * 出售者实体（出售者实体：实体）
   */
  readonly sellerEntity: Entity;
  /**
   * 商店序号（商店序号：整数）
   */
  readonly shopID: int;
  /**
   * 收购物品字典（收购物品字典：字典）
   */
  readonly purchaseItemDictionary: Dict<K, V>;
}
/**
 * 【商店收购道具时】 When selling items to the shop
 * 分类：事件节点 / 二十二、商店（XXII. Shop）
 *
 * 商店收购道具时触发，商店组件的持有者可收到
 *
 * @en This event is triggered when items are purchased by the Shop. The Owner of the Shop Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onSellingItemsToTheShop<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(handler: (ev: SellingItemsToTheShopEvent<K,V>) => void): void;
