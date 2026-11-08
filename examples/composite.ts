// 复合节点示例（src/core/composite.ts）
import { defineComposite, printString, str, int, Entity, clearList, insertValueIntoList, getListLength } from '../src';

/** 夹紧：数据入口 v/lo/hi，执行出口 done（完成）与 clamped，数据出口 result */
export const clamp = defineComposite<{ v: int; lo: int; hi: int }, 'done' | 'clamped', { result: () => int }>(
  (input, flow) => {
    let r: int = input.v();
    if (r < input.lo()) { r = input.lo(); flow.clamped?.(); }
    else if (r > input.hi()) { r = input.hi(); flow.clamped?.(); }
    flow.done?.();             // 假分支也走到完成出口（编辑器里要映射）
    return { result: () => r };
  });

/** 一个事件内会被多次调用的复合：累加列表要手动清空（局部变量不会在每次调用时重置） */
export const collect = defineComposite<{ who: Entity }, 'done', { names: () => Entity[] }>((input, flow) => {
  const acc: Entity[] = [];    // 编辑器里对应一个列表局部变量
  clearList(acc);              // ← 在开头清空：输出直接读这个局部变量
  insertValueIntoList(acc, getListLength(acc), input.who());
  flow.done?.();
  return { names: () => acc };
});

declare const hp: int;
const c = clamp({ v: () => hp, lo: () => 0, hi: () => 100 }, { done: () => printString(str('ok')) });
export const value: int = c.result();
