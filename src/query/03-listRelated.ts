// 自动生成：查询节点 / 三、列表相关（III. List Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【列表是否包含该值】 List Includes This Value
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 返回列表中是否包含指定值
 *
 * @en Returns whether the list contains the specified value
 * @param list 列表（列表：泛型）
 * @param value 值（值：泛型）
 * @returns 是否包含（是否包含：布尔值）
 */
export function listIncludesThisValue<T extends NodeValue = NodeValue>(list: T[], value: T): bool {
  return list.includes(value);
}

/**
 * 【查找列表并返回值的序号】 Search List and Return Value ID
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 从列表中查找指定值，并返回列表中该值出现的序号列表
 * 例如：目标列表为{1,2,3,2,1}，值为1，返回的序号列表为{0，4}，即1出现在目标列表的序号0和4
 *
 * @en Find the specified value in the list and return a list of IDs where it appears
 * @param targetList 目标列表（目标列表：泛型）
 * @param value 值（值：泛型）
 * @returns 未找到则返回空列表（序号列表：整数列表）
 */
export declare function searchListAndReturnValueID<T extends NodeValue = NodeValue>(targetList: T[], value: T): int[];

/**
 * 【获取列表对应值】 Get Corresponding Value From List
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 返回列表中指定序号对应的值，序号从0开始
 *
 * @en Returns the value at the specified ID in the list (0-based)
 * @param list 列表（列表：泛型）
 * @param id 序号（序号：整数）
 * @returns 值（值：泛型）
 */
export function getCorrespondingValueFromList<T extends NodeValue = NodeValue>(list: T[], id: int): T {
  return list[id]; // 序号从0开始
}

/**
 * 【获取列表长度】 Get List Length
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 获取列表长度（列表中的元素个数）
 *
 * @en Returns the length of the list (number of elements)
 * @param list 列表（列表：泛型）
 * @returns 长度（长度：整数）
 */
export function getListLength<T extends NodeValue = NodeValue>(list: T[]): int {
  return list.length;
}

/**
 * 【获取列表最大值】 Get Maximum Value from List
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 仅对浮点数列表和整数列表有意义，返回列表中的最大值
 *
 * @en Applies only to Floating Point Number or Integer lists; returns the maximum value
 * @param list 列表（列表：泛型）
 * @returns 最大值（最大值：泛型）
 */
export function getMaximumValueFromList<T extends NodeValue = NodeValue>(list: T[]): T {
  return list.reduce((m, v) => ((v as any) > (m as any) ? v : m));
}

/**
 * 【获取列表最小值】 Get Minimum Value From List
 * 分类：查询节点 / 三、列表相关（III. List Related）
 *
 * 仅对浮点数列表和整数列表有意义，返回列表中的最小值
 *
 * @en Applies only to Floating Point Number or Integer lists; returns the minimum value
 * @param list 列表（列表：泛型）
 * @returns 最小值（最小值：泛型）
 */
export function getMinimumValueFromList<T extends NodeValue = NodeValue>(list: T[]): T {
  return list.reduce((m, v) => ((v as any) < (m as any) ? v : m));
}
