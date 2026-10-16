# PseudoNodeGraph —— 千星奇域 服务端节点图 强类型伪代码 API 库

## 用途
把《原神·千星奇域》**服务端节点图**的全部节点（事件 / 执行 / 流程控制 / 查询 / 运算）整理成一套**强类型的 TypeScript 声明**，
让 AI Agent（或人）可以用“伪代码”描述节点图逻辑：每个节点 = 一个函数，类型检查器会帮你发现连线类型错误。
写好的伪代码再由人或工具在编辑器中“连成”真正的节点图。**与客户端 Lua 无关。**

数据来源（官方教程，2026-10-16 抓取，原始文件在 `/workspace/nodegraph-src/`）：

| 页面 | 中文 | 英文 |
|---|---|---|
| 执行节点 | https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm | `?lang=en-us` |
| 事件节点 | https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw | 同上 |
| 流程控制节点 | https://act.mihoyo.com/ys/ugc/tutorial/detail/mhe8yn9bysd6 | 同上 |
| 查询节点 | https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q | 同上 |
| 运算节点 | https://act.mihoyo.com/ys/ugc/tutorial/detail/mhnd4l069tk0 | 同上 |

页面是 JS 渲染的，正文实际来自静态文件 `https://act-webstatic.mihoyo.com/ugc-tutorial/knowledge/cn/<lang>/<real_id>/content.html`，
`real_id` 由同目录 `catalog.json` 给出（英文版 real_id 与中文不同）。

## 为什么选 TypeScript
- **类型系统足够表达节点图**：品牌类型（branded type）区分实体/GUID/配置ID 等“看起来都是数字”的句柄；泛型表达“泛型引脚”；`interface` 表达多出参；字符串枚举对应编辑器下拉框。
- **声明与实现可共存**：`export declare function` 只声明（游戏内行为），纯运算节点用 `export function` 给出真实实现。
- **Agent 最熟悉**：语法常见、JSDoc 注释可被编辑器悬浮显示，`tsc --noEmit` 一条命令即可校验伪代码。
- 风格上参考了客户端工程的 `annotations.lua`（EmmyLua 声明 + 文档注释）：只有声明和注释，没有运行时依赖。

## 文件结构
```
PseudoNodeGraph/
├─ README.md            本文件
├─ TODO.md              待实现清单（无法建模/文档不清的编辑器特性）
├─ COVERAGE.md          覆盖率报告 + 全部 487 个节点 → 标识符 对照表
├─ coverage.json        同上（机器可读）
├─ package.json / tsconfig.json
├─ src/
│  ├─ index.ts          汇总导出（伪代码只需 import from 'src'）
│  ├─ core/types.ts     基础类型（Entity、GUID、int、float、Vec3、Dict…）
│  ├─ core/enums.ts     枚举
│  ├─ core/signals.ts   信号注册表 SignalRegistry
│  ├─ events/NN-*.ts    事件节点（按文档分类，一类一个文件，共 28 个）
│  ├─ execution/NN-*.ts 执行节点（55 个文件）
│  ├─ query/NN-*.ts     查询节点（38 个文件）
│  └─ operation/NN-*.ts 运算节点（4 个文件）
├─ examples/example.ts  示例伪代码（参与类型检查）
├─ examples/signals.ts  信号示例（cw_save）
├─ tests/negative.ts    负面用例：非法写法必须被 tsc 拒绝（@ts-expect-error）
└─ tools/               生成器与校验脚本（parse.py → align.py → gen.py → coverage.py）
```
文件名中的 `NN` 是文档中的分类序号，名字取自英文分类名（如 `execution/25-skills.ts` = 执行节点 / 二十五、技能）。

## 约定
- **命名**：函数名 = 英文版节点名的 camelCase（如【打印字符串】Print String → `printString`）；参数名 = 英文版参数名 camelCase；
  以数字开头的加 `_`（`_3dVectorAddition`）。英文文档缺失的参数按中文意译命名（见 TODO.md）。
- **注释**：每个函数的 JSDoc 第一行是 `【中文节点名】 English Node Name`，第二行是分类；随后是**中文原文**（节点功能说明，逐字保留），
  `@en` 给出英文版第一句，`@param` / 接口字段注释 = 中文参数说明原文 +（中文参数名：中文类型）。
- **执行/查询节点**：入参 → 函数参数；无出参 → `void`；一个出参 → 直接返回；多个出参 → 返回 `XxxResult` 接口（字段 = 各出参）。
- **事件节点**：`onXxx(handler)` 注册回调，回调参数 `XxxEvent` 接口包含该事件的全部出参。
  事件节点名去掉 “When” 前缀：When Entity Is Created → `onEntityIsCreated`。
- **运算节点**（以及少数纯查询节点：随机数、π、常量向量、列表/字典读取）有真实实现，可直接运行。
- 所有游戏内行为都是 `declare`，**不能运行**，只用于类型检查与表达意图。

## 类型映射
| 节点图类型 | TypeScript | 说明 |
|---|---|---|
| 整数 | `int`（= number） | 只放整数 |
| 浮点数 | `float`（= number） | |
| 布尔值 | `bool` | |
| 字符串 | `str`（不透明品牌类型） | 字面量用 `str('文本')`；**不能拼接/截取/遍历/取长度**，见下文 |
| 三维向量 | `Vec3 {x,y,z}` | 字面量用 `vec3(x,y,z)` 或 `{x,y,z}`；旋转为欧拉角（度） |
| 实体 | `Entity` | 品牌类型，只能来自节点/事件出参 |
| GUID | `GUID` | 品牌类型；可 `123 as GUID` |
| 配置ID | `ConfigId` | 品牌类型；可 `1001 as ConfigId` |
| 元件ID | `PrefabId` | 品牌类型 |
| 阵营 | `Faction` | 品牌类型 |
| 枚举 | `core/enums.ts` 中的 `const enum`（值为编辑器/文档中文选项，如 `'元素类型_火元素'`） | |
| XX列表 | `T[]`（如 `int[]`、`Entity[]`、`ConfigId[]`） | |
| 字典 | `Dict<K, V>`（= `Map<K, V>`） | K 受 `DictKey` 约束 |
| 泛型 | 类型参数 `T extends NodeValue`；数学运算为 `T extends Num`；字典为 `K, V` | |
| 结构体 | 自己声明 `interface` | 见下表“原生语法” |
| 自定义变量快照 / 局部变量 | `CustomVariableSnapshot` / `LocalVariable` | |

## ⚠ 伪代码规则：字符串能力极其有限
编辑器节点图里的字符串**没有**拼接、截取/拆分、逐字符遍历、取长度等任何操作，只能：
- 整体赋值 / 替换（引脚上直接填写，或从节点出参得到）；
- 相等比较（【是否相等】，伪代码中 `===` / `!==`）；
- 由【数据类型转换】从整数、浮点数、布尔值、实体、GUID、三维向量、阵营转换得到。

因此 `str` 被建模为不透明品牌类型：`+`、模板字符串、`.length`、`.slice()`、`for...of` 等在 `tsc` 中都会报错
（`tests/negative.ts` 验证了这些写法会被拒绝）。需要输出“文本 + 数值”时，请分多次调用【打印字符串】，或预先配置好完整字符串。

## 信号（服务器信号管理器）
- 信号在编辑器【服务器信号管理器】中定义：信号名 + 有序参数列表（参数名 + 类型），名称与参数列表一一对应；在节点上选择信号名后追加该信号的参数引脚。
- 伪代码中通过**声明合并**把信号登记到 `SignalRegistry`（`src/core/signals.ts`），之后信号名、参数名、参数类型都由 tsc 校验。

| 节点 | 函数 | 语义 |
|---|---|---|
| 发送信号 | `sendSignal(name, params)` | 遍历所有实体，触发所有监听同名信号的【监听信号】；客户端 Lua 收不到 |
| 发送客户端脚本信号 | `sendClientScriptedSignal(name, targetPlayer, params)` | 发给目标玩家客户端 Lua（`script:RegisterServerSignalHandler` 接收） |
| 监听信号（事件） | `onMonitorSignal(name, ev => ...)` | 只响应完全同名信号；出参 事件源实体/事件源GUID/信号来源实体 + `ev.params`。可由客户端节点图「向服务器节点图发送信号」、客户端 Lua `ServerSignal:SendSignal()`、服务端【发送信号】触发 |

```ts
import { onMonitorSignal, sendSignal, str, int } from '../src';

declare module '../src/core/signals' {
  interface SignalRegistry {
    cw_save: { revision: int; chunks: str[] }; // revision 整数，chunks 字符串列表
  }
}

onMonitorSignal('cw_save', (ev) => {
  const rev: int = ev.params.revision;
  for (const c of ev.params.chunks) { /* ... */ }
});
sendSignal('cw_save', { revision: 3, chunks: [str('a')] });
// sendSignal('cw_save', { revision: 3 });   // tsc 报错：缺少 chunks
// sendSignal('cw_other', {});               // tsc 报错：未登记的信号
```
完整示例见 `examples/signals.ts`，负面用例见 `tests/negative.ts`。

## 数据类型转换
`dataTypeConversion(input, to)`，`to` 为目标类型标签 `'bool' | 'int' | 'float' | 'str'`（对应编辑器中为输出引脚选择的类型），有真实实现。
允许的组合（非法组合 tsc 报错）：整数→布尔值/浮点数/字符串；浮点数→整数（四舍五入）/字符串（至多 6 位有效数字）；布尔值→整数/字符串（"True"/"False"）；
实体/GUID/阵营→字符串（ID）；三维向量→字符串（`"{1.0, 2.3, 3.0}"`，各分量 1 位小数）。伪代码中整数与浮点数都是 number，无法区分，请按引脚实际类型选择目标。

## 原生语法映射（这些节点不生成函数）
| 节点（页面） | 原生写法 |
|---|---|
| 双分支（流程控制） | `if (cond) { ... } else { ... }` |
| 多分支（流程控制） | `switch (expr) { case ...: ...; default: ... }`（控制表达式仅整数或字符串；无匹配走【默认】） |
| 有限循环（执行） | `for (let i = start; i <= end; i++) { ... }`（起止值都包含；循环完成 = 循环后的代码） |
| 跳出循环（执行） | `break;`（跳出后仍执行“循环完成”= 循环后的代码） |
| 列表迭代循环（执行） | `for (const item of list) { ... }` |
| 设置局部变量（执行） | `let x: T = v; x = v2;` |
| 获取局部变量（查询） | 直接读取 `x` |
| 拼装列表（运算） | `[a, b, c]` |
| 拼装结构体（运算） | 对象字面量 `{ f1: v1, f2: v2 }` |
| 拆分结构体（运算） | 解构 `const { f1, f2 } = s;` |
| 修改结构体（执行） | 字段赋值 `s.f1 = v;` |

此外，加减乘除、比较、逻辑运算等节点虽然有函数（`addition`、`lessThan`、`logicalANDOperation`…），伪代码中**也可以直接写** `+ - * / < && || !`，
两种写法等价；整数除法注意是整除（`division` 已按文档实现：除数为 0 时结果为 0）。

## Agent 如何用它写伪代码
1. `import { ... } from '../src'`（或相对路径到 `src/index.ts`）。
2. 一个节点图 = 一个 `.ts` 文件；图中每个事件节点写成一个 `onXxx((ev) => { ... })` 回调，执行流按顺序写语句。
3. 只调用本库中存在的函数；不知道节点名时查 `COVERAGE.md` 的对照表（可按中文名搜索）。
4. 流程控制用原生语法（见上表）；多出参用解构或 `r.field` 读取。
5. 句柄字面量用 `as`：`1001 as ConfigId`；字符串字面量用 `str('文本')`；枚举用 `SkillSlot.Skill1E` 之类。
6. 不要对字符串做任何拼接/截取/遍历（见上文规则）。
7. 节点图变量 / 自定义变量按“变量名字符串 + 泛型值”调用 `setNodeGraphVariable('hp', 10, true)`。
8. 写完运行 `npx tsc --noEmit -p .`，零报错即类型正确。

## 简短示例
```ts
import { onAttacked, addUnitStatus, printString, UnitStatusApplyResult, ConfigId, str } from '../src';

onAttacked((ev) => {                         // 事件节点【受到攻击时】
  if (ev.damage > 100 && ev.isCrit) {        // 双分支 → if
    const r = addUnitStatus(ev.eventSourceEntity, ev.attackerEntity, 1001 as ConfigId, 1, new Map());
    if (r.applicationResult === UnitStatusApplyResult.SuccessNewStatus) printString(str('施加成功'));
  }
});
```
完整示例见 `examples/example.ts`。

## 校验 / 重新生成
```bash
npm install            # 安装 typescript
npx tsc --noEmit -p .  # 类型检查（当前 0 错误）
python3 tools/gen.py && python3 tools/coverage.py   # 由 tools/aligned.json 重新生成 src/ 与 COVERAGE.md
```
覆盖：5 个页面共 **487** 个节点（中英文各 487），全部覆盖：476 个函数（其中 80 个有真实实现）+ 11 个原生语法映射。详见 `COVERAGE.md`。
