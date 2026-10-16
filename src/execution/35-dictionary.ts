// 自动生成：执行节点 / 三十五、字典（XXXV. Dictionary）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【以键对字典移除键值对】 Remove Key Value Pairs from Dictionary by Key
 * 分类：执行节点 / 三十五、字典（XXXV. Dictionary）
 *
 * 以键移除指定字典中的键值对
 *
 * @en Remove Key-Value Pairs from the specified Dictionary by key
 * @param dictionary 字典（字典：泛型）
 * @param key 键（键：泛型）
 */
export declare function removeKeyValuePairsFromDictionaryByKey<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, key: K): void;

/**
 * 【清空字典】 Clear Dictionary
 * 分类：执行节点 / 三十五、字典（XXXV. Dictionary）
 *
 * 清空指定字典的键值对
 *
 * @en Clear all Key-Value Pairs from the specified Dictionary
 * @param dictionary 字典（字典：泛型）
 */
export declare function clearDictionary<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>): void;

/**
 * 【对字典设置或新增键值对】 Set or Add Key Value Pairs to Dictionary
 * 分类：执行节点 / 三十五、字典（XXXV. Dictionary）
 *
 * 为指定字典新增一个键值对
 *
 * @en Add a Key-Value Pair to the specified Dictionary
 * @param dictionary 字典（字典：泛型）
 * @param key 键（键：泛型）
 * @param value 值（值：泛型）
 */
export declare function setOrAddKeyValuePairsToDictionary<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, key: K, value: V): void;

/**
 * 【对字典按键排序】的多个出参 / Outputs of "Sort Dictionary by Key"
 */
export interface SortDictionaryByKeyResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 键列表（键列表：泛型）
   */
  readonly keyList: K[];
  /**
   * 值列表（值列表：泛型）
   */
  readonly valueList: V[];
}
/**
 * 【对字典按键排序】 Sort Dictionary by Key
 * 分类：执行节点 / 三十五、字典（XXXV. Dictionary）
 *
 * 将指定字典按键进行顺序或逆序排序后输出
 *
 * @en Sort and output the specified Dictionary by keys in ascending or descending order
 * @param dictionary 字典（字典：泛型）
 * @param sortBy 排序方式（排序方式：枚举）
 * @returns SortDictionaryByKeyResult（多出参，见接口字段）
 */
export declare function sortDictionaryByKey<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, sortBy: E.SortOrder): SortDictionaryByKeyResult<K, V>;

/**
 * 【对字典按值排序】的多个出参 / Outputs of "Sort Dictionary by Value"
 */
export interface SortDictionaryByValueResult<K extends DictKey = DictKey, V extends NodeValue = NodeValue> {
  /**
   * 键列表（键列表：泛型）
   */
  readonly keyList: K[];
  /**
   * 值列表（值列表：泛型）
   */
  readonly valueList: V[];
}
/**
 * 【对字典按值排序】 Sort Dictionary by Value
 * 分类：执行节点 / 三十五、字典（XXXV. Dictionary）
 *
 * 将指定字典按值进行顺序或逆序排序后输出
 *
 * @en Sort and output the specified Dictionary by values in ascending or descending order
 * @param dictionary 字典（字典：泛型）
 * @param sortBy 排序方式（排序方式：枚举）
 * @returns SortDictionaryByValueResult（多出参，见接口字段）
 */
export declare function sortDictionaryByValue<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, sortBy: E.SortOrder): SortDictionaryByValueResult<K, V>;
