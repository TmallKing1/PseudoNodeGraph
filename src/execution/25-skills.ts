// 自动生成：执行节点 / 二十五、技能（XXV. Skills）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【增加技能资源量】 Increase Skill Resource Amount
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 修改技能的资源量，会在当前值上加上增加值，增加值可以为负数
 *
 * @en Modifying the resource amount of a skill will add an increase to the current value; this increase can be a negative number.
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillResourceConfigID 技能资源的标识（技能资源配置ID：配置ID）
 * @param increaseValue 修改后的值为：原值+增加值（增加值：浮点数）
 */
export declare function increaseSkillResourceAmount(targetEntity: Entity, skillResourceConfigID: ConfigId, increaseValue: float): void;

/**
 * 【设置技能资源量】 Set Skill Resource Amount
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 修改角色的技能资源量
 *
 * @en Edit the Character's skill resource amount
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillResourceConfigID 技能资源的标识（技能资源配置ID：配置ID）
 * @param targetValue 修改后的值为该输入值（目标值：浮点数）
 */
export declare function setSkillResourceAmount(targetEntity: Entity, skillResourceConfigID: ConfigId, targetValue: float): void;

/**
 * 【添加角色技能】 Add Character Skill
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 为指定目标角色的某个技能槽位添加技能
 *
 * @en Add a skill to the specified Target Character's Skill Slot
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillConfigID 技能的标识（技能配置ID：配置ID）
 * @param skillSlot 要添加的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（技能槽位：枚举）
 * @param originalSlotSkillHandling 销毁：销毁原技能 保留槽位关系：继续保留在当前槽位，在新绑定的技能实例被移除后会自动显示在该槽位上 脱离槽位关系：必须被重新绑定到指定槽位才可以显示在槽位上（原槽位技能处理：枚举）
 * @returns 替换的技能实例ID（替换的技能实例ID：整数）
 */
export declare function addCharacterSkill(targetEntity: Entity, skillConfigID: ConfigId, skillSlot: E.SkillSlot, originalSlotSkillHandling: E.OriginalSlotSkillHandling): int;

/**
 * 【以ID删除角色技能】 Delete Character Skill by ID
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 遍历角色的所有槽位，删除所有指定配置ID的技能
 *
 * @en Iterate through and delete all skills with the specified Config ID across all of the Character's slots
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillConfigID 技能的标识（技能配置ID：配置ID）
 */
export declare function deleteCharacterSkillByID(targetEntity: Entity, skillConfigID: ConfigId): void;

/**
 * 【初始化角色技能】 Initialize Character Skill
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 使目标角色的技能重置为职业模板上配置的技能
 *
 * @en Reset the Target Character's skills to those defined in the Class Template
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param characterSkillSlot 要初始化的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（角色技能槽位：枚举）
 */
export declare function initializeCharacterSkill(targetEntity: Entity, characterSkillSlot: E.SkillSlot): void;

/**
 * 【以槽位删除角色技能】 Delete Character Skill by Slot
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 删除目标角色指定槽位的技能
 *
 * @en Delete the skill in the specified slot of the Target Character
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param characterSkillSlot 要删除的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（角色技能槽位：枚举）
 */
export declare function deleteCharacterSkillBySlot(targetEntity: Entity, characterSkillSlot: E.SkillSlot): void;

/**
 * 【设置角色技能冷却】 Set Character Skill CD
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 直接设置目标角色某个技能槽位的冷却时间为指定值
 *
 * @en Directly set the cooldown time of a specific skill slot on the target character to a specified value.
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param characterSkillSlot 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（角色技能槽位：枚举）
 * @param cdTime 修改后的冷却时间为该输入值（冷却时间：浮点数）
 * @param limitMaximumCDTime 为“是”可以限制修改后的冷却时间不小于所限制的值（是否限制最大冷却时间：布尔值）
 */
export declare function setCharacterSkillCD(targetEntity: Entity, characterSkillSlot: E.SkillSlot, cdTime: float, limitMaximumCDTime: bool): void;

/**
 * 【增加角色技能冷却】 Increase Character Skill CD
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 修改目标角色某个技能槽位的冷却，会在当前冷却时间上加上增加值，增加值可以为负数
 *
 * @en Modifying the cooldown of a target character's skill slot will add an increase to the current cooldown time; this increase can be a negative number.
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param characterSkillSlot 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（角色技能槽位：枚举）
 * @param cdTimeIncreaseValue 修改后的值为：原值+增加值（冷却时间增加值：浮点数）
 * @param limitMaximumCDTime 为“是”可以限制修改后的冷却时间不小于所限制的值（是否限制最大冷却时间：布尔值）
 */
export declare function increaseCharacterSkillCD(targetEntity: Entity, characterSkillSlot: E.SkillSlot, cdTimeIncreaseValue: float, limitMaximumCDTime: bool): void;

/**
 * 【按最大冷却时间比例设置技能冷却】 Set Skill CD Based on Maximum CD Percentage
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 通过技能最大冷却时间的比例来修改角色某个技能槽位内的技能
 *
 * @en Modify the skill in a character's skill slot by adjusting the percentage of the skill's maximum cooldown time.
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param characterSkillSlot 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能（角色技能槽位：枚举）
 * @param ratioValue 修改后的实际冷却时间为：原冷却时间*比例值（比例值：浮点数）
 * @param limitMaximumCDTime 为“是”可以限制修改后的冷却时间不小于所限制的值（是否限制最大冷却时间：布尔值）
 */
export declare function setSkillCDBasedOnMaximumCDPercentage(targetEntity: Entity, characterSkillSlot: E.SkillSlot, ratioValue: float, limitMaximumCDTime: bool): void;

/**
 * 【设置指定技能实例冷却】 Set CD for Specified Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 直接设置目标角色指定技能实例的冷却时间为指定值
 *
 * @en Directly sets the cooldown of the specified skill instance on the target character to the specified value
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 * @param cd 修改后的冷却时间为该输入值（冷却时间：浮点数）
 * @param limitMaximumCDTime 为“是”时，修改后的冷却时间不会超过技能配置的最大冷却时间（是否限制最大冷却时间：布尔值）
 */
export declare function setCDForSpecifiedSkillInstance(targetEntity: Entity, skillInstanceID: int, cd: float, limitMaximumCDTime: bool): void;

/**
 * 【增加指定技能实例冷却】 Increase CD for Specified Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 增加目标角色指定技能实例的冷却时间；输入负数时会减少冷却时间
 *
 * @en Increases the cooldown of the specified skill instance on the target character. A negative input reduces the cooldown
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 * @param cdIncreaseValue 修改后的值为：原值+增加值（冷却时间增加值：浮点数）
 * @param limitMaximumCDTime 为“是”时，修改后的冷却时间不会超过技能配置的最大冷却时间（是否限制最大冷却时间：布尔值）
 */
export declare function increaseCDForSpecifiedSkillInstance(targetEntity: Entity, skillInstanceID: int, cdIncreaseValue: float, limitMaximumCDTime: bool): void;

/**
 * 【绑定自定义技能实例到指定槽位】 Bind Custom Skill Instance to Specified Slot
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 将指定的技能实例绑定到指定的技能槽位上
 *
 * @en Bind the specified skill instance to the specified skill slot
 * @param targetEntity 生效的角色实体（目标实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 * @param skillSlot 技能槽位（技能槽位：枚举）
 * @param originalSlotSkillHandling 销毁：销毁原技能 保留槽位关系：继续保留在当前槽位，在新绑定的技能实例被移除后会自动显示在该槽位上 脱离槽位关系：必须被重新绑定到指定槽位才可以显示在槽位上（原槽位技能处理：枚举）
 * @returns 原槽位技能实例ID（原槽位技能实例ID：整数）
 */
export declare function bindCustomSkillInstanceToSpecifiedSlot(targetEntity: Entity, skillInstanceID: int, skillSlot: E.SkillSlot, originalSlotSkillHandling: E.OriginalSlotSkillHandling): int;

/**
 * 【解绑技能实例】 Unbind Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 解绑角色实体上的指定技能实例
 *
 * @en Unbind the specified skill instance from the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 */
export declare function unbindSkillInstance(characterEntity: Entity, skillInstanceID: int): void;

/**
 * 【解绑槽位上的所有技能实例】 Unbind all Skill Instances on the Slot
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 解绑角色实体上指定槽位的所有技能实例
 *
 * @en Unbind all skill instances on the specified slot of the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param specifiedSlot 指定槽位（指定槽位：枚举）
 * @returns 该槽位上所有被解绑的技能实例ID组成的列表（解绑的技能实例ID列表：整数列表）
 */
export declare function unbindAllSkillInstancesOnTheSlot(characterEntity: Entity, specifiedSlot: E.SkillSlot): int[];

/**
 * 【创建自定义技能实例】 Create Custom Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 用角色实体上指定技能配置ID对应的技能创建其技能实例
 *
 * @en Create a skill instance from the specified config ID for the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param skillConfigID 技能的标识（技能配置ID：配置ID）
 * @returns 技能实例的标识（技能实例ID：整数）
 */
export declare function createCustomSkillInstance(characterEntity: Entity, skillConfigID: ConfigId): int;

/**
 * 【销毁自定义技能实例】 Destroy Custom Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 销毁角色实体上的指定技能实例
 *
 * @en Destroy the specified skill instance on the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 */
export declare function destroyCustomSkillInstance(characterEntity: Entity, skillInstanceID: int): void;

/**
 * 【施放指定槽位面板技能】 Cast Skill From Specified Panel Slot
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 使角色实体施放其对应技能槽位当前处于前台的技能
 * 按键可用需要满足该技能被绑定到了一个按钮上且当前处于前台
 *
 * @en Cast the skill currently active in the specified skill slot on the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param skillSlot 技能槽位（技能槽位：枚举）
 * @param checkKeyAvailability 是：当前按键可用时该技能才会被施放 否：无论当前按键是否可用该技能都会被施放（是否校验按键可用：布尔值）
 */
export declare function castSkillFromSpecifiedPanelSlot(characterEntity: Entity, skillSlot: E.SkillSlot, checkKeyAvailability: bool): void;

/**
 * 【施放指定技能实例】 Cast Specified Skill Instance
 * 分类：执行节点 / 二十五、技能（XXV. Skills）
 *
 * 使角色实体施放指定技能实例ID对应的技能
 * 按键可用需要满足该技能被绑定到了一个按钮上且当前处于前台
 *
 * @en Cast the skill corresponding to the specified skill instance ID on the Character Entity
 * @param characterEntity 生效的角色实体（角色实体：实体）
 * @param skillInstanceID 技能实例的标识（技能实例ID：整数）
 * @param checkKeyAvailability 是：当前按键可用时该技能才会被施放 否：无论当前按键是否可用该技能都会被施放（是否校验按键可用：布尔值）
 */
export declare function castSpecifiedSkillInstance(characterEntity: Entity, skillInstanceID: int, checkKeyAvailability: bool): void;
