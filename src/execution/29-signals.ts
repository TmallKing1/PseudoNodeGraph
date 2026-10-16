// 自动生成：执行节点 / 二十九、信号（XXIX. Signals）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【发送信号】 Send Signal
 * 分类：执行节点 / 二十九、信号（XXIX. Signals）
 *
 * 向关卡全局发送一个自定义信号，使用前需要先选择对应的信号名，然后才能正确的使用该信号的参数
 *
 * @en Send a custom Signal to the global Stage. Before use, select the corresponding Signal name to ensure correct parameter usage
 *
 * —— 信号语义（创作者补充）——
 * 信号在编辑器【服务器信号管理器】中定义：每个信号有信号名和有序参数列表（参数名+类型），信号名与参数列表一一对应。
 * 在节点上选择信号名后，节点会追加该信号的参数引脚。伪代码中用 SignalRegistry 声明信号（见 core/signals.ts / README），信号名与参数在类型检查时校验。
 * 【发送信号】入参：信号名 + 该信号的参数。遍历所有实体，触发所有监听同名信号的【监听信号】节点。
 * 客户端 Lua 脚本无法接收此信号（需用【发送客户端脚本信号】）。
 * @param signalName 信号名（编辑器下拉选择，必须是 SignalRegistry 中声明的信号）
 * @param params 该信号的参数（按信号定义，字段名=参数名）
 */
export declare function sendSignal<K extends SignalName>(signalName: K, params: SignalParams<K>): void;
