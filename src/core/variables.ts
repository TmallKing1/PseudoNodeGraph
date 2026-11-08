/**
 * 千星奇域 服务端节点图 —— 自定义变量 / 节点图变量注册表（2026-11-08 新增，向后兼容）
 *
 * 编辑器中的自定义变量（玩家模板、关卡、实体上定义）与节点图变量都按“名字字符串”访问，
 * 原有 getCustomVariable<T>(e, str(name)) 无法把名字与类型关联。本文件提供与 SignalRegistry 相同的声明合并写法：
 *
 * ```ts
 * declare module '<相对路径>/src/core/variables' {
 *   interface CustomVariableRegistry { 'score': int; 'snapshot': MySnapshot }   // 自定义变量：名字 → 类型
 *   interface NodeGraphVariableRegistry { 'tick': int }                          // 节点图变量
 * }
 * const s = getVar(player, 'score');      // 类型 int；未登记的名字 tsc 报错
 * setVar(player, 'score', s + 1, false);  // 类型不符 tsc 报错
 * ```
 *
 * 这些函数只是写法：getVar / setVar 对应原节点【获取自定义变量】/【设置自定义变量】，
 * getGraphVar / setGraphVar 对应【获取节点图变量】/【设置节点图变量】，名字填在变量名引脚上。
 *
 * 实践要点（见 EXPERIENCE.md B 节）：
 * - 只有**在编辑器里定义**的自定义变量才会同步给客户端；服务器首次写入时动态创建的变量不同步（observed）。
 * - 名字拼错不会报错，而是悄悄写到另一个动态变量上 —— 这正是登记表要防的。
 * - 【设置自定义变量】的“是否触发事件”引脚不填时默认为“是”；高频写入（倒计时等）请显式传 false。
 */
import type { Entity, NodeValue, bool } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CustomVariableRegistry {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NodeGraphVariableRegistry {}

/** 已登记的自定义变量名 */
export type CustomVariableName = keyof CustomVariableRegistry & string;
/** 已登记的节点图变量名 */
export type NodeGraphVariableName = keyof NodeGraphVariableRegistry & string;
type Value<R, K extends keyof R> = R[K] extends NodeValue ? R[K] : never;

/** 【获取自定义变量】（按登记表定型）。变量名是编辑器引脚上的常量 */
export declare function getVar<K extends CustomVariableName>(targetEntity: Entity, variableName: K): Value<CustomVariableRegistry, K>;
/** 【设置自定义变量】（按登记表定型）。triggerEvent 必须显式给出，避免误用默认的“是” */
export declare function setVar<K extends CustomVariableName>(targetEntity: Entity, variableName: K, variableValue: Value<CustomVariableRegistry, K>, triggerEvent: bool): void;
/** 【获取节点图变量】（按登记表定型） */
export declare function getGraphVar<K extends NodeGraphVariableName>(variableName: K): Value<NodeGraphVariableRegistry, K>;
/** 【设置节点图变量】（按登记表定型） */
export declare function setGraphVar<K extends NodeGraphVariableName>(variableName: K, variableValue: Value<NodeGraphVariableRegistry, K>, triggerEvent: bool): void;
