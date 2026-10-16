// 自动生成：事件节点 / 二十三、装备（XXIII. Equipment）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【装备的词条数值改变时】事件的出参 / Output parameters of "When Equipment Affix Value Changes"
 */
export interface EquipmentAffixValueChangesEvent {
  /**
   * 装备持有者（装备持有者：实体）
   */
  readonly equipmentOwner: Entity;
  /**
   * 装备持有者GUID（装备持有者GUID：GUID）
   */
  readonly equipmentOwnerGUID: GUID;
  /**
   * 装备索引（装备索引：整数）
   */
  readonly equipmentIndex: int;
  /**
   * 该词条在装备词条上的对应序号（词条序号：整数）
   */
  readonly affixID: int;
  /**
   * 改变前数值（改变前数值：浮点数）
   */
  readonly preChangeValue: float;
  /**
   * 改变后数值（改变后数值：浮点数）
   */
  readonly postChangeValue: float;
}
/**
 * 【装备的词条数值改变时】 When Equipment Affix Value Changes
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 装备词条数值改变时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * @en This event is triggered when Equipment Affix values change. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentAffixValueChanges(handler: (ev: EquipmentAffixValueChangesEvent) => void): void;

/**
 * 【装备初始化时】事件的出参 / Output parameters of "When Equipment Is Initialized"
 */
export interface EquipmentIsInitializedEvent {
  /**
   * 装备持有者（装备持有者：实体）
   */
  readonly equipmentOwner: Entity;
  /**
   * 装备持有者GUID（装备持有者GUID：GUID）
   */
  readonly equipmentOwnerGUID: GUID;
  /**
   * 装备索引（装备索引：整数）
   */
  readonly equipmentIndex: int;
}
/**
 * 【装备初始化时】 When Equipment Is Initialized
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 当装备首次被获取进入背包时，会进行初始化，此时事件出参会返回装备实例的唯一索引，通过此索引即可对装备进行动态修改。装备的持有者可以收到该事件，需要配置在道具节点图里
 *
 * @en When Equipment is first obtained and enters the Inventory, it is initialized. The event's output parameters return the unique ID of the Equipment instance. Use this ID to edit the Equipment dynamically. The Owner of the Equipment will receive this event. Configure this in the Item Node Graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentIsInitialized(handler: (ev: EquipmentIsInitializedEvent) => void): void;

/**
 * 【装备被穿戴时】事件的出参 / Output parameters of "When Equipment Is Equipped"
 */
export interface EquipmentIsEquippedEvent {
  /**
   * 装备持有者实体（装备持有者实体：实体）
   */
  readonly equipmentHolderEntity: Entity;
  /**
   * 装备持有者GUID（装备持有者GUID：GUID）
   */
  readonly equipmentHolderGUID: GUID;
  /**
   * 装备索引（装备索引：整数）
   */
  readonly equipmentIndex: int;
}
/**
 * 【装备被穿戴时】 When Equipment Is Equipped
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 装备被穿戴时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * @en This event is triggered when Equipment is equipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentIsEquipped(handler: (ev: EquipmentIsEquippedEvent) => void): void;

/**
 * 【装备被卸下时】事件的出参 / Output parameters of "When Equipment Is Unequipped"
 */
export interface EquipmentIsUnequippedEvent {
  /**
   * 装备持有者实体（装备持有者实体：实体）
   */
  readonly equipmentOwnerEntity: Entity;
  /**
   * 装备持有者GUID（装备持有者GUID：GUID）
   */
  readonly equipmentOwnerGUID: GUID;
  /**
   * 装备索引（装备索引：整数）
   */
  readonly equipmentIndex: int;
}
/**
 * 【装备被卸下时】 When Equipment Is Unequipped
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 装备被卸下时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * @en This event is triggered when Equipment is unequipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentIsUnequipped(handler: (ev: EquipmentIsUnequippedEvent) => void): void;

/**
 * 【装备买入时】事件的出参 / Output parameters of "When Equipment is purchased"
 */
export interface EquipmentIsPurchasedEvent {
  /**
   * 买入的背包持有者实体（买入的背包持有者实体：实体）
   */
  readonly purchasingInventoryOwnerEntity: Entity;
  /**
   * 买入的背包持有者GUID（买入的背包持有者GUID：GUID）
   */
  readonly purchasingInventoryOwnerGUID: GUID;
  /**
   * 被买入的装备的索引组成的列表（装备索引列表：整数列表）
   */
  readonly equipmentIndexList: int[];
}
/**
 * 【装备买入时】 When Equipment is purchased
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 当背包持有者实体买入装备时，会收到该事件
 * 仅有背包商店中的物品交换会触发该节点，自定义商店不会触发。被购买的装备绑定的道具节点图也可以收到这个事件
 *
 * @en The Inventory Owner Entity receives this event when it purchases equipment
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentIsPurchased(handler: (ev: EquipmentIsPurchasedEvent) => void): void;

/**
 * 【装备卖出时】事件的出参 / Output parameters of "When Equipment is sold"
 */
export interface EquipmentIsSoldEvent {
  /**
   * 卖出的背包持有者实体（卖出的背包持有者实体：实体）
   */
  readonly purchasingInventoryOwnerEntity: Entity;
  /**
   * 卖出的背包持有者GUID（卖出的背包持有者GUID：GUID）
   */
  readonly purchasingInventoryOwnerGUID: GUID;
  /**
   * 被卖出的装备的索引组成的列表（装备索引列表：整数列表）
   */
  readonly equipmentIndexList: int[];
}
/**
 * 【装备卖出时】 When Equipment is sold
 * 分类：事件节点 / 二十三、装备（XXIII. Equipment）
 *
 * 当背包持有者实体卖出装备时，会收到该事件
 * 仅有背包商店中的物品交换会触发该节点，自定义商店不会触发。被卖出的装备绑定的道具节点图也可以收到这个事件
 *
 * @en The Inventory Owner Entity receives this event when it sells equipment
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onEquipmentIsSold(handler: (ev: EquipmentIsSoldEvent) => void): void;
