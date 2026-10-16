// 自动生成：事件节点 / 二十四、道具（XXIV. Items）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【背包道具新增时】事件的出参 / Output parameters of "When Item Is Added to Inventory"
 */
export interface ItemIsAddedToInventoryEvent {
  /**
   * 道具持有者实体（道具持有者实体：实体）
   */
  readonly itemOwnerEntity: Entity;
  /**
   * 道具持有者GUID（道具持有者GUID：GUID）
   */
  readonly itemOwnerGUID: GUID;
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 获得数量（获得数量：整数）
   */
  readonly quantityObtained: int;
}
/**
 * 【背包道具新增时】 When Item Is Added to Inventory
 * 分类：事件节点 / 二十四、道具（XXIV. Items）
 *
 * 背包内新增该道具时触发事件，该道具关联的道具节点图会接收到。如果没有新增道具仅有数量变化则不会触发该事件
 *
 * @en This event is triggered when a new Item is added to the Inventory. The Owner of the Inventory Component will receive it. This event is not triggered by quantity-only changes
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onItemIsAddedToInventory(handler: (ev: ItemIsAddedToInventoryEvent) => void): void;

/**
 * 【背包道具失去时】事件的出参 / Output parameters of "When Item Is Lost From Inventory"
 */
export interface ItemIsLostFromInventoryEvent {
  /**
   * 道具持有者实体（道具持有者实体：实体）
   */
  readonly itemOwnerEntity: Entity;
  /**
   * 道具持有者GUID（道具持有者GUID：GUID）
   */
  readonly itemOwnerGUID: GUID;
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 失去数量（失去数量：整数）
   */
  readonly quantityLost: int;
}
/**
 * 【背包道具失去时】 When Item Is Lost From Inventory
 * 分类：事件节点 / 二十四、道具（XXIV. Items）
 *
 * 背包内该道具失去，即背包内该道具数量为0时触发该事件，该道具关联的道具节点图会接收到
 *
 * @en This event is triggered when an Item is removed from the Inventory (its quantity becomes 0). The Owner of the Inventory Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onItemIsLostFromInventory(handler: (ev: ItemIsLostFromInventoryEvent) => void): void;

/**
 * 【背包道具数量变化时】事件的出参 / Output parameters of "When the Quantity of Inventory Item Changes"
 */
export interface QuantityOfInventoryItemChangesEvent {
  /**
   * 道具持有者实体（道具持有者实体：实体）
   */
  readonly itemOwnerEntity: Entity;
  /**
   * 道具持有者GUID（道具持有者GUID：GUID）
   */
  readonly itemOwnerGUID: GUID;
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 变化前数量（变化前数量：整数）
   */
  readonly preChangeQuantity: int;
  /**
   * 变化后数量（变化后数量：整数）
   */
  readonly postChangeQuantity: int;
  /**
   * 变化原因（变化原因：枚举）
   */
  readonly reasonForChange: E.InventoryItemChangeReason;
}
/**
 * 【背包道具数量变化时】 When the Quantity of Inventory Item Changes
 * 分类：事件节点 / 二十四、道具（XXIV. Items）
 *
 * 背包道具数量发生变化时触发该事件，该道具关联的道具节点图会接收到
 *
 * @en This event is triggered when the quantity of Items in the Inventory changes. The Owner of the Inventory Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onQuantityOfInventoryItemChanges(handler: (ev: QuantityOfInventoryItemChangesEvent) => void): void;

/**
 * 【背包货币数量变化时】事件的出参 / Output parameters of "When the Quantity of Inventory Currency Changes"
 */
export interface QuantityOfInventoryCurrencyChangesEvent {
  /**
   * 货币持有者实体（货币持有者实体：实体）
   */
  readonly currencyOwnerEntity: Entity;
  /**
   * 货币持有者GUID（货币持有者GUID：GUID）
   */
  readonly currencyOwnerGUID: GUID;
  /**
   * 货币配置ID（货币配置ID：配置ID）
   */
  readonly currencyConfigID: ConfigId;
  /**
   * 货币变化值（货币变化值：整数）
   */
  readonly currencyChangeValue: int;
}
/**
 * 【背包货币数量变化时】 When the Quantity of Inventory Currency Changes
 * 分类：事件节点 / 二十四、道具（XXIV. Items）
 *
 * 背包货币数量变化时触发该事件，背包组件的持有者可以收到
 *
 * @en This event is triggered when the amount of Inventory Currency changes. The Owner of the Inventory Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onQuantityOfInventoryCurrencyChanges(handler: (ev: QuantityOfInventoryCurrencyChangesEvent) => void): void;

/**
 * 【背包内道具被使用时】事件的出参 / Output parameters of "When Items in the Inventory Are Used"
 */
export interface ItemsInTheInventoryAreUsedEvent {
  /**
   * 道具持有者实体（道具持有者实体：实体）
   */
  readonly itemOwnerEntity: Entity;
  /**
   * 道具持有者GUID（道具持有者GUID：GUID）
   */
  readonly itemOwnerGUID: GUID;
  /**
   * 道具配置ID（道具配置ID：配置ID）
   */
  readonly itemConfigID: ConfigId;
  /**
   * 使用数量（使用数量：整数）
   */
  readonly amountToUse: int;
}
/**
 * 【背包内道具被使用时】 When Items in the Inventory Are Used
 * 分类：事件节点 / 二十四、道具（XXIV. Items）
 *
 * 背包内道具被使用时触发该事件，该道具关联的道具节点图会接收到
 *
 * @en This event is triggered when an Item in the Inventory is used. The Owner of the Inventory Component will receive it
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onItemsInTheInventoryAreUsed(handler: (ev: ItemsInTheInventoryAreUsedEvent) => void): void;
