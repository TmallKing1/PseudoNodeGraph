/**
 * 千星奇域 服务端节点图 —— 复合节点（2026-11-08 新增，向后兼容）
 *
 * 复合节点 = 一张可被别的图调用的子图：若干具名数据入口、若干具名执行出口（含“完成”）、若干数据出口。
 * 伪代码写法（来自实际项目，见 README “实际项目的伪代码写法”）：
 *
 * ```ts
 * const clamp = defineComposite<{ v: int; lo: int; hi: int }, 'done' | 'clamped', { result: () => int }>(
 *   (input, flow) => {
 *     let r: int = input.v();                      // 数据入口是“求值函数”：每读一次就重新求值一次
 *     if (r < input.lo()) { r = input.lo(); flow.clamped?.(); }
 *     flow.done?.();                               // 执行出口 = 可选回调
 *     return { result: () => r };                  // 数据出口也按需读取
 *   });
 * const c = clamp({ v: () => hp, lo: () => 0, hi: () => 100 }, { done: () => printString(str('ok')) });
 * ```
 *
 * 语义要点（见 EXPERIENCE.md D、C 节）：
 * - 函数正常返回 = 走到复合的“完成”出口。复合内**任何**不做事的路径（如双分支的假分支）在编辑器里也必须映射到完成出口，
 *   否则调用方的后继会断流；同一出口重复映射会让后继执行两次。
 * - 复合**没有独立作用域**：其中的“自身实体”仍是调用它的那张图的挂载实体。
 * - 复合里的局部变量**不会在每次调用时重置**，只在事件节点收到事件时重置；同一事件内循环调用同一复合时，
 *   累加用的列表要手动【清除列表】。伪代码里 `let xs = []` 每次新建，表达不出这一点，请在注释里写明清空位置。
 * - 已定义的结构体可以整体作为入口/出口；信号参数不能整体跨复合传递。
 * - 主图之间不能互相跳转，跨图复用只能通过复合（或发信号）。
 */
import type { NodeValue } from './types';

/** 数据入口：每个入口是一个求值函数（对应连到该入口的数据线，读一次求值一次） */
export type CompositeInput<I> = { readonly [K in keyof I]: () => I[K] };
/** 执行出口：可选回调（未连线的出口 = 不提供） */
export type CompositeFlow<F extends string> = { readonly [K in F]?: () => void };
/** 一个复合节点：调用一次 = 从执行入口进入一次 */
export type CompositeNode<I extends Record<string, NodeValue | object>, F extends string, O> =
  (input: CompositeInput<I>, flow?: CompositeFlow<F>) => O;

/** 声明一个复合节点。body 返回数据出口（建议用求值函数，按需读取） */
export function defineComposite<I extends Record<string, NodeValue | object>, F extends string = 'done', O = void>(
  body: (input: CompositeInput<I>, flow: CompositeFlow<F>) => O,
): CompositeNode<I, F, O> {
  return (input, flow) => body(input, flow ?? ({} as CompositeFlow<F>));
}
