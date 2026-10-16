// 自动生成：执行节点 / 二、列表相关（II. List Operations）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【拼接列表】 Concatenate List
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 将接入列表拼接在目标列表后。例如：目标列表为[1,2,3]，接入的列表为[4,5]，在执行该节点后，目标列表会变为[1,2,3,4,5]
 *
 * @en Append the input List to the end of the Target List. For example, Target List [1, 2, 3] with input [4, 5] becomes [1, 2, 3, 4, 5] after execution
 * @param targetList 被接入的列表（目标列表：泛型）
 * @param inputList 接入的列表会接在目标列表的尾部（接入的列表：泛型）
 */
export declare function concatenateList<T extends NodeValue = NodeValue>(targetList: T[], inputList: T[]): void;

/**
 * 【清除列表】 Clear List
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 清空指定列表
 *
 * @en Clear the specified List
 * @param list 所要清除的列表（列表：泛型）
 */
export declare function clearList<T extends NodeValue = NodeValue>(list: T[]): void;

/**
 * 【对列表插入值】 Insert Value Into List
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 向指定列表的指定序号位置插入值。被插入的值在插入后会出现在列表的插入序号位置
 * 例如：向列表[1，2，3，4]的序号2插入值5，插入后的列表为[1，2，5，3，4]（5出现在序号2的位置）
 *
 * @en Insert a value at the specified ID Location in the specified List. The inserted value appears at that ID after insertion
 * @param list 被插入的列表引用（列表：泛型）
 * @param insertID 插入值在插入后所在的序号（插入序号：整数）
 * @param insertValue 被插入的值（插入值：泛型）
 */
export declare function insertValueIntoList<T extends NodeValue = NodeValue>(list: T[], insertID: int, insertValue: T): void;

/**
 * 【对列表移除值】 Remove Value From List
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 移除指定列表的指定序号位置的值。这会导致该序号后的所有值向前移动一位
 *
 * @en Remove the value at the specified ID Location from the specified List. All subsequent values shift forward by one position
 * @param list 被移除值的列表引用（列表：泛型）
 * @param removeID 需要移除的序号（移除序号：整数）
 */
export declare function removeValueFromList<T extends NodeValue = NodeValue>(list: T[], removeID: int): void;

/**
 * 【对列表设置值】 Set List Value
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 设置指定列表的指定序号位置的值
 *
 * @en Sets the value at a specified index position in a specified list.
 * @param list 被修改的列表引用（列表：泛型）
 * @param id 修改的值的序号（序号：整数）
 * @param value 修改的值（值：泛型）
 */
export declare function setListValue<T extends NodeValue = NodeValue>(list: T[], id: int, value: T): void;

/**
 * 【列表排序】 List Sorting
 * 分类：执行节点 / 二、列表相关（II. List Operations）
 *
 * 将指定列表按照排序方式进行排序
 *
 * @en Sort the specified List according to the chosen sort method
 * @param list 整数列表或浮点数列表（列表：泛型）
 * @param sortBy 顺序（从小到大）或逆序（从大到小）排序（排序方式：枚举）
 */
export declare function listSorting<T extends NodeValue = NodeValue>(list: T[], sortBy: E.SortOrder): void;
