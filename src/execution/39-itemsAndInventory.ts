// 自动生成：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【增加背包最大容量】 Increase Maximum Inventory Capacity
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 增加指定背包持有者的背包最大容量
 *
 * @en Increase the maximum Inventory capacity of the specified Inventory Owner
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param increaseCapacity 增加容量（增加容量：整数）
 */
export declare function increaseMaximumInventoryCapacity(inventoryOwnerEntity: Entity, increaseCapacity: int): void;

/**
 * 【增加背包道具数量】 Increase Inventory Item Quantity
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 修改背包内指定道具的数量，会在当前值上加上增加值，增加值可以为负数
 *
 * @en Modifying the quantity of a specified item in your inventory will add an increase to the current value; the increase can be a negative number.
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @param increaseValue 变更后的值=变更前的值+增加值（增加值：整数）
 */
export declare function increaseInventoryItemQuantity(inventoryOwnerEntity: Entity, itemConfigID: ConfigId, increaseValue: int): void;

/**
 * 【设置背包掉落道具/货币数量】 Set Inventory Drop Items/Currency Amount
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 设置背包掉落道具/货币的类型和数量
 *
 * @en Set the type and quantity of Items or Currency for the Inventory drop
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param itemCurrencyConfigID 道具/货币配置ID（道具/货币配置ID：配置ID）
 * @param quantityDropped 掉落数量（掉落数量：整数）
 * @param lootType 分为全员一份、每人一份（掉落类型：枚举）
 */
export declare function setInventoryDropItemsCurrencyAmount(inventoryOwnerEntity: Entity, itemCurrencyConfigID: ConfigId, quantityDropped: int, lootType: E.LootType): void;

/**
 * 【增加背包货币数量】 Increase Inventory Currency Quantity
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 修改背包内指定货币的数量，会在当前值上加上增加值，增加值可以为负数
 *
 * @en Modify the amount of a specified currency in the player's inventory. This will add the specified increase value to the current amount, and the increase value can be negative.
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param currencyConfigID 货币配置ID（货币配置ID：配置ID）
 * @param increaseValue 变更后的值=变更前的值+增加值（增加值：整数）
 */
export declare function increaseInventoryCurrencyQuantity(inventoryOwnerEntity: Entity, currencyConfigID: ConfigId, increaseValue: int): void;

/**
 * 【设置背包道具掉落内容】 Set Inventory Item Drop Contents
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 以字典形式设置背包道具掉落内容，并可以设置掉落类型
 *
 * @en Configure the Inventory Item drop data in Dictionary format, and specify the Drop Type
 * @param inventoryOwnerEntity 背包持有者实体（背包持有者实体：实体）
 * @param itemDropDictionary 道具掉落字典（道具掉落字典：字典）
 * @param lootType 分为全员一份、每人一份（掉落类型：枚举）
 */
export declare function setInventoryItemDropContents<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(inventoryOwnerEntity: Entity, itemDropDictionary: Dict<K, V>, lootType: E.LootType): void;

/**
 * 【触发战利品掉落】 Trigger Loot Drop
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 对掉落者实体触发一次战利品掉落，可设置其掉落类型
 *
 * @en Triggers a loot drop for the dropper entity, with configurable loot type.
 * @param dropperEntity 掉落者实体（掉落者实体：实体）
 * @param lootType 分为全员一份、每人一份（掉落类型：枚举）
 */
export declare function triggerLootDrop(dropperEntity: Entity, lootType: E.LootType): void;

/**
 * 【设置战利品掉落内容】 Set Loot Drop Content
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 以字典形式设置掉落者实体上战利品组件中战利品的掉落内容
 *
 * @en Configure the Loot drop data in the Loot Component on the Dropper Entity in Dictionary format
 * @param dropperEntity 掉落者实体（掉落者实体：实体）
 * @param lootDropDictionary 战利品掉落字典（战利品掉落字典：字典）
 */
export declare function setLootDropContent<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dropperEntity: Entity, lootDropDictionary: Dict<K, V>): void;

/**
 * 【增加掉落物组件道具数量】 Increase Loot Component Item Quantity
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 修改掉落物元件上掉落物组件内指定道具的数量，会在当前值上加上增加值，增加值可以为负数
 *
 * @en Modify the quantity of a specified item in the drop component of a loot prefab. This will add the specified increase value to the current quantity, and the increase value can be negative.
 * @param lootEntity 掉落物实体（掉落物实体：实体）
 * @param itemConfigID 道具配置ID（道具配置ID：配置ID）
 * @param increaseValue 变更后的值=变更前的值+增加值（增加值：整数）
 */
export declare function increaseLootComponentItemQuantity(lootEntity: Entity, itemConfigID: ConfigId, increaseValue: int): void;

/**
 * 【增加掉落物组件货币数量】 Increase Loot Component Currency Quantity
 * 分类：执行节点 / 三十九、道具与背包（XXXIX. Items and Inventory）
 *
 * 修改掉落物元件上掉落物组件内指定货币的数量，会在当前值上加上增加值，增加值可以为负数
 *
 * @en Modify the amount of a specified currency in the drop component of a loot prefab. This will add the specified increase value to the current amount, and the increase value can be negative.
 * @param lootEntity 掉落物实体（掉落物实体：实体）
 * @param currencyConfigID 货币配置ID（货币配置ID：配置ID）
 * @param increaseValue 变更后的值=变更前的值+增加值（增加值：整数）
 */
export declare function increaseLootComponentCurrencyQuantity(lootEntity: Entity, currencyConfigID: ConfigId, increaseValue: int): void;
