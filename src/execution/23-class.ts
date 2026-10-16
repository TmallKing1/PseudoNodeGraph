// 自动生成：执行节点 / 二十三、职业（XXIII. Class）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【更改玩家职业】 Change Player Class
 * 分类：执行节点 / 二十三、职业（XXIII. Class）
 *
 * 修改玩家的当前职业为配置ID对应的职业，并对玩家当前所拥有的技能做出处理
 *
 * @en Set the Player's current Class to the Class referenced by the Config ID and process the Player's existing skills
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param classConfigID 该职业的标识（职业配置ID：配置ID）
 * @param existingSkillHandling 全部清理：将已有技能全部清理 保留无关技能：保留更换前后两个职业默认配置内均没有的技能（已有技能处理：枚举）
 */
export declare function changePlayerClass(targetPlayer: Entity, classConfigID: ConfigId, existingSkillHandling: E.ExistingSkillHandling): void;

/**
 * 【提升玩家当前职业经验】 Increase Player's Current Class EXP
 * 分类：执行节点 / 二十三、职业（XXIII. Class）
 *
 * 提升玩家当前职业经验，超出最大等级的部分会无效
 *
 * @en Increase the Player's current Class EXP. Any excess beyond the maximum Level will not take effect
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param exp 所要提升的经验值（经验值：整数）
 */
export declare function increasePlayersCurrentClassEXP(targetPlayer: Entity, exp: int): void;

/**
 * 【更改玩家当前职业等级】 Change Player's Current Class Level
 * 分类：执行节点 / 二十三、职业（XXIII. Class）
 *
 * 修改玩家当前职业等级，若超出定义的等级范围则会失效
 *
 * @en Set the Player's current Class Level. If it exceeds the defined range, the change will not take effect
 * @param targetPlayer 生效的玩家实体（目标玩家：实体）
 * @param level 修改后的等级（等级：整数）
 */
export declare function changePlayersCurrentClassLevel(targetPlayer: Entity, level: int): void;
