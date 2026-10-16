// 自动生成：查询节点 / 二十、预设点（XX. Preset Points）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询预设点位置旋转】的多个出参 / Outputs of "Query Preset Point Position Rotation"
 */
export interface QueryPresetPointPositionRotationResult {
  /**
   * 位置（位置：三维向量）
   */
  readonly location: Vec3;
  /**
   * 旋转（旋转：三维向量）
   */
  readonly rotate: Vec3;
}
/**
 * 【查询预设点位置旋转】 Query Preset Point Position Rotation
 * 分类：查询节点 / 二十、预设点（XX. Preset Points）
 *
 * 查询指定预设点的位置和旋转
 *
 * @en Searches the Location and Rotation of the specified Preset Point
 * @param pointIndex 点位索引（点位索引：整数）
 * @returns QueryPresetPointPositionRotationResult（多出参，见接口字段）
 */
export declare function queryPresetPointPositionRotation(pointIndex: int): QueryPresetPointPositionRotationResult;

/**
 * 【以单位标签获取预设点位列表】 Get Preset Point List by Unit Tag
 * 分类：查询节点 / 二十、预设点（XX. Preset Points）
 *
 * 根据单位标签索引查询所有携带该单位标签的预设点位列表，输出值为该预设点位的索引
 *
 * @en Searches all Preset Points that carry the Unit Tag by its ID; outputs each Preset Point's ID
 * @param unitTagID 单位标签索引（单位标签索引：整数）
 * @returns 点位索引列表（点位索引列表：整数列表）
 */
export declare function getPresetPointListByUnitTag(unitTagID: int): int[];
