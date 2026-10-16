// 自动生成：查询节点 / 二十二、字典（XXII. Dictionary）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【以键查询字典值】 Query Dictionary Value by Key
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 根据键查询字典中对应的值，如果键不存在，则返回类型默认值
 *
 * @en Searches the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value
 * @param dictionary 字典（字典：泛型）
 * @param key 键（键：泛型）
 * @returns 值（值：泛型）
 */
export declare function queryDictionaryValueByKey<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, key: K): V;

/**
 * 【查询字典是否包含特定键】 Query If Dictionary Contains Specific Key
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 查询指定字典是否包含特定的键
 *
 * @en Searches whether the specified Dictionary contains the specified Key
 * @param dictionary 字典（字典：泛型）
 * @param key 键（键：泛型）
 * @returns 是否包含（是否包含：布尔值）
 */
export function queryIfDictionaryContainsSpecificKey<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, key: K): bool {
  return dictionary.has(key);
}

/**
 * 【查询字典是否包含特定值】 Query If Dictionary Contains Specific Value
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 查询指定字典是否包含特定的值
 *
 * @en Searches whether the specified Dictionary contains the specified Value
 * @param dictionary 字典（字典：泛型）
 * @param value 值（值：泛型）
 * @returns 是否包含（是否包含：布尔值）
 */
export function queryIfDictionaryContainsSpecificValue<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>, value: V): bool {
  return [...dictionary.values()].includes(value);
}

/**
 * 【获取字典中键组成的列表】 Get List of Keys from Dictionary
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 获取字典中所有键组成的列表。由于字典中键值对是无序排列的，所以取出的键列表也不一定按照其插入顺序排列
 *
 * @en Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order
 * @param dictionary 字典（字典：泛型）
 * @returns 键列表（键列表：泛型）
 */
export function getListOfKeysFromDictionary<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>): K[] {
  return [...dictionary.keys()];
}

/**
 * 【获取字典中值组成的列表】 Get List of Values from Dictionary
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 获取字典中所有值组成的列表。由于字典中键值对是无序排列的，所以取出的值列表也不一定按照其插入顺序排列
 *
 * @en Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order
 * @param dictionary 字典（字典：泛型）
 * @returns 值列表（值列表：泛型）
 */
export function getListOfValuesFromDictionary<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>): V[] {
  return [...dictionary.values()];
}

/**
 * 【查询字典长度】 Query Dictionary's Length
 * 分类：查询节点 / 二十二、字典（XXII. Dictionary）
 *
 * 查询字典中键值对的数量
 *
 * @en Searches the number of Key-Value Pairs in the Dictionary
 * @param dictionary 字典（字典：泛型）
 * @returns 长度（长度：整数）
 */
export function queryDictionarysLength<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(dictionary: Dict<K, V>): int {
  return dictionary.size;
}
