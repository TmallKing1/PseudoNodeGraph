// 信号示例：服务器信号管理器中定义了 cw_save（参数：revision 整数，chunks 字符串列表）
import { onMonitorSignal, sendSignal, sendClientScriptedSignal, printString, dataTypeConversion, str, int, Entity } from '../src';

// 1. 登记信号（对应编辑器【服务器信号管理器】中的定义）
declare module '../src/core/signals' {
  interface SignalRegistry {
    /** 存档信号：revision 整数，chunks 字符串列表 */
    cw_save: { revision: int; chunks: str[] };
    /** 无参数信号 */
    cw_reset: {};
  }
}

// 2. 监听：只响应同名信号；ev.params 即该信号的参数出参
onMonitorSignal('cw_save', (ev) => {
  printString(dataTypeConversion(ev.params.revision, 'str'));
  for (const chunk of ev.params.chunks) printString(chunk); // 列表可迭代，字符串本身不可
});

// 3. 发送：服务端【发送信号】（所有监听同名信号的节点被触发；客户端 Lua 收不到）
export function save(revision: int, chunks: str[]): void {
  sendSignal('cw_save', { revision, chunks });
  sendSignal('cw_reset', {});
}

// 4. 发送给某玩家客户端 Lua（客户端用 script:RegisterServerSignalHandler 接收）
export function pushToClient(player: Entity, revision: int): void {
  sendClientScriptedSignal('cw_save', player, { revision, chunks: [str('a'), str('b')] });
}
