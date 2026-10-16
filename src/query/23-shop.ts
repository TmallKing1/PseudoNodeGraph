// 自动生成：查询节点 / 二十三、商店（XXIII. Shop）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询自定义商店商品出售列表】 Query Custom Shop Item Sales List
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询自定义商店商品出售列表，出参为商品序号组成的列表
 *
 * @en Searches the Custom Shop sale list; the output parameter is a list of Item IDs
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @returns 商品序号列表（商品序号列表：整数列表）
 */
export declare function queryCustomShopItemSalesList(shopOwnerEntity: Entity, shopID: int): int[];

/**
 * 【查询背包商店物品出售列表】 Query Inventory Shop Item Sales List
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询背包商店物品出售列表
 *
 * @en Search the inventory shop's sales list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @returns 道具配置ID列表（道具配置ID列表：配置ID列表）
 */
export declare function queryInventoryShopItemSalesList(shopOwnerEntity: Entity, shopID: int): ConfigId[];

/**
 * 【查询商店收购物品列表】 Query Shop Purchase Item List
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询商店收购物品列表
 *
 * @en Search the shop's purchase list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @returns 道具配置ID列表（道具配置ID列表：配置ID列表）
 */
export declare function queryShopPurchaseItemList(shopOwnerEntity: Entity, shopID: int): ConfigId[];

/**
 * 【查询自定义商店商品出售信息】的多个出参 / Outputs of "Query Custom Shop Item Sales Info"
 */
export interface QueryCustomShopItemSalesInfoResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 出售货币字典（出售货币字典：字典）
   */
  readonly sellCurrencyDictionary: Dict<K, V>;
  /**
   * 所属页签序号（所属页签序号：整数）
   */
  readonly affiliatedTabID: int;
  /**
   * 是否限购（是否限购：布尔值）
   */
  readonly limitPurchase: bool;
  /**
   * 限购数量（限购数量：整数）
   */
  readonly purchaseLimit: int;
  /**
   * 排序优先级（排序优先级：整数）
   */
  readonly sortPriority: int;
  /**
   * 是否可出售（是否可出售：布尔值）
   */
  readonly canBeSold: bool;
}
/**
 * 【查询自定义商店商品出售信息】 Query Custom Shop Item Sales Info
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询自定义商店特定商品的出售信息
 *
 * @en Searches sale information for a specified Item in the Custom Shop
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @param shopItemID 商品序号（商品序号：整数）
 * @returns QueryCustomShopItemSalesInfoResult（多出参，见接口字段）
 */
export declare function queryCustomShopItemSalesInfo<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemID: int): QueryCustomShopItemSalesInfoResult<K, V>;

/**
 * 【查询背包商店商品出售信息】的多个出参 / Outputs of "Query Inventory Shop Item Sales Info"
 */
export interface QueryInventoryShopItemSalesInfoResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 出售货币字典（出售货币字典：字典）
   */
  readonly sellCurrencyDictionary: Dict<K, V>;
  /**
   * 排序优先级（排序优先级：整数）
   */
  readonly sortPriority: int;
  /**
   * 是否可出售（是否可出售：布尔值）
   */
  readonly canBeSold: bool;
}
/**
 * 【查询背包商店商品出售信息】 Query Inventory Shop Item Sales Info
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询背包商店中特定商品的出售信息
 *
 * @en Searches sale information for a specified Item in the Inventory Shop
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @returns QueryInventoryShopItemSalesInfoResult（多出参，见接口字段）
 */
export declare function queryInventoryShopItemSalesInfo<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, itemConfigID: ConfigId): QueryInventoryShopItemSalesInfoResult<K, V>;

/**
 * 【查询商店物品收购信息】的多个出参 / Outputs of "Query Shop Item Purchase Info"
 */
export interface QueryShopItemPurchaseInfoResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 收购货币字典（收购货币字典：字典）
   */
  readonly purchaseCurrencyDictionary: Dict<K, V>;
  /**
   * 是否可收购（是否可收购：布尔值）
   */
  readonly purchasable: bool;
}
/**
 * 【查询商店物品收购信息】 Query Shop Item Purchase Info
 * 分类：查询节点 / 二十三、商店（XXIII. Shop）
 *
 * 查询商店特定物品的收购信息
 *
 * @en Searches purchase information for a specified Item in the Shop
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @returns QueryShopItemPurchaseInfoResult（多出参，见接口字段）
 */
export declare function queryShopItemPurchaseInfo<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, itemConfigID: ConfigId): QueryShopItemPurchaseInfoResult<K, V>;
