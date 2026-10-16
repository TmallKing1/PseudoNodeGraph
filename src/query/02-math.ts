// 自动生成：查询节点 / 二、数学（II. Math）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取随机浮点数】 Get Random Floating Point Number
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 获取一个大于等于下限，小于等于上限的随机浮点数。注意该节点生成的随机数包含上下限
 *
 * @en Returns a random Floating Point Number that is ≥ the lower limit and ≤ the upper limit. The range is inclusive
 * @param lowerLimit 下限（下限：浮点数）
 * @param upperLimit 上限（上限：浮点数）
 * @returns 结果（结果：浮点数）
 */
export function getRandomFloatingPointNumber(lowerLimit: float, upperLimit: float): float {
  return lowerLimit + Math.random() * (upperLimit - lowerLimit); // 包含上下限
}

/**
 * 【权重随机】 Weighted Random
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 输入一组权重组成的权重列表，按照权重随机选择其中的一个序号
 * 例如：权重列表为{10，20，66，4}，那么此节点分别由10%、20%、66%、4%的概率输出0、1、2、3
 *
 * @en Takes a list of weights and randomly selects an ID based on the weight distribution
 * @param weightList 权重列表（权重列表：整数列表）
 * @returns 权重序号（权重序号：整数）
 */
export function weightedRandom(weightList: int[]): int {
  const total = weightList.reduce((s, w) => s + w, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weightList.length; i++) { r -= weightList[i]; if (r < 0) return i; }
  return weightList.length - 1;
}

/**
 * 【圆周率】 Pi (π)
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回圆周率π的近似值，约为3.142
 *
 * @en Returns the approximate value of π (≈ 3.142)
 * @returns 圆周率（π）（圆周率（π）：浮点数）
 */
export function pi(): float {
  return Math.PI;
}

/**
 * 【三维向量：零向量】 3D Vector: Zero Vector
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(0,0,0)
 *
 * @en Return (0,0,0)
 * @returns (0,0,0)（(0,0,0)：三维向量）
 */
export function _3dVectorZeroVector(): Vec3 {
  return { x: 0, y: 0, z: 0 };
}

/**
 * 【三维向量：上方】 3D Vector: Up
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(0,1,0)
 *
 * @en Return (0,1,0)
 * @returns (0,1,0)（(0,1,0)：三维向量）
 */
export function _3dVectorUp(): Vec3 {
  return { x: 0, y: 1, z: 0 };
}

/**
 * 【三维向量：下方】 3D Vector: Down
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(0,-1,0)
 *
 * @en Return (0,-1,0)
 * @returns (0,-1,0)（(0,-1,0)：三维向量）
 */
export function _3dVectorDown(): Vec3 {
  return { x: 0, y: -1, z: 0 };
}

/**
 * 【三维向量：左侧】 3D Vector: Left
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(-1,0,0)
 *
 * @en Return (-1,0,0)
 * @returns (-1,0,0)（(-1,0,0)：三维向量）
 */
export function _3dVectorLeft(): Vec3 {
  return { x: -1, y: 0, z: 0 }; // 推测：X 轴为右方向
}

/**
 * 【三维向量：右侧】 3D Vector: Right
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(1,0,0)
 *
 * @en Return (1,0,0)
 * @returns (1,0,0)（(1,0,0)：三维向量）
 */
export function _3dVectorRight(): Vec3 {
  return { x: 1, y: 0, z: 0 }; // 推测：X 轴为右方向
}

/**
 * 【三维向量：前方】 3D Vector: Forward
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(0,0,1)
 *
 * @en Return (0,0,1)
 * @returns (0,0,1)（(0,0,1)：三维向量）
 */
export function _3dVectorForward(): Vec3 {
  return { x: 0, y: 0, z: 1 }; // 推测：Z 轴为前方向
}

/**
 * 【三维向量：后方】 3D Vector: Backward
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 返回(0,0,-1)
 *
 * @en Return (0,0,-1)
 * @returns (0,0,-1)（(0,0,-1)：三维向量）
 */
export function _3dVectorBackward(): Vec3 {
  return { x: 0, y: 0, z: -1 };
}

/**
 * 【获取随机整数】 Get Random Integer
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 获取一个大于等于下限，小于等于上限的随机整数。注意该节点生成的随机数包含上下限
 *
 * @en Returns a random Integer that is ≥ the lower limit and ≤ the upper limit. The range is inclusive
 * @param lowerLimit 下限（下限：整数）
 * @param upperLimit 上限（上限：整数）
 * @returns 结果（结果：整数）
 */
export function getRandomInteger(lowerLimit: int, upperLimit: int): int {
  return lowerLimit + Math.floor(Math.random() * (upperLimit - lowerLimit + 1)); // 包含上下限
}

/**
 * 【查询时间戳（UTC+0时区）】 Query Timestamp (UTC+0)
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 可以查询当前的时间戳
 *
 * @en Searches the current timestamp
 * @returns 时间戳（时间戳：整数）
 */
export declare function queryTimestampUTC(): int;

/**
 * 【查询服务器时区】 Query Server Time Zone
 * 分类：查询节点 / 二、数学（II. Math）
 *
 * 可以查询服务器的时区
 *
 * @en Searches the Server's timezone
 * @returns 时区（时区：整数）
 */
export declare function queryServerTimeZone(): int;
