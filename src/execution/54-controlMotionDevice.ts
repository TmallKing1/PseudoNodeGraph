// 自动生成：执行节点 / 五十四、操控运动器（LIV. Control Motion Device）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置玩家离开操控运动器】 Set Player to Leave Control Motion Device
 * 分类：执行节点 / 五十四、操控运动器（LIV. Control Motion Device）
 *
 * 设置玩家离开操控运动器
 *
 * @en Set the Player to leave the Control Motion Device
 * @param playerEntity 玩家实体（玩家实体：实体）
 */
export declare function setPlayerToLeaveControlMotionDevice(playerEntity: Entity): void;

/**
 * 【设置玩家跟随操控运动器】 Set Player to Follow Control Motion Device
 * 分类：执行节点 / 五十四、操控运动器（LIV. Control Motion Device）
 *
 * 设置玩家跟随操控运动器。受控、传送过程中，将无法跟随。
 *
 * @en Set the Player to follow t he Control Motion Device. The Player cannot follow it while under control effects or teleporting
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param controlMotionDeviceEntity 操控运动器实体（操控运动器实体：实体）
 */
export declare function setPlayerToFollowControlMotionDevice(playerEntity: Entity, controlMotionDeviceEntity: Entity): void;

/**
 * 【设置玩家激活操控运动器】 Set Player to Activate Control Motion Device
 * 分类：执行节点 / 五十四、操控运动器（LIV. Control Motion Device）
 *
 * 设置玩家激活操控运动器。若实体列表为空，则清空玩家所有激活的运动器。
 *
 * @en N ode Functions
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @param controlMotionDeviceEntityList 操控运动器实体列表（操控运动器实体列表：实体列表）
 */
export declare function setPlayerToActivateControlMotionDevice(playerEntity: Entity, controlMotionDeviceEntityList: Entity[]): void;
