// 自动生成：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置小地图缩放】 Set Mini-Map Zoom
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 设置目标玩家的小地图界面控件的地图比例
 *
 * @en Set the map scale of the mini-map interface control for the target player.
 * @param targetPlayer 目标玩家（目标玩家：实体）
 * @param zoomDimensions 缩放尺寸（缩放尺寸：浮点数）
 */
export declare function setMiniMapZoom(targetPlayer: Entity, zoomDimensions: float): void;

/**
 * 【设置小地图标识生效状态】 Set Mini-Map Marker Activation Status
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 通过节点输入的小地图标识序号列表，批量修改目标实体的小地图标识生效状态
 *
 * @en Edit the active state of mini-map markers on the Target Entity in batches using the input list of Mini-map Marker IDs
 * @param targetEntity 要修改的小地图标识组件归属的实体（目标实体：实体）
 * @param miniMapMarkerIDList 需要指定状态的小地图标识序号列表 未配置的小地图标识会改为相反状态（小地图标识序号列表：整数列表）
 * @param active 若输入为“是”， 输入序号列表指定的序号，对应小地图标识状态改为生效状态 不在序号列表中的序号，对应小地图标识状态改为不生效状态（是否生效：布尔值）
 */
export declare function setMiniMapMarkerActivationStatus(targetEntity: Entity, miniMapMarkerIDList: int[], active: bool): void;

/**
 * 【设置可见小地图标识的玩家列表】 Set Player List for Visible Mini-Map Markers
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 目标实体的小地图标识组件上对应序号的小地图标识对玩家列表中的玩家可见
 *
 * @en The mini-map marker at the specified ID in the Target Entity's Mini-map Marker Component is visible to all Players in the Player List
 * @param targetEntity 要修改的小地图标识组件归属的实体（目标实体：实体）
 * @param miniMapMarkerID 要修改的指定小地图标识的序号（小地图标识序号：整数）
 * @param playerList 目标实体的指定小地图序号，只有输入玩家可见（玩家列表：实体列表）
 */
export declare function setPlayerListForVisibleMiniMapMarkers(targetEntity: Entity, miniMapMarkerID: int, playerList: Entity[]): void;

/**
 * 【设置追踪小地图标识的玩家列表】 Set Player List for Tracking Mini-Map Markers
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 将目标实体的对应序号的小地图标识对入参玩家设置为追踪表现
 *
 * @en Set the mini-map marker of the target entity with the corresponding index to a tracking appearance for the specified player.
 * @param targetEntity 目标实体（目标实体：实体）
 * @param miniMapMarkerID 小地图标识序号（小地图标识序号：整数）
 * @param playerList 玩家列表（玩家列表：实体列表）
 */
export declare function setPlayerListForTrackingMiniMapMarkers(targetEntity: Entity, miniMapMarkerID: int, playerList: Entity[]): void;

/**
 * 【设置小地图标识的玩家标记】 Set Player Markers on the Mini-Map
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 若小地图标识选择了玩家标记，在节点图输入对应玩家实体后，目标实体在小地图上的显示会变成输入玩家实体的头像
 *
 * @en When the Player Marker option is selected and a corresponding Player Entity is linked in the Node Graph, the Target Entity's display on the mini-map changes to that Player's avatar
 * @param targetEntity 要修改的小地图标识组件归属的实体（目标实体：实体）
 * @param miniMapMarkerID 要修改的指定小地图标识的序号（小地图标识序号：整数）
 * @param correspondingPlayerEntity 修改后为对应玩家实体的头像（对应玩家实体：实体）
 */
export declare function setPlayerMarkersOnTheMiniMap(targetEntity: Entity, miniMapMarkerID: int, correspondingPlayerEntity: Entity): void;

/**
 * 【切换自定义地图】 Switch Custom Maps
 * 分类：执行节点 / 四十、小地图标识组件（XL. Mini-Map Marker Component）
 *
 * 可以切换目标玩家当前生效的小地图配置
 *
 * @en Allows switching the Target Player's currently active minimap configuration
 * @param targetPlayer 目标玩家（目标玩家：实体）
 * @param mapConfigID 地图配置ID（地图配置ID：配置ID）
 * @param displayMap 是则会显示地图（是否显示地图：布尔值）
 */
export declare function switchCustomMaps(targetPlayer: Entity, mapConfigID: ConfigId, displayMap: bool): void;
