// 自动生成：执行节点 / 十四、投射物（XIV. Projectiles）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【创建投射物】 Create Projectile
 * 分类：执行节点 / 十四、投射物（XIV. Projectiles）
 *
 * 根据元件ID创建一个投射物实体。与【创建元件】功能类似，但多一个【追踪目标】参数，可以为创建的投射物实体的投射运动器组件中追踪投射类型设置追踪目标
 *
 * @en Create a Projectile Entity using the Prefab ID. This function is similar to [Create Prefab], but includes an additional [Track Target] parameter, which sets the tracking target for projectiles of the Tracking type in the Projectile Motion Device Component of the created Entity
 * @param prefabID 该投射物元件的标识（元件ID：元件ID）
 * @param location 绝对位置（位置：三维向量）
 * @param rotate 绝对旋转（旋转：三维向量）
 * @param ownerEntity 可决定该创建后实体是否归属于某个实体（拥有者实体：实体）
 * @param trackTarget 投射运动器组件中追踪投射类型设置的追踪目标（追踪目标：实体）
 * @param overwriteLevel 为否时，【等级】参数不生效（是否覆写等级：布尔值）
 * @param level 决定该实体创建时的等级（等级：整数）
 * @param unitTagIndexList 可决定该实体创建时携带的单位标签（单位标签索引列表：整数列表）
 * @returns 该实体继承该投射物元件的属性（创建出的实体：实体）
 */
export declare function createProjectile(prefabID: PrefabId, location: Vec3, rotate: Vec3, ownerEntity: Entity, trackTarget: Entity, overwriteLevel: bool, level: int, unitTagIndexList: int[]): Entity;
