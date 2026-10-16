// 自动生成：事件节点 / 一、自定义变量（I. Custom Variables）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【自定义变量变化时】事件的出参 / Output parameters of "When Custom Variable Changes"
 */
export interface CustomVariableChangesEvent<T extends NodeValue = NodeValue> {
  /**
   * 与节点图关联的实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 与节点图关联的实体的GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 发生变化的变量的名称（变量名：字符串）
   */
  readonly variableName: str;
  /**
   * 变量变化前的值（变化前值：泛型）
   */
  readonly preChangeValue: T;
  /**
   * 变量变化后的值（变化后值：泛型）
   */
  readonly postChangeValue: T;
}
/**
 * 【自定义变量变化时】 When Custom Variable Changes
 * 分类：事件节点 / 一、自定义变量（I. Custom Variables）
 *
 * 当前节点图所关联实体的自定义变量发生变化时，触发该事件
 * 注意变化前值和变化后值为泛型，需确定其泛型类型后，才能正确接收到对应类型自定义变量的事件
 * 容器类型的自定义变量没有变化前值和变化后值出参
 *
 * @en This event is triggered when the Custom Variable of the Entity associated with the current Node Graph changes
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onCustomVariableChanges<T extends NodeValue = NodeValue>(handler: (ev: CustomVariableChangesEvent<T>) => void): void;

/**
 * 【节点图变量变化时】事件的出参 / Output parameters of "When Node Graph Variable Changes"
 */
export interface NodeGraphVariableChangesEvent<T extends NodeValue = NodeValue> {
  /**
   * 与节点图关联的实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 与节点图关联的实体的GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 发生变化的变量的名称（变量名：字符串）
   */
  readonly variableName: str;
  /**
   * 变量变化前的值（变化前值：泛型）
   */
  readonly preChangeValue: T;
  /**
   * 变量变化后的值（变化后值：泛型）
   */
  readonly postChangeValue: T;
}
/**
 * 【节点图变量变化时】 When Node Graph Variable Changes
 * 分类：事件节点 / 一、自定义变量（I. Custom Variables）
 *
 * 当前节点图的节点图变量发生变化时，触发该事件
 * 注意变化前值和变化后值为泛型，需确定其泛型类型后，才能正确接收到对应类型节点图变量的事件
 * 容器类型的节点图变量没有变化前值和变化后值出参
 *
 * @en This event is triggered when a Node Graph Variable in the current Node Graph changes
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onNodeGraphVariableChanges<T extends NodeValue = NodeValue>(handler: (ev: NodeGraphVariableChangesEvent<T>) => void): void;
