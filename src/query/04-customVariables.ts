// 自动生成：查询节点 / 四、自定义变量（IV. Custom Variables）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取自定义变量】 Get Custom Variable
 * 分类：查询节点 / 四、自定义变量（IV. Custom Variables）
 *
 * 获取目标实体的指定自定义变量的值
 * 如果变量不存在，则返回类型的默认值
 *
 * @en Returns the value of the specified Custom Variable from the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 目标实体（目标实体：实体）
 * @param variableName 变量名（变量名：字符串）
 * @returns 变量值（变量值：泛型）
 */
export declare function getCustomVariable<T extends NodeValue = NodeValue>(targetEntity: Entity, variableName: str): T;

/**
 * 【获取节点图变量】 Get Node Graph Variable
 * 分类：查询节点 / 四、自定义变量（IV. Custom Variables）
 *
 * 获取当前节点图的指定节点图变量的值
 * 如果变量不存在，则返回类型的默认值
 *
 * @en Returns the value of the specified Node Graph Variable from the current Node Graph
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param variableName 变量名（变量名：字符串）
 * @returns 变量值（变量值：泛型）
 */
export declare function getNodeGraphVariable<T extends NodeValue = NodeValue>(variableName: str): T;

/**
 * 【查询自定义变量快照】 Query Custom Variable Snapshot
 * 分类：查询节点 / 四、自定义变量（IV. Custom Variables）
 *
 * 从自定义变量组件快照中，查询指定变量名的值
 * 仅可用于【实体销毁时】事件
 *
 * @en Searches the value of the specified Variable Name from the Custom Variable Component snapshot
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param customVariableComponentSnapshot 自定义变量组件快照（自定义变量组件快照：自定义变量快照）
 * @param variableName 变量名（变量名：字符串）
 * @returns 变量值（变量值：泛型）
 */
export declare function queryCustomVariableSnapshot<T extends NodeValue = NodeValue>(customVariableComponentSnapshot: CustomVariableSnapshot, variableName: str): T;
