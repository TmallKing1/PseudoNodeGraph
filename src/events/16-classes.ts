// 自动生成：事件节点 / 十六、职业（XVI. Classes）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhn7ko01v3yw
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【玩家职业更改时】事件的出参 / Output parameters of "When Player Class Changes"
 */
export interface PlayerClassChangesEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 更改前职业配置ID（更改前职业配置ID：配置ID）
   */
  readonly preModificationClassConfigID: ConfigId;
  /**
   * 更改后职业配置ID（更改后职业配置ID：配置ID）
   */
  readonly postModificationConfigID: ConfigId;
}
/**
 * 【玩家职业更改时】 When Player Class Changes
 * 分类：事件节点 / 十六、职业（XVI. Classes）
 *
 * 玩家职业更改时触发该事件发送给对应玩家，可以在更改后职业的职业节点图里收到
 *
 * @en This event is triggered when a Player's Class changes and is sent to the corresponding Player. It can be received in the Node Graph of the new Class
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerClassChanges(handler: (ev: PlayerClassChangesEvent) => void): void;

/**
 * 【玩家职业等级变化时】事件的出参 / Output parameters of "When Player Class Level Changes"
 */
export interface PlayerClassLevelChangesEvent {
  /**
   * 生效的玩家实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 变化前等级（变化前等级：整数）
   */
  readonly preChangeLevel: int;
  /**
   * 变化后等级（变化后等级：整数）
   */
  readonly postChangeLevel: int;
}
/**
 * 【玩家职业等级变化时】 When Player Class Level Changes
 * 分类：事件节点 / 十六、职业（XVI. Classes）
 *
 * 玩家职业等级变化时触发该事件发送给对应玩家，可以在该职业的职业节点图里收到
 *
 * @en This event is triggered when a Player's Class Level changes and is sent to the corresponding Player. It can be received in that Class's Node Graph
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerClassLevelChanges(handler: (ev: PlayerClassLevelChangesEvent) => void): void;

/**
 * 【玩家职业解除时】事件的出参 / Output parameters of "When Player Class Is Removed"
 */
export interface PlayerClassIsRemovedEvent {
  /**
   * 事件源实体（事件源实体：实体）
   */
  readonly eventSourceEntity: Entity;
  /**
   * 事件源GUID（事件源GUID：GUID）
   */
  readonly eventSourceGUID: GUID;
  /**
   * 更改前职业配置ID（更改前职业配置ID：配置ID）
   */
  readonly preModificationClassConfigID: ConfigId;
  /**
   * 更改后职业配置ID（更改后职业配置ID：配置ID）
   */
  readonly postModificationConfigID: ConfigId;
}
/**
 * 【玩家职业解除时】 When Player Class Is Removed
 * 分类：事件节点 / 十六、职业（XVI. Classes）
 *
 * 玩家职业解除时触发该事件发送给对应玩家，可以在更改前职业的职业节点图里收到
 *
 * @en This event is triggered when a Player's Class is removed and sent to the corresponding Player. It can be received in the Node Graph of the previous Class
 * @param handler 事件触发时调用，参数为该事件节点的全部出参
 */
export declare function onPlayerClassIsRemoved(handler: (ev: PlayerClassIsRemovedEvent) => void): void;
