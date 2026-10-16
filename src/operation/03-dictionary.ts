// 自动生成：运算节点 / 三、字典（III. Dictionary）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhnd4l069tk0
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【拼装字典】 Assembly Dictionary
 * 分类：运算节点 / 三、字典（III. Dictionary）
 *
 * 将至多50个键值对拼合为一个字典
 *
 * @en Combines up to 50 Key-Value Pairs into one Dictionary
 * @param key049 键0~49（键0~49：泛型）
 * @param value049 值0~49（值0~49：泛型）
 * @returns 字典（字典：泛型）
 */
export function assemblyDictionary<K extends DictKey, V extends NodeValue>(...pairs: [key: K, value: V][]): Dict<K, V> {
  return new Map(pairs); // 至多50个键值对
}

/**
 * 【建立字典】 Create Dictionary
 * 分类：运算节点 / 三、字典（III. Dictionary）
 *
 * 根据输入的键和值列表的顺序依次建立键值对。
 * 此节点会按照键和值列表中较短的一个进行字典创建，多余的部分会被截断
 * 如果键列表中存在重复值，则会创建失败，返回空字典
 *
 * @en Creates Key-Value Pairs sequentially from the input key and value lists
 * @param keyList 键列表（键列表：泛型）
 * @param valueList 值列表（值列表：泛型）
 * @returns 字典（字典：泛型）
 */
export function createDictionary<K extends DictKey = DictKey, V extends NodeValue = NodeValue>(keyList: K[], valueList: V[]): Dict<K, V> {
  const m = new Map<K, V>();
  keyList.forEach((k, i) => m.set(k, valueList[i]));
  return m;
}
