// 自动生成：执行节点 / 一、通用（I. Common Nodes）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【打印字符串】 Print String
 * 分类：执行节点 / 一、通用（I. Common Nodes）
 *
 * 可以在日志中输出一条字符串，一般用于逻辑检测和调试
 * 在日志中，无论是否勾选了该节点图，逻辑成功运行时该字符串都会打印
 *
 * @en Outputs a string to the log, generally used for logic checks and debugging
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param string 所要打印的字符串（字符串：字符串）
 */
export declare function printString(string: str): void;

/**
 * 【转发事件】 Forwarding Event
 * 分类：执行节点 / 一、通用（I. Common Nodes）
 *
 * 向指定目标实体转发此节点所在的执行流的源头事件。被转发的目标实体上的节点图上的同名事件会被触发
 *
 * @en Forwards the source event of this Node's Execution Flow to the specified Target Entity. The event with the same name on the Target Entity's Node Graph will be triggered
 * @param targetEntity 被转发的目标实体（目标实体：实体）
 */
export declare function forwardingEvent(targetEntity: Entity): void;
