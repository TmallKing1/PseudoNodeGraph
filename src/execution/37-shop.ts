// 自动生成：执行节点 / 三十七、商店（XXXVII. Shop）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【打开商店】 Open Shop
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 在游戏运行过程中以玩家实体的视角打开商店
 *
 * @en Open the Shop from the Player Entity's perspective during gameplay
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param shopOwnerEntity 商店归属者实体的商店组件对应的商店序号（商店归属者实体：实体）
 * @param shopID 商店序号（商店序号：整数）
 */
export declare function openShop(playerEntity: Entity, shopOwnerEntity: Entity, shopID: int): void;

/**
 * 【关闭商店】 Close Shop
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 在游戏运行过程中以玩家实体的视角关闭所有已打开的商店
 *
 * @en Close all open Shops from the Player Entity's perspective during gameplay
 * @param playerEntity 玩家实体（玩家实体：实体）
 */
export declare function closeShop(playerEntity: Entity): void;

/**
 * 【设置自定义商店商品出售信息】 Set Custom Shop Item Sales Info
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 设置自定义商店商品出售信息
 *
 * @en Set custom store product sales information
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemID 商品序号（商品序号：整数）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @param sellCurrencyDictionary 出售货币字典（出售货币字典：字典）
 * @param affiliatedTabID 1装备、2消耗品、3材料、4贵重物品（所属页签序号：整数）
 * @param limitPurchase 是否限购（是否限购：布尔值）
 * @param purchaseLimit 限购数量（限购数量：整数）
 * @param sortPriority 排序优先级（排序优先级：整数）
 * @param canBeSold 是否可出售（是否可出售：布尔值）
 */
export declare function setCustomShopItemSalesInfo<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemID: int, itemConfigID: ConfigId, sellCurrencyDictionary: Dict<K, V>, affiliatedTabID: int, limitPurchase: bool, purchaseLimit: int, sortPriority: int, canBeSold: bool): void;

/**
 * 【设置背包商店商品出售信息】 Set Inventory Shop Item Sales Info
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 设置背包商店商品出售信息
 *
 * @en Set up information on items for sale in the inventory shop.
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @param sellCurrencyDictionary 出售货币字典（出售货币字典：字典）
 * @param affiliatedTabID 所属页签序号（所属页签序号：整数）
 * @param sortPriority 排序优先级（排序优先级：整数）
 * @param canBeSold 是否可出售（是否可出售：布尔值）
 */
export declare function setInventoryShopItemSalesInfo<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, itemConfigID: ConfigId, sellCurrencyDictionary: Dict<K, V>, affiliatedTabID: int, sortPriority: int, canBeSold: bool): void;

/**
 * 【设置物品收购表中道具收购信息】 Set Item Purchase Info in the Purchase List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 设置物品收购表中道具收购信息
 *
 * @en Set up item acquisition table
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemConfigID 商品道具配置ID（商品道具配置ID：配置ID）
 * @param purchaseCurrencyDictionary 收购货币字典（收购货币字典：字典）
 * @param purchasable 是否可收购（是否可收购：布尔值）
 */
export declare function setItemPurchaseInfoInThePurchaseList<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemConfigID: ConfigId, purchaseCurrencyDictionary: Dict<K, V>, purchasable: bool): void;

/**
 * 【向自定义商店出售表中新增商品】 Add New Item to Custom Shop Sales List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 向自定义商店出售表中新增商品，新增成功后出参会生成一个整数型索引作为该商品的标识
 *
 * @en Add items to the Custom Shop Sales List. Upon success, an Integer ID is generated in the Output Parameter as the item identifier
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemConfigID 商品道具配置ID（商品道具配置ID：配置ID）
 * @param sellCurrencyDictionary 出售货币字典（出售货币字典：字典）
 * @param affiliatedTabID 1装备、2消耗品、3材料、4贵重物品（所属页签序号：整数）
 * @param limitPurchase 是否限购（是否限购：布尔值）
 * @param purchaseLimit 限购数量（限购数量：整数）
 * @param sortPriority 排序优先级（排序优先级：整数）
 * @param canBeSold 是否可出售（是否可出售：布尔值）
 * @returns 商品索引（商品索引：整数）
 */
export declare function addNewItemToCustomShopSalesList<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemConfigID: ConfigId, sellCurrencyDictionary: Dict<K, V>, affiliatedTabID: int, limitPurchase: bool, purchaseLimit: int, sortPriority: int, canBeSold: bool): int;

/**
 * 【向背包商店出售表中新增商品】 Add New Item to Inventory Shop Sales List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 向背包商店出售表中新增商品
 *
 * @en Add new items to the inventory shop's sales list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemConfigID 商品道具配置ID（商品道具配置ID：配置ID）
 * @param sellCurrencyDictionary 出售货币字典（出售货币字典：字典）
 * @param affiliatedTabID 1装备、2消耗品、3材料、4贵重物品（所属页签序号：整数）
 * @param sortPriority 排序优先级（排序优先级：整数）
 * @param canBeSold 是否可出售（是否可出售：布尔值）
 */
export declare function addNewItemToInventoryShopSalesList<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemConfigID: ConfigId, sellCurrencyDictionary: Dict<K, V>, affiliatedTabID: int, sortPriority: int, canBeSold: bool): void;

/**
 * 【向物品收购表中新增物品】 Add Items to the Purchase List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 向物品收购表中新增物品
 *
 * @en Add New Items to the Item Purchase List
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemConfigID 商品道具配置ID（商品道具配置ID：配置ID）
 * @param purchaseCurrencyDictionary 收购货币字典（收购货币字典：字典）
 * @param purchasable 是否可收购（是否可收购：布尔值）
 */
export declare function addItemsToThePurchaseList<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(shopOwnerEntity: Entity, shopID: int, shopItemConfigID: ConfigId, purchaseCurrencyDictionary: Dict<K, V>, purchasable: bool): void;

/**
 * 【从自定义商店出售表中移除商品】 Remove Item From Custom Shop Sales List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 从自定义商店出售表中移除商品
 *
 * @en Remove items from the custom shop's sales list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemID 商品序号（商品序号：整数）
 */
export declare function removeItemFromCustomShopSalesList(shopOwnerEntity: Entity, shopID: int, shopItemID: int): void;

/**
 * 【从背包商店出售表中移除商品】 Remove Item From Inventory Shop Sales List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 从背包商店出售表中移除商品
 *
 * @en Remove items from the inventory shop's sales list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 */
export declare function removeItemFromInventoryShopSalesList(shopOwnerEntity: Entity, shopID: int, itemConfigID: ConfigId): void;

/**
 * 【从物品收购表中移除物品】 Remove Item From Purchase List
 * 分类：执行节点 / 三十七、商店（XXXVII. Shop）
 *
 * 从物品收购表中移除物品
 *
 * @en Remove items from the purchase list
 * @param shopOwnerEntity 商店归属者实体（商店归属者实体：实体）
 * @param shopID 商店归属者实体的商店组件对应的商店序号（商店序号：整数）
 * @param shopItemConfigID 商品道具配置ID（商品道具配置ID：配置ID）
 */
export declare function removeItemFromPurchaseList(shopOwnerEntity: Entity, shopID: int, shopItemConfigID: ConfigId): void;
