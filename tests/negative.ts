// 负面用例：每一行都必须被 tsc 拒绝（@ts-expect-error 若未报错则 tsc 失败）
import { dataTypeConversion, str, GUID, Faction, Entity, vec3 } from '../src';
declare const g: GUID; declare const f: Faction; declare const e: Entity;
// @ts-expect-error GUID 不能转整数
dataTypeConversion(g, 'int');
// @ts-expect-error GUID 不能转布尔值
dataTypeConversion(g, 'bool');
// @ts-expect-error 阵营不能转浮点数
dataTypeConversion(f, 'float');
// @ts-expect-error 实体不能转整数
dataTypeConversion(e, 'int');
// @ts-expect-error 三维向量不能转浮点数
dataTypeConversion(vec3(1, 2, 3), 'float');
// @ts-expect-error 布尔值不能转浮点数
dataTypeConversion(true, 'float');
// @ts-expect-error 字符串不能拼接
const a: string = str('a') + str('b');
// @ts-expect-error 字符串不能取长度
str('abc').length;
// @ts-expect-error 字符串不能截取
str('abc').slice(1);
// @ts-expect-error 不能把原生 string 当节点字符串传
const b: import('../src').str = 'raw';
export { a, b };

// ---- 信号（cw_save 在 examples/signals.ts 中登记）----
import { sendSignal, sendClientScriptedSignal, onMonitorSignal } from '../src';
declare const player: Entity;
// @ts-expect-error 未登记的信号名
sendSignal('cw_unknown', {});
// @ts-expect-error 缺少参数 chunks
sendSignal('cw_save', { revision: 1 });
// @ts-expect-error 参数类型错误：revision 应为整数
sendSignal('cw_save', { revision: str('1'), chunks: [] });
// @ts-expect-error 多余参数
sendSignal('cw_save', { revision: 1, chunks: [], extra: 1 });
// @ts-expect-error 发送客户端脚本信号缺少目标玩家
sendClientScriptedSignal('cw_save', { revision: 1, chunks: [] });
onMonitorSignal('cw_save', (ev) => {
  // @ts-expect-error 监听的信号没有该参数
  ev.params.missing;
});
// @ts-expect-error 监听未登记的信号
onMonitorSignal('cw_nope', () => {});

// ---- 自定义变量登记（countdown / roundState 在 examples/variables.ts 中登记）----
import { getVar, setVar, setGraphVar, defineComposite, int } from '../src';
declare const someone: Entity;
// @ts-expect-error 未登记的自定义变量名（拼错的名字在编辑器里会悄悄变成新的动态变量）
getVar(someone, 'countdwon');
// @ts-expect-error 值类型与登记不符
setVar(someone, 'countdown', str('5'), false);
// @ts-expect-error setVar 必须显式给出“是否触发事件”
setVar(someone, 'countdown', 5);
// @ts-expect-error 未登记的节点图变量
setGraphVar('dirtty', true, false);

// ---- 复合节点 ----
const twice = defineComposite<{ v: int }, 'done', { out: () => int }>((input) => ({ out: () => input.v() * 2 }));
// @ts-expect-error 缺少数据入口 v
twice({});
// @ts-expect-error 数据入口是求值函数，不是值
twice({ v: 3 });
// @ts-expect-error 未声明的执行出口
twice({ v: () => 3 }, { failed: () => {} });
