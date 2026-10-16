// 自动生成：事件节点 / 二十八、操控运动器（XXVIII. Control Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【玩家离开操控运动器时】事件的出参 / Output parameters of "When Player Leaves Control Motion Device"
 */
export interface PlayerLeavesControlMotionDeviceEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 离开操控运动器实体（离开操控运动器实体：实体）
   */
  readonly leaveControlMotionDeviceEntity: Entity;
}
/**
 * 【玩家离开操控运动器时】 When Player Leaves Control Motion Device
 * 分类：事件节点 / 二十八、操控运动器（XXVIII. Control Motion Device）
 *
 * 玩家离开操控运动器时。受控、传送过程中，将使玩家自动离开操控运动器
 *
 * @en Triggered when the player exits the Motion Device. The player will automatically exit the Motion Device when they become controlled or are teleported.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerLeavesControlMotionDevice(handler: (ev: PlayerLeavesControlMotionDeviceEvent) => void): void;

/**
 * 【玩家跟随操控运动器时】事件的出参 / Output parameters of "When Player Follows Control Motion Device"
 */
export interface PlayerFollowsControlMotionDeviceEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 跟随操控运动器实体（跟随操控运动器实体：实体）
   */
  readonly followControlMotionDeviceEntity: Entity;
}
/**
 * 【玩家跟随操控运动器时】 When Player Follows Control Motion Device
 * 分类：事件节点 / 二十八、操控运动器（XXVIII. Control Motion Device）
 *
 * 玩家跟随操控运动器时
 *
 * @en Triggered when the player follows the Control Motion Device.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerFollowsControlMotionDevice(handler: (ev: PlayerFollowsControlMotionDeviceEvent) => void): void;

/**
 * 【玩家激活操控运动器列表变化时】事件的出参 / Output parameters of "When Player's Activated Control Motion Device List Changes"
 */
export interface PlayersActivatedControlMotionDeviceListChangesEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 原操控运动器实体列表（原操控运动器实体列表：实体列表）
   */
  readonly oldControlMotionDeviceEntityList: Entity[];
  /**
   * 当前激活操控运动器实体列表（当前激活操控运动器实体列表：实体列表）
   */
  readonly currentActivatedControlMotionDeviceEntityList: Entity[];
}
/**
 * 【玩家激活操控运动器列表变化时】 When Player's Activated Control Motion Device List Changes
 * 分类：事件节点 / 二十八、操控运动器（XXVIII. Control Motion Device）
 *
 * 玩家激活操控运动器列表变化时
 *
 * @en Triggered when the player follows the Control Motion Device.
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayersActivatedControlMotionDeviceListChanges(handler: (ev: PlayersActivatedControlMotionDeviceListChangesEvent) => void): void;
