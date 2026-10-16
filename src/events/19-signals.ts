// 自动生成：事件节点 / 十九、信号（XIX. Signals）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【监听信号】事件的出参 / Output parameters of "Monitor Signal"
 */
export interface MonitorSignalEvent<K extends SignalName = SignalName> {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 使用【发送信号】节点发送该信号的实体（信号来源实体：实体）
   */
  readonly signalSourceEntity: Entity;
  /**
   * 信号名
   */
  readonly signalName: K;
  /**
   * 该信号的参数（选择信号名后追加的出参引脚，字段名=参数名）
   */
  readonly params: SignalParams<K>;
}
/**
 * 【监听信号】 Monitor Signal
 * 分类：事件节点 / 十九、信号（XIX. Signals）
 *
 * 监听已在信号管理器中定义的信号触发事件
 * 需先选择需要监听的信号名
 *
 * @en Monitors Signal trigger events defined in the Signal Manager
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onMonitorSignal<K extends SignalName = SignalName>(signalName: K, handler: (ev: MonitorSignalEvent<K>) => void): void;
