// 自动生成：运算节点 / 一、通用（I. General）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhnd4l069tk0
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【是否相等】 Equal
 * 分类：运算节点 / 一、通用（I. General）
 *
 * 判断两个输入是否相等
 * 部分参数类型有较为特殊的判定规则：
 * 浮点数：浮点数采用近似相等进行比较，当两个浮点数小于一个极小值时，这两个浮点数认为相等。例如：2.0000001与2.0认为相等
 * 三维向量：三维向量的x、y、z分别采用浮点数近似相等比较
 *
 * @en Determines whether two inputs are equal
 * @param input1 输入1（输入1：泛型）
 * @param input2 输入2（输入2：泛型）
 * @returns 相等输出“是”，不相等输出“否”（结果：布尔值）
 */
export function equal<T extends NodeValue = NodeValue>(input1: T, input2: T): bool {
  return input1 === input2 || JSON.stringify(input1) === JSON.stringify(input2);
}

/** 【数据类型转换】的目标类型标签（对应编辑器中为输出引脚选择的类型） */
export type ConversionTarget = 'bool' | 'int' | 'float' | 'str';
/**
 * 【数据类型转换】 Data Type Conversion
 * 分类：运算节点 / 一、通用（I. General）
 *
 * 将输入的参数类型转换为另一种类型输出。具体规则见 基础概念 -【基础数据类型之间的转换规则】
 * 针对浮点数转整数，会通过四舍五入取整
 *
 * @en Converts input parameter types to another type for output. For specific rules, see Basic Concepts - [Conversion Rules Between Basic Data Types]
 * @param input 输入（输入：泛型）
 * @returns 输出（输出：泛型）
 * @param to （伪代码扩展）目标类型标签：编辑器中为输出引脚选择的类型
 *
 * 允许的 源类型 → 目标类型（基础概念 -【基础数据类型之间的转换规则】，编辑器截图确认）：
 *
 * | 源类型 | 目标类型 | 规则 / 示例 |
 * |---|---|---|
 * | 整数 | 布尔值 | 0 → 否，非 0 → 是 |
 * | 整数 | 浮点数 | 15 → 15.0 |
 * | 整数 | 字符串 | 15 → "15" |
 * | 实体 | 字符串 | 实体的运行时ID，如 "1001" |
 * | GUID | 字符串 | 如 "100001" |
 * | 布尔值 | 整数 | 否 → 0，是 → 1 |
 * | 布尔值 | 字符串 | "True" / "False" |
 * | 浮点数 | 整数 | 四舍五入：2.5 → 3，-1.31 → -1，0.0 → 0 |
 * | 浮点数 | 字符串 | 至多 6 位有效数字：2.5 → "2.5"，-1.317524 → "-1.31752" |
 * | 三维向量 | 字符串 | 各分量四舍五入到 1 位小数（分量是单精度浮点数）：{1.051, -1.051, 1.99} → "{1.1,-1.1,2.0}"，{1.05, -1.05, 1.99} → "{1.0,-1.0,2.0}" |
 * | 阵营 | 字符串 | 阵营ID |
 *
 * 其余组合在编辑器中不可选；这里用重载表达，非法组合会被 tsc 拒绝。
 * 伪代码中整数与浮点数都是 number，无法区分，故 number 源可选 bool/int/float/str 四种目标（请按引脚实际类型选择）。
 * 实现说明：三维向量格式为 "{1.0,2.3,3.0}"，逗号后无空格（调试器实测 2026-11-08）。分量按单精度存储，1.05 实际是 1.04999995…，
 * 所以四舍五入后是 1.0（官方示例 1.05 → "1.0" 也是这个原因）；实现先 Math.fround 再保留 1 位小数。
 * 浮点数→整数的 .5 负数情况（-2.5）文档未说明，此处按远离零取整。
 * 实体→字符串 依赖运行时ID，伪代码中返回实体对象上的 runtimeId 字段（若有）。
 */
export function dataTypeConversion(input: Unbranded<int>, to: 'bool'): bool;
export function dataTypeConversion(input: Unbranded<int>, to: 'float'): float;
export function dataTypeConversion(input: Unbranded<float>, to: 'int'): int;
export function dataTypeConversion(input: Unbranded<int | float>, to: 'str'): str;
export function dataTypeConversion(input: Entity | GUID | Faction | Vec3, to: 'str'): str;
export function dataTypeConversion(input: bool, to: 'int'): int;
export function dataTypeConversion(input: bool, to: 'str'): str;
export function dataTypeConversion(input: unknown, to: ConversionTarget): unknown {
  // 以下为引擎行为的模拟实现（库内部），不代表节点图里可以做字符串拼接
  const S = (t: string) => t as unknown as str;
  if (typeof input === 'boolean') return to === 'int' ? (input ? 1 : 0) : S(input ? 'True' : 'False');
  if (typeof input === 'number') {
    if (to === 'bool') return input !== 0;
    if (to === 'float') return input;
    if (to === 'int') return Math.sign(input) * Math.round(Math.abs(input));
    return S(Number.isInteger(input) ? String(input) : String(Number(input.toPrecision(6))));
  }
  const o = input as { x?: number; y?: number; z?: number; runtimeId?: number };
  if (typeof o.x === 'number' && typeof o.y === 'number' && typeof o.z === 'number') {
    const f = (n: number) => Math.fround(n).toFixed(1);
    return S(['{', [f(o.x), f(o.y), f(o.z)].join(','), '}'].join(''));
  }
  return S(String(o.runtimeId ?? input));
}


/**
 * 【枚举是否相等】 Enumerations Equal
 * 分类：运算节点 / 一、通用（I. General）
 *
 * 确认枚举的类型后，判断两个输入的值是否相等
 *
 * @en After confirming the Enumeration type, determines whether the two input values are equal
 * @param enumeration1 枚举1（枚举1：泛型）
 * @param enumeration2 枚举2（枚举2：泛型）
 * @returns 相等输出“是”，不相等输出“否”（结果：布尔值）
 */
export function enumerationsEqual<T extends NodeValue = NodeValue>(enumeration1: T, enumeration2: T): bool {
  return enumeration1 === enumeration2;
}
