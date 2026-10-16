// 自动生成：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取在场玩家实体列表】 Get List of Player Entities on the Field
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取在场所有玩家实体组成的列表
 *
 * @en Returns a list of all Player Entities present in the scene
 * @returns 玩家实体列表（玩家实体列表：实体列表）
 */
export declare function getListOfPlayerEntitiesOnTheField(): Entity[];

/**
 * 【获取指定玩家所有角色实体】 Get All Character Entities of Specified Player
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取指定玩家实体的所有角色实体列表
 *
 * @en Returns a list of all Character Entities for the specified Player Entity
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 角色实体列表（角色实体列表：实体列表）
 */
export declare function getAllCharacterEntitiesOfSpecifiedPlayer(playerEntity: Entity): Entity[];

/**
 * 【获取角色归属的玩家实体】 Get Player Entity to Which the Character Belongs
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取角色实体所归属的玩家实体
 *
 * @en Returns the Player Entity that owns the Character Entity
 * @param characterEntity 角色实体（角色实体：实体）
 * @returns 所属玩家实体（所属玩家实体：实体）
 */
export declare function getPlayerEntityToWhichTheCharacterBelongs(characterEntity: Entity): Entity;

/**
 * 【获取玩家剩余复苏次数】 Get Player Remaining Revives
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取指定玩家实体的剩余复苏次数
 *
 * @en Returns the remaining number of revives for the specified Player Entity
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 剩余次数（剩余次数：整数）
 */
export declare function getPlayerRemainingRevives(playerEntity: Entity): int;

/**
 * 【获取玩家复苏耗时】 Get Player Revive Time
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取指定玩家实体的复苏耗时，单位秒
 *
 * @en Returns the revive duration of the specified Player Entity, in seconds
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 时长（时长：整数）
 */
export declare function getPlayerReviveTime(playerEntity: Entity): int;

/**
 * 【查询玩家角色是否全部倒下】 Query If All Player Characters Are Down
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 查询玩家的所有角色是否已全部倒下
 *
 * @en Check if all of the player's characters are downed
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 结果（结果：布尔值）
 */
export declare function queryIfAllPlayerCharactersAreDown(playerEntity: Entity): bool;

/**
 * 【根据玩家序号获取玩家GUID】 Get Player GUID by Player ID
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 根据玩家序号获取玩家GUID，玩家序号即该玩家为玩家几
 *
 * @en Returns the Player GUID based on Player ID, where the ID indicates which Player they are
 * @param playerID 玩家序号（玩家序号：整数）
 * @returns 玩家GUID（玩家GUID：GUID）
 */
export declare function getPlayerGUIDByPlayerID(playerID: int): GUID;

/**
 * 【根据玩家GUID获取玩家序号】 Get Player ID by Player GUID
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 根据玩家GUID获取玩家序号，玩家序号即该玩家为玩家几
 *
 * @en Returns the Player ID based on Player GUID, where the ID indicates which Player they are
 * @param playerGUID 玩家GUID（玩家GUID：GUID）
 * @returns 玩家序号（玩家序号：整数）
 */
export declare function getPlayerIDByPlayerGUID(playerGUID: GUID): int;

/**
 * 【获取玩家昵称】 Get Player Nickname
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获取玩家的昵称
 *
 * @en Returns the Player's nickname
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 玩家昵称（玩家昵称：字符串）
 */
export declare function getPlayerNickname(playerEntity: Entity): str;

/**
 * 【获得玩家客户端输入设备类型】 Get Player Client Input Device Type
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 获得玩家的客户端输入设备类型，根据用户界面的映射方式决定
 *
 * @en Returns the Player's local input device type, as determined by the Interface mapping method
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 分为键盘鼠标、手柄、触屏（输入设备类型：枚举）
 */
export declare function getPlayerClientInputDeviceType(playerEntity: Entity): E.InputDeviceType;

/**
 * 【查询经典模式角色编号】 Check Classic Mode Character ID
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 仅经典模式可用，查询目标角色的角色编号，可以查看附录对应具体是哪位角色 经典模式角色编号一览
 *
 * @en Available only in Classic Mode. You can search for the character ID of the target character to see the appendix for the specific character in Classic Mode Character ID List
 * @param targetCharacter 目标角色（目标角色：实体）
 * @returns 角色编号（角色编号：整数）
 */
export declare function checkClassicModeCharacterID(targetCharacter: Entity): int;

/**
 * 【获取指定玩家的前台角色】 Get Active Character of Specified Player
 * 分类：查询节点 / 九、玩家与角色相关（IX. Player and Character Related）
 *
 * 仅经典模式可用，获取玩家队伍内的前台角色
 *
 * @en Available only in Classic Mode, get the active character in the player's party.
 * @param playerEntity 玩家实体（玩家实体：实体）
 * @returns 前台角色实体（前台角色实体：实体）
 */
export declare function getActiveCharacterOfSpecifiedPlayer(playerEntity: Entity): Entity;
