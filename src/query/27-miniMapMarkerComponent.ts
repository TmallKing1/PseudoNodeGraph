// 自动生成：查询节点 / 二十七、小地图标识组件（XXVII. Mini-Map Marker Component）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询指定小地图标识信息】的多个出参 / Outputs of "Query Specified Mini-Map Marker Information"
 */
export interface QuerySpecifiedMiniMapMarkerInformationResult {
  /**
   * 查询的小地图标识的生效状态（生效状态：布尔值）
   */
  readonly activationStaet: bool;
  /**
   * 返回可见该标识的玩家列表（可见标识的玩家列表：实体列表）
   */
  readonly listOfPlayersWithVisibleMarkers: Entity[];
  /**
   * 返回追踪该标识的玩家列表（追踪标识的玩家列表：实体列表）
   */
  readonly listOfPlayersTrackingMarkers: Entity[];
}
/**
 * 【查询指定小地图标识信息】 Query Specified Mini-Map Marker Information
 * 分类：查询节点 / 二十七、小地图标识组件（XXVII. Mini-Map Marker Component）
 *
 * 查询目标实体上小地图标识组件中特定序号对应的小地图标识的信息
 *
 * @en Searches the information of the Mini-map Marker with the specified ID in the Mini-map Marker Component on the Target Entity
 * @param targetEntity 运行时的实体（目标实体：实体）
 * @param miniMapMarkerID 要查询的指定小地图标识的序号（小地图标识序号：整数）
 * @returns QuerySpecifiedMiniMapMarkerInformationResult（多出参，见接口字段）
 */
export declare function querySpecifiedMiniMapMarkerInformation(targetEntity: Entity, miniMapMarkerID: int): QuerySpecifiedMiniMapMarkerInformationResult;

/**
 * 【获取实体的小地图标识状态】的多个出参 / Outputs of "Get Entity's Mini-Map Marker Status"
 */
export interface GetEntitysMiniMapMarkerStatusResult {
  /**
   * 该实体的所有小地图标识枚举列表（全量小地图标识序号列表：整数列表）
   */
  readonly fullMiniMapMarkerIDList: int[];
  /**
   * 该实体的所有生效小地图标识枚举列表（生效的小地图标识序号列表：整数列表）
   */
  readonly activeMiniMapMarkerIDList: int[];
  /**
   * 该实体的所有未生效小地图标识枚举列表（未生效的小地图标识序号列表：整数列表）
   */
  readonly inactiveMiniMapMarkerIDList: int[];
}
/**
 * 【获取实体的小地图标识状态】 Get Entity's Mini-Map Marker Status
 * 分类：查询节点 / 二十七、小地图标识组件（XXVII. Mini-Map Marker Component）
 *
 * 查询实体当前小地图标识的配置及生效情况
 *
 * @en Searches the configuration and activation status of the Entity's current Mini-map Marker
 * @param targetEntity 运行时的实体（目标实体：实体）
 * @returns GetEntitysMiniMapMarkerStatusResult（多出参，见接口字段）
 */
export declare function getEntitysMiniMapMarkerStatus(targetEntity: Entity): GetEntitysMiniMapMarkerStatusResult;
