// 自动生成：事件节点 / 八、运动器（VIII. Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【基础运动器停止时】事件的出参 / Output parameters of "When Basic Motion Device Stops"
 */
export interface BasicMotionDeviceStopsEvent {
  /**
   * 组件持有者（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 运动器名称（运动器名称：字符串）
   */
  readonly motionDeviceName: str;
}
/**
 * 【基础运动器停止时】 When Basic Motion Device Stops
 * 分类：事件节点 / 八、运动器（VIII. Motion Device）
 *
 * 基础运动器组件上的某个基础运动器完成运动时或被关闭时向组件持有者发送该事件
 *
 * @en This event is sent to the Component Owner when a Basic Motion Device on the Basic Motion Device Component completes its movement or is disabled
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onBasicMotionDeviceStops(handler: (ev: BasicMotionDeviceStopsEvent) => void): void;

/**
 * 【路径到达路点时】事件的出参 / Output parameters of "When Path Reaches Waypoint"
 */
export interface PathReachesWaypointEvent {
  /**
   * 组件持有者（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 运动器名称（运动器名称：字符串）
   */
  readonly motionDeviceName: str;
  /**
   * 路径点序号（路径点序号：整数）
   */
  readonly pathPointID: int;
}
/**
 * 【路径到达路点时】 When Path Reaches Waypoint
 * 分类：事件节点 / 八、运动器（VIII. Motion Device）
 *
 * 路径运动器到达路点时发送给基础运动器组件的持有者，需要在路点配置中配置“到达路点发送事件”才会触发该事件
 *
 * @en When the Pathing Motion Device reaches a Waypoint, it sends this event to the Owner of the Basic Motion Device Component. This event is triggered only if "Send Event on Waypoint Arrival" is enabled in the Waypoint settings
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPathReachesWaypoint(handler: (ev: PathReachesWaypointEvent) => void): void;
