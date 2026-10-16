// 自动生成：事件节点 / 十一、全局计时器（XI. Global Timer）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【全局计时器触发时】事件的出参 / Output parameters of "When Global Timer Is Triggered"
 */
export interface GlobalTimerIsTriggeredEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 计时器名称（计时器名称：字符串）
   */
  readonly timerName: str;
}
/**
 * 【全局计时器触发时】 When Global Timer Is Triggered
 * 分类：事件节点 / 十一、全局计时器（XI. Global Timer）
 *
 * 当倒计时的全局计时器计时结束时，会触发该事件
 * 正计时的全局计时器不会触发该事件
 *
 * @en This event is triggered when the Global Countdown Timer reaches zero
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onGlobalTimerIsTriggered(handler: (ev: GlobalTimerIsTriggeredEvent) => void): void;
