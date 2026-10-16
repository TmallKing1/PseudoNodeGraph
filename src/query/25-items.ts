// 自动生成：查询节点 / 二十五、道具（XXV. Items）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取背包容量】 Get Inventory Capacity
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包容量
 *
 * @en Get Inventory Capacity
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @returns 背包容量（背包容量：整数）
 */
export declare function getInventoryCapacity(inventoryOwnerEntity: Entity): int;

/**
 * 【获取背包道具数量】 Get Inventory Item Quantity
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包内特定配置ID的道具数量
 *
 * @en Returns the quantity of the Item with the specified Config ID in the Inventory
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @returns 道具数量（道具数量：整数）
 */
export declare function getInventoryItemQuantity(inventoryOwnerEntity: Entity, itemConfigID: ConfigId): int;

/**
 * 【获取背包货币数量】 Get Inventory Currency Quantity
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包内特定配置ID的货币数量
 *
 * @en Returns the amount of Currency with the specified Config ID in the Inventory
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param currencyConfigID 货币配置ID（货币配置ID：配置ID）
 * @returns 资源数量（资源数量：整数）
 */
export declare function getInventoryCurrencyQuantity(inventoryOwnerEntity: Entity, currencyConfigID: ConfigId): int;

/**
 * 【获取背包所有基础道具】 Get all basic items from Inventory
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包所有基础道具，包括道具类型和对应的数量
 *
 * @en Returns all Basic Items in the Inventory, including Item types and their quantities
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @returns 基础道具字典（基础道具字典：字典）
 */
export declare function getAllBasicItemsFromInventory<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(inventoryOwnerEntity: Entity): Dict<K, V>;

/**
 * 【获取背包所有货币】 Get All Currency From Inventory
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包所有货币，包括货币类型和对应的数量
 *
 * @en Returns all Currencies in the Inventory, including types and corresponding amounts
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @returns 货币字典（货币字典：字典）
 */
export declare function getAllCurrencyFromInventory<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(inventoryOwnerEntity: Entity): Dict<K, V>;

/**
 * 【获取背包所有装备】 Get all equipment from Inventory
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取背包所有装备，出参为所有装备索引组成的列表
 *
 * @en Returns all Equipment in the Inventory; the output parameter is a list of all Equipment IDs
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @returns 装备索引列表（装备索引列表：整数列表）
 */
export declare function getAllEquipmentFromInventory(inventoryOwnerEntity: Entity): int[];

/**
 * 【获取掉落物组件道具数量】 Get Loot Component Item Quantity
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取掉落物元件上掉落物组件中特定配置ID的道具数量
 *
 * @en Returns the quantity of Items with the specified Config ID from the Loot Component on the Loot Prefab
 * @param lootEntity 掉落物实体（掉落物实体：实体）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @returns 道具数量（道具数量：整数）
 */
export declare function getLootComponentItemQuantity(lootEntity: Entity, itemConfigID: ConfigId): int;

/**
 * 【获取掉落物组件货币数量】 Get Loot Component Currency Quantity
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取掉落物元件上掉落物组件中特定配置ID的货币数量
 *
 * @en Returns the amount of Currency with the specified Config ID from the Loot Component on the Loot Prefab
 * @param lootEntity 掉落物实体（掉落物实体：实体）
 * @param currencyConfigID 货币配置ID（货币配置ID：配置ID）
 * @returns 货币数量（货币数量：整数）
 */
export declare function getLootComponentCurrencyQuantity(lootEntity: Entity, currencyConfigID: ConfigId): int;

/**
 * 【获取掉落物组件所有道具】 Get All Items from Loot Component
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取掉落物元件上掉落物组件中的所有道具
 *
 * @en Returns all Items from the Loot Component on the Loot Prefab
 * @param dropperEntity 掉落者实体（掉落者实体：实体）
 * @returns 道具字典（道具字典：字典）
 */
export declare function getAllItemsFromLootComponent<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dropperEntity: Entity): Dict<K, V>;

/**
 * 【获取掉落物组件所有货币】 Get All Currency from Loot Component
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取掉落物元件上掉落物组件中的所有货币
 *
 * @en Returns all Currencies from the Loot Component on the Loot Prefab
 * @param dropperEntity 掉落者实体（掉落者实体：实体）
 * @returns 货币字典（货币字典：字典）
 */
export declare function getAllCurrencyFromLootComponent<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dropperEntity: Entity): Dict<K, V>;

/**
 * 【获取掉落物组件所有装备】 Get All Equipment from Loot Component
 * 分类：查询节点 / 二十五、道具（XXV. Items）
 *
 * 获取掉落物元件上掉落物组件中的所有装备
 *
 * @en Returns all Equipment from the Loot Component on the Loot Prefab
 * @param lootEntity 掉落物实体（掉落物实体：实体）
 * @returns 装备索引列表（装备索引列表：整数列表）
 */
export declare function getAllEquipmentFromLootComponent(lootEntity: Entity): int[];
