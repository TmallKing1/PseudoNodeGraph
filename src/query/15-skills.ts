// 自动生成：查询节点 / 十五、技能（XV. Skills）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【查询角色技能】 Query Character Skill
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 查询角色指定槽位的技能，会输出该技能的配置ID
 *
 * @en Searches the Skill in the specified slot of a Character; outputs that Skill's Config ID
 * @param characterEntity 角色实体（角色实体：实体）
 * @param characterSkillSlot 角色技能槽位（角色技能槽位：枚举）
 * @returns 技能配置ID（技能配置ID：配置ID）
 */
export declare function queryCharacterSkill(characterEntity: Entity, characterSkillSlot: E.SkillSlot): ConfigId;

/**
 * 【以技能实例ID查询技能配置ID】 Query Skill Config ID by Skill Instance ID
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 根据角色实体与指定技能实例ID查询对应的技能配置ID
 *
 * @en Retrieve the Skill Config ID that corresponds to the specified Character Entity and Skill Instance ID
 * @param characterEntity 角色实体（角色实体：实体）
 * @param skillInstanceID 技能实例ID（技能实例ID：整数）
 * @returns 技能配置ID（技能配置ID：配置ID）
 */
export declare function querySkillConfigIDBySkillInstanceID(characterEntity: Entity, skillInstanceID: int): ConfigId;

/**
 * 【以技能配置ID查询所有技能实例ID】 Query All Skill Instance IDs by Skill Config ID
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 根据角色实体与指定技能配置ID查询对应的技能实例ID列表
 *
 * @en Retrieve the Skill Instance ID List that corresponds to the specified Character Entity and Skill Config ID
 * @param characterEntity 角色实体（角色实体：实体）
 * @param skillConfigID 技能配置ID（技能配置ID：配置ID）
 * @returns 技能实例ID列表（技能实例ID列表：整数列表）
 */
export declare function queryAllSkillInstanceIDsBySkillConfigID(characterEntity: Entity, skillConfigID: ConfigId): int[];

/**
 * 【以技能槽位查询所有技能实例ID】 Query All Skill Instance IDs by Skill Slot
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 查询角色实体对应技能槽位上的所有技能实例ID
 *
 * @en Retrieve all Skill Instance IDs present in a specified Skill Slot for the given Character Entity
 * @param characterEntity 角色实体（角色实体：实体）
 * @param skillSlot 技能槽位（技能槽位：枚举）
 * @returns 技能实例ID列表（技能实例ID列表：整数列表）
 */
export declare function queryAllSkillInstanceIDsBySkillSlot(characterEntity: Entity, skillSlot: E.SkillSlot): int[];

/**
 * 【以技能槽位和技能配置ID查询技能实例ID】 Query Skill Instance ID by Skill Slot and Skill Config ID
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 根据技能配置ID查询角色实体对应技能槽位上的技能实例ID
 *
 * @en Retrieve the Skill Instance ID in a specified Skill Slot that corresponds to a given Skill Config ID for the Character Entity
 * @param characterEntity 角色实体（角色实体：实体）
 * @param skillSlot 技能槽位（技能槽位：枚举）
 * @param skillConfigID 技能配置ID（技能配置ID：配置ID）
 * @returns 技能实例ID（技能实例ID：整数）
 */
export declare function querySkillInstanceIDBySkillSlotAndSkillConfigID(characterEntity: Entity, skillSlot: E.SkillSlot, skillConfigID: ConfigId): int;

/**
 * 【查询技能属性组值】 Query Skill Attribute Group Value
 * 分类：查询节点 / 十五、技能（XV. Skills）
 *
 * 查询角色实体上指定技能组配置ID对应技能组的值
 *
 * @en Retrieve the value of a Skill Group for a Character Entity, based on the specified Skill Group Config ID
 * @param characterEntity 角色实体（角色实体：实体）
 * @param skillGroupConfigID 技能组配置ID（技能组配置ID：配置ID）
 * @returns 技能组值（技能组值：浮点数）
 */
export declare function querySkillAttributeGroupValue(characterEntity: Entity, skillGroupConfigID: ConfigId): float;
