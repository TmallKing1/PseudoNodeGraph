// 自定义变量 / 节点图变量登记示例（src/core/variables.ts）
import { getVar, setVar, getGraphVar, setGraphVar, onTimerIsTriggered, int, bool, Entity } from '../src';

/** 编辑器中在玩家模板上定义的结构体变量（只有编辑器定义的变量才同步给客户端） */
interface RoundState { round: int; ready: bool[] }

declare module '../src/core/variables' {
  interface CustomVariableRegistry {
    countdown: int;          // 玩家自身变量：倒计时秒数
    roundState: RoundState;  // 关卡变量：结构体整体写入，客户端整体读取
  }
  interface NodeGraphVariableRegistry {
    dirty: bool;             // 本图的“需要提交”标志
  }
}

declare const level: Entity; declare const player: Entity;
onTimerIsTriggered(() => {
  const left = getVar(player, 'countdown');
  if (left > 0) setVar(player, 'countdown', left - 1, false);   // 高频写入：不触发事件，避免变化事件自激
  if (getGraphVar('dirty')) {
    const s = getVar(level, 'roundState');
    setVar(level, 'roundState', { round: s.round, ready: s.ready }, false); // 拼装结构体直接接到引脚
    setGraphVar('dirty', false, false);
  }
});
