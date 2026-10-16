/**
 * 千星奇域 服务端节点图 —— 信号注册表
 *
 * 信号在编辑器【服务器信号管理器】中定义：每个信号 = 信号名 + 有序参数列表（参数名 + 类型），信号名与参数列表一一对应。
 * 在【发送信号】/【发送客户端脚本信号】/【监听信号】节点上选择信号名后，节点会追加该信号的参数引脚。
 *
 * 伪代码中用“声明合并”把项目里定义的信号登记到 SignalRegistry（键 = 信号名，值 = 参数对象类型，字段顺序同参数列表）：
 *
 * ```ts
 * declare module '<相对路径>/src/core/signals' {
 *   interface SignalRegistry {
 *     cw_save: { revision: int; chunks: str[] };   // 参数：revision 整数，chunks 字符串列表
 *   }
 * }
 * ```
 * 之后 sendSignal('cw_save', { revision, chunks }) 等调用会校验信号名与参数；未登记的信号名、缺参/多参/类型错误都会 tsc 报错。
 */
import type { NodeValue } from './types';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SignalRegistry {}

/** 已登记的信号名 */
export type SignalName = keyof SignalRegistry & string;
/** 某信号的参数对象（字段 = 信号参数） */
export type SignalParams<K extends SignalName> = SignalRegistry[K] extends Readonly<Record<string, NodeValue>> ? SignalRegistry[K] : never;
