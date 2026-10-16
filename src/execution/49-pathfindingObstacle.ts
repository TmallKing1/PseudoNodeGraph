// 自动生成：执行节点 / 四十九、寻路阻挡（XLIX. Pathfinding Obstacle）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【激活/关闭寻路阻挡功能】 Enable/Disable Pathfinding Obstacle Feature
 * 分类：执行节点 / 四十九、寻路阻挡（XLIX. Pathfinding Obstacle）
 *
 * 可以修改目标实体的寻路阻挡功能是否激活
 *
 * @en You can modify whether the pathfinding obstacle function of the target entity is activated.
 * @param targetEntity 仅对物件生效（目标实体：实体）
 * @param activate 是否激活（是否激活：布尔值）
 */
export declare function enableDisablePathfindingObstacleFeature(targetEntity: Entity, activate: bool): void;

/**
 * 【激活/关闭寻路阻挡】 Enable/Disable Pathfinding Obstacle
 * 分类：执行节点 / 四十九、寻路阻挡（XLIX. Pathfinding Obstacle）
 *
 * 可以修改目标实体的寻路阻挡组件中对应序号的寻路阻挡是否激活
 *
 * @en You can modify whether the pathfinding obstacke component of the target entity, corresponding to the specified index, is active.
 * @param targetEntity 仅对物件生效（目标实体：实体）
 * @param pathfindingObstacleID 寻路阻挡序号（寻路阻挡序号：整数）
 * @param activate 是否激活（是否激活：布尔值）
 */
export declare function enableDisablePathfindingObstacle(targetEntity: Entity, pathfindingObstacleID: int, activate: bool): void;
