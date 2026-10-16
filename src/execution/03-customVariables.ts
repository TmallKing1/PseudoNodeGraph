// 自动生成：执行节点 / 三、自定义变量（III. Custom Variables）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置自定义变量】 Set Custom Variable
 * 分类：执行节点 / 三、自定义变量（III. Custom Variables）
 *
 * 为目标实体上的指定自定义变量设置值
 *
 * @en Set the value of the specified Custom Variable on the Target Entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 该变量挂载在该实体上（目标实体：实体）
 * @param variableName 自定义变量的命名，不可重复（变量名：字符串）
 * @param variableValue 赋予该变量的值（变量值：泛型）
 * @param triggerEvent 默认为是。选为否时，这次自定义变量修改不会触发自定义变量变化时事件（是否触发事件：布尔值）
 */
export declare function setCustomVariable<T extends NodeValue = NodeValue>(targetEntity: Entity, variableName: str, variableValue: T, triggerEvent: bool): void;

/**
 * 【设置节点图变量】 Set Node Graph Variable
 * 分类：执行节点 / 三、自定义变量（III. Custom Variables）
 *
 * 为当前节点图内的指定节点图变量设置值
 *
 * @en Set the value of the specified Node Graph Variable in the current Node Graph
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param variableName 节点图变量的命名，同节点图内不可重复（变量名：字符串）
 * @param variableValue 赋予该变量的值（变量值：泛型）
 * @param triggerEvent 默认为是。选为否时，这次节点图变量修改不会触发节点图变量变化时事件（是否触发事件：布尔值）
 */
export declare function setNodeGraphVariable<T extends NodeValue = NodeValue>(variableName: str, variableValue: T, triggerEvent: bool): void;
