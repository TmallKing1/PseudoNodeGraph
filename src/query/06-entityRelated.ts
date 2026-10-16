// 自动生成：查询节点 / 六、实体相关（VI. Entity Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhwbqlrw655q
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【获取自身实体】 Get Self Entity
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 返回该节点图所关联的实体
 *
 * @en Returns the Entity associated with this Node Graph
 * @returns 自身实体（自身实体：实体）
 */
export declare function getSelfEntity(): Entity;

/**
 * 【以GUID查询实体】 Query Entity by GUID
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 根据GUID查询实体
 *
 * @en Searches for an Entity by GUID
 * @param guid GUID（GUID：GUID）
 * @returns 实体（实体：实体）
 */
export declare function queryEntityByGUID(guid: GUID): Entity;

/**
 * 【以实体查询GUID】 Query GUID by Entity
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 查询指定实体的GUID
 *
 * @en Searches for the GUID of the specified Entity
 * @param entity 实体（实体：实体）
 * @returns GUID（GUID：GUID）
 */
export declare function queryGUIDByEntity(entity: Entity): GUID;

/**
 * 【获取实体位置与旋转】的多个出参 / Outputs of "Get Entity Location and Rotation"
 */
export interface GetEntityLocationAndRotationResult {
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
 * 【获取实体位置与旋转】 Get Entity Location and Rotation
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取目标实体的位置和旋转
 * 对玩家实体和关卡实体无意义
 *
 * @en Returns the Location and Rotation of the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetEntityLocationAndRotationResult（多出参，见接口字段）
 */
export declare function getEntityLocationAndRotation(targetEntity: Entity): GetEntityLocationAndRotationResult;

/**
 * 【获取实体类型】 Get Entity Type
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取目标实体的实体类型
 *
 * @en Returns the Entity Type of the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 分为玩家、角色、关卡、物件、造物（实体类型：枚举）
 */
export declare function getEntityType(targetEntity: Entity): E.EntityType;

/**
 * 【获取场上所有实体】 Get All Entities on the Field
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取当前场上所有在场的实体，该实体列表的数量可能会较大
 *
 * @en Returns all Entities currently present in the scene. The number of Entities in this List may be large
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getAllEntitiesOnTheField(): Entity[];

/**
 * 【获取场上指定类型实体】 Get Specified Type of Entities on the Field
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取当前场上指定类型的所有实体，该实体列表的数量可能会较大
 *
 * @en Returns all Entities of the specified type currently in the scene. The number of Entities in this list may be large
 * @param entityType 分为关卡、物件、玩家、角色、造物（实体类型：枚举）
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getSpecifiedTypeOfEntitiesOnTheField(entityType: E.EntityType): Entity[];

/**
 * 【获取场上指定元件ID的实体】 Get Entities With Specified Prefab on the Field
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取当前场上通过指定元件ID创建的所有实体
 *
 * @en Returns all Entities currently in the scene that were created by the specified Prefab ID
 * @param prefabID 元件ID（元件ID：元件ID）
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getEntitiesWithSpecifiedPrefabOnTheField(prefabID: PrefabId): Entity[];

/**
 * 【获取指定类型的实体列表】 Get Entity List by Specified Type
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 在目标实体列表中获取指定类型的实体列表
 *
 * @en Returns a list of specified Entity types from the Target Entity List
 * @param targetEntityList 目标实体列表（目标实体列表：实体列表）
 * @param entityType 分为玩家、角色、关卡、物件、造物（实体类型：枚举）
 * @returns 结果列表（结果列表：实体列表）
 */
export declare function getEntityListBySpecifiedType(targetEntityList: Entity[], entityType: E.EntityType): Entity[];

/**
 * 【获取指定元件ID的实体列表】 Get Entity List by Specified Prefab ID
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 在目标实体列表中获取以指定元件ID创建的实体列表
 *
 * @en Returns a list of Entities created with the specified Prefab ID from the Target Entity List
 * @param targetEntityList 目标实体列表（目标实体列表：实体列表）
 * @param prefabID 元件ID（元件ID：元件ID）
 * @returns 结果列表（结果列表：实体列表）
 */
export declare function getEntityListBySpecifiedPrefabID(targetEntityList: Entity[], prefabID: PrefabId): Entity[];

/**
 * 【获取指定阵营的实体列表】 Get Entity List by Specified Faction
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 在目标实体列表中获取归属于某个阵营的实体列表
 *
 * @en Returns the list of Entities belonging to a specific Faction from the Target Entity List
 * @param targetEntityList 目标实体列表（目标实体列表：实体列表）
 * @param faction 阵营（阵营：阵营）
 * @returns 结果列表（结果列表：实体列表）
 */
export declare function getEntityListBySpecifiedFaction(targetEntityList: Entity[], faction: Faction): Entity[];

/**
 * 【获取指定范围的实体列表】 Get Entity List by Specified Range
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 在目标实体列表中获取指定球形范围内的实体列表
 *
 * @en Returns a list of Entities within a specified spherical range from the Target Entity List
 * @param targetEntityList 目标实体列表（目标实体列表：实体列表）
 * @param centerPoint 中心点（中心点：三维向量）
 * @param radius 半径（半径：浮点数）
 * @returns 结果列表（结果列表：实体列表）
 */
export declare function getEntityListBySpecifiedRange(targetEntityList: Entity[], centerPoint: Vec3, radius: float): Entity[];

/**
 * 【查询实体是否在场】 Query If Entity Is on the Field
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 查询指定实体是否在场
 * 注意角色实体即使处于倒下状态，仍然认为在场
 *
 * @en Searches whether the specified Entity is present
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 是否在场（是否在场：布尔值）
 */
export declare function queryIfEntityIsOnTheField(targetEntity: Entity): bool;

/**
 * 【获取物件属性】的多个出参 / Outputs of "Get Object Attribute"
 */
export interface GetObjectAttributeResult {
  /**
   * 等级（等级：整数）
   */
  readonly level: int;
  /**
   * 当前生命值（当前生命值：浮点数）
   */
  readonly currentHP: float;
  /**
   * 上限生命值（上限生命值：浮点数）
   */
  readonly maxHP: float;
  /**
   * 当前攻击力（当前攻击力：浮点数）
   */
  readonly currentATK: float;
  /**
   * 基础攻击力（基础攻击力：浮点数）
   */
  readonly baseATK: float;
  /**
   * 当前防御力（当前防御力：浮点数）
   */
  readonly currentDEF: float;
  /**
   * 基础防御力（基础防御力：浮点数）
   */
  readonly baseDEF: float;
}
/**
 * 【获取物件属性】 Get Object Attribute
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取物件的相关基础属性
 *
 * @en Returns the Base Attributes of the Object
 * @param objectEntity 物件实体（物件实体：实体）
 * @returns GetObjectAttributeResult（多出参，见接口字段）
 */
export declare function getObjectAttribute(objectEntity: Entity): GetObjectAttributeResult;

/**
 * 【获取实体向前向量】 Get Entity Forward Vector
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取指定实体的向前向量（即该实体本地坐标系下的z轴正方向朝向）
 *
 * @en Returns the Forward Vector of the specified Entity (the positive Z-axis direction in the Entity's relative coordinate system)
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 向前向量（向前向量：三维向量）
 */
export declare function getEntityForwardVector(targetEntity: Entity): Vec3;

/**
 * 【获取实体向右向量】 Get Entity Right Vector
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取指定实体的向右向量（即该实体本地坐标系下的x轴正方向朝向）
 *
 * @en Returns the Right Vector of the specified Entity (the positive X-axis direction in the Entity's relative coordinate system)
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 向右向量（向右向量：三维向量）
 */
export declare function getEntityRightVector(targetEntity: Entity): Vec3;

/**
 * 【获取实体向上向量】 Get Entity Upward Vector
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取指定实体的向上向量（即该实体本地坐标系下的y轴正方向朝向）
 *
 * @en Returns the Upward Vector of the specified Entity (the positive Y-axis direction in the Entity's relative coordinate system)
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 向上向量（向上向量：三维向量）
 */
export declare function getEntityUpwardVector(targetEntity: Entity): Vec3;

/**
 * 【查询角色当前移动速度】的多个出参 / Outputs of "Query Character's Current Movement SPD"
 */
export interface QueryCharactersCurrentMovementSPDResult {
  /**
   * 当前速度（当前速度：浮点数）
   */
  readonly currentSpeed: float;
  /**
   * 速度向量（速度向量：三维向量）
   */
  readonly velocityVector: Vec3;
}
/**
 * 【查询角色当前移动速度】 Query Character's Current Movement SPD
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 仅当角色拥有【监听移动速率】的单位状态效果时，才能查询
 *
 * @en Can only be searched when the Character has the [Monitor Movement Speed] Unit Status effect
 * @param characterEntity 角色实体（角色实体：实体）
 * @returns QueryCharactersCurrentMovementSPDResult（多出参，见接口字段）
 */
export declare function queryCharactersCurrentMovementSPD(characterEntity: Entity): QueryCharactersCurrentMovementSPDResult;

/**
 * 【获取角色属性】的多个出参 / Outputs of "Get Character Attribute"
 */
export interface GetCharacterAttributeResult {
  /**
   * 等级（等级：整数）
   */
  readonly level: int;
  /**
   * 当前生命值（当前生命值：浮点数）
   */
  readonly currentHP: float;
  /**
   * 上限生命值（上限生命值：浮点数）
   */
  readonly maxHP: float;
  /**
   * 当前攻击力（当前攻击力：浮点数）
   */
  readonly currentATK: float;
  /**
   * 基础攻击力（基础攻击力：浮点数）
   */
  readonly baseATK: float;
  /**
   * 当前防御力（当前防御力：浮点数）
   */
  readonly currentDEF: float;
  /**
   * 基础防御力（基础防御力：浮点数）
   */
  readonly baseDEF: float;
  /**
   * 受打断值上限（受打断值上限：浮点数）
   */
  readonly interruptValueThreshold: float;
  /**
   * 当前受打断值（当前受打断值：浮点数）
   */
  readonly currentInterruptValue: float;
  /**
   * 当前受打断状态（当前受打断状态：枚举）
   */
  readonly currentInterruptStatus: E.InterruptStatus;
}
/**
 * 【获取角色属性】 Get Character Attribute
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取角色实体的基础属性
 *
 * @en Returns the Base Attributes of the Character Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetCharacterAttributeResult（多出参，见接口字段）
 */
export declare function getCharacterAttribute(targetEntity: Entity): GetCharacterAttributeResult;

/**
 * 【获取拥有者实体】 Get Owner Entity
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取指定目标实体的拥有者实体
 *
 * @en Returns the Owner Entity of the specified Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 拥有者实体（拥有者实体：实体）
 */
export declare function getOwnerEntity(targetEntity: Entity): Entity;

/**
 * 【获取实体拥有的实体列表】 Get List of Entities Owned by the Entity
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取所有以目标实体为拥有者的实体组成的列表
 *
 * @en Returns a list of all Entities owned by the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns 实体列表（实体列表：实体列表）
 */
export declare function getListOfEntitiesOwnedByTheEntity(targetEntity: Entity): Entity[];

/**
 * 【获取实体进阶属性】的多个出参 / Outputs of "Get Entity Advanced Attribute"
 */
export interface GetEntityAdvancedAttributeResult {
  /**
   * 暴击率（暴击率：浮点数）
   */
  readonly critRate: float;
  /**
   * 暴击伤害（暴击伤害：浮点数）
   */
  readonly critDMG: float;
  /**
   * 治疗加成（治疗加成：浮点数）
   */
  readonly healingBonus: float;
  /**
   * 受治疗加成（受治疗加成：浮点数）
   */
  readonly incomingHealingBonus: float;
  /**
   * 元素充能效率（元素充能效率：浮点数）
   */
  readonly energyRecharge: float;
  /**
   * 冷却缩减（冷却缩减：浮点数）
   */
  readonly cdReduction: float;
  /**
   * 超限模式护盾强效（超限模式护盾强效：浮点数）
   */
  readonly beyondModeShieldStrength: float;
  /**
   * 经典模式护盾强效（经典模式护盾强效：浮点数）
   */
  readonly classicModeShieldStrength: float;
}
/**
 * 【获取实体进阶属性】 Get Entity Advanced Attribute
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取实体的进阶属性
 *
 * @en Returns the Advanced Attributes of the Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetEntityAdvancedAttributeResult（多出参，见接口字段）
 */
export declare function getEntityAdvancedAttribute(targetEntity: Entity): GetEntityAdvancedAttributeResult;

/**
 * 【获取实体元素属性】的多个出参 / Outputs of "Get Entity Elemental Attribute"
 */
export interface GetEntityElementalAttributeResult {
  /**
   * 火元素伤害加成（火元素伤害加成：浮点数）
   */
  readonly pyroDMGBonus: float;
  /**
   * 火元素抗性（火元素抗性：浮点数）
   */
  readonly pyroRES: float;
  /**
   * 水元素伤害加成（水元素伤害加成：浮点数）
   */
  readonly hydroDMGBonus: float;
  /**
   * 水元素抗性（水元素抗性：浮点数）
   */
  readonly hydroRES: float;
  /**
   * 草元素伤害加成（草元素伤害加成：浮点数）
   */
  readonly dendroDMGBonus: float;
  /**
   * 草元素抗性（草元素抗性：浮点数）
   */
  readonly dendroRES: float;
  /**
   * 雷元素伤害加成（雷元素伤害加成：浮点数）
   */
  readonly electroDMGBonus: float;
  /**
   * 雷元素抗性（雷元素抗性：浮点数）
   */
  readonly electroRES: float;
  /**
   * 风元素伤害加成（风元素伤害加成：浮点数）
   */
  readonly anemoDMGBonus: float;
  /**
   * 风元素抗性（风元素抗性：浮点数）
   */
  readonly anemoRES: float;
  /**
   * 冰元素伤害加成（冰元素伤害加成：浮点数）
   */
  readonly cryoDMGBonus: float;
  /**
   * 冰元素抗性（冰元素抗性：浮点数）
   */
  readonly cryoRES: float;
  /**
   * 岩元素伤害加成（岩元素伤害加成：浮点数）
   */
  readonly geoDMGBonus: float;
  /**
   * 岩元素抗性（岩元素抗性：浮点数）
   */
  readonly geoRES: float;
  /**
   * 物理伤害加成（物理伤害加成：浮点数）
   */
  readonly physicalDMGBonus: float;
  /**
   * 物理抗性（物理抗性：浮点数）
   */
  readonly physicalRES: float;
}
/**
 * 【获取实体元素属性】 Get Entity Elemental Attribute
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取目标实体的元素相关属性
 *
 * @en Returns the Element Attributes of the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetEntityElementalAttributeResult（多出参，见接口字段）
 */
export declare function getEntityElementalAttribute(targetEntity: Entity): GetEntityElementalAttributeResult;

/**
 * 【查询实体的元素附着状态】的多个出参 / Outputs of "Check Entity's Elemental Effect Status"
 */
export interface CheckEntitysElementalEffectStatusResult {
  /**
   * 水附着（水附着：布尔值）
   */
  readonly affectedByHydro: bool;
  /**
   * 冰附着（冰附着：布尔值）
   */
  readonly affectedByCryo: bool;
  /**
   * 雷附着（雷附着：布尔值）
   */
  readonly affectedByElectro: bool;
  /**
   * 火附着（火附着：布尔值）
   */
  readonly affectedByPyro: bool;
  /**
   * 草附着（草附着：布尔值）
   */
  readonly affectedByDendro: bool;
  /**
   * 风附着（风附着：布尔值）
   */
  readonly affectedByAnemo: bool;
  /**
   * 岩附着（岩附着：布尔值）
   */
  readonly affectedByGeo: bool;
  /**
   * 冻结状态（冻结状态：布尔值）
   */
  readonly affectedByFrozen: bool;
  /**
   * 月感电不属于感电状态（感电状态：布尔值）
   */
  readonly affectedByElectroCharged: bool;
  /**
   * 燃烧状态（燃烧状态：布尔值）
   */
  readonly affectedByBurning: bool;
  /**
   * 石化状态（石化状态：布尔值）
   */
  readonly affectedByPetrification: bool;
  /**
   * 激化状态（激化状态：布尔值）
   */
  readonly affectedByCatalyze: bool;
}
/**
 * 【查询实体的元素附着状态】 Check Entity's Elemental Effect Status
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 查询实体当前的元素附着状态
 *
 * @en Check entity's elemental effect status
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns CheckEntitysElementalEffectStatusResult（多出参，见接口字段）
 */
export declare function checkEntitysElementalEffectStatus(targetEntity: Entity): CheckEntitysElementalEffectStatusResult;

/**
 * 【获取模型颜色和材质】的多个出参 / Outputs of "Get Model Color & Material"
 */
export interface GetModelColorAndMaterialResult {
  /**
   * 是否开启自定义颜色（是否开启自定义颜色：布尔值）
   */
  readonly enableCustomColor: bool;
  /**
   * 颜色叠加模式（颜色叠加模式：枚举）
   */
  readonly colorBlendMode: E.ColorBlendType;
  /**
   * 颜色（颜色：整数）
   */
  readonly color: int;
  /**
   * 颜色透明度（颜色透明度：浮点数）
   */
  readonly colorOpacity: float;
  /**
   * 是否开启自定义材质（是否开启自定义材质：布尔值）
   */
  readonly enableCustomMaterial: bool;
  /**
   * 材质（材质：枚举）
   */
  readonly material: E.FillMaterialType;
}
/**
 * 【获取模型颜色和材质】 Get Model Color & Material
 * 分类：查询节点 / 六、实体相关（VI. Entity Related）
 *
 * 获取实体模型的【材质】功能是否开启、【叠加颜色】功能是否开启、以及具体【材质】【颜色叠加方式】【叠加颜色】
 *
 * @en Retrieves the enabled states of the entity model's material and color override settings, along with the assigned material, color blend mode, and override color.
 * @param targetEntity 目标实体（目标实体：实体）
 * @returns GetModelColorAndMaterialResult（多出参，见接口字段）
 */
export declare function getModelColorAndMaterial(targetEntity: Entity): GetModelColorAndMaterialResult;
