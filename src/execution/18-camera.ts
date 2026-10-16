// 自动生成：执行节点 / 十八、镜头（XVIII. Camera）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【切换主镜头模板】 Switch Main Camera Template
 * 分类：执行节点 / 十八、镜头（XVIII. Camera）
 *
 * 使目标玩家列表的镜头模板切换至指定模板
 *
 * @en Switch the Main Camera Template for the target Player List to the specified Template
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetPlayerList 生效的玩家列表（目标玩家列表：实体列表）
 * @param cameraTemplateName 镜头模板的标识（镜头模板名称：字符串）
 */
export declare function switchMainCameraTemplate(targetPlayerList: Entity[], cameraTemplateName: str): void;

/**
 * 【设置玩家镜头跟随实体】 Set Player Camera to Follow Entity
 * 分类：执行节点 / 十八、镜头（XVIII. Camera）
 *
 * 使对应玩家实体的镜头跟随指定的实体
 *
 * @en Set the specified Player Entity's camera to follow the target entity
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 * @param followEntity 镜头所要跟随的实体（跟随实体：实体）
 * @param cameraTemplateName 镜头模板的标识（镜头模板名称：字符串）
 */
export declare function setPlayerCameraToFollowEntity(playerEntity: Entity, followEntity: Entity, cameraTemplateName: str): void;

/**
 * 【重置玩家镜头跟随实体】 Reset Player Camera to Follow Entity
 * 分类：执行节点 / 十八、镜头（XVIII. Camera）
 *
 * 重置玩家镜头使其跟随玩家实体
 *
 * @en Reset the player camera to follow the Player Entity
 * @param playerEntity 生效的玩家实体（玩家实体：实体）
 */
export declare function resetPlayerCameraToFollowEntity(playerEntity: Entity): void;
