// 自动生成：执行节点 / 五、实体相关（V. Entity Related）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【销毁实体】 Destroy Entity
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 销毁指定实体，会有销毁表现，也可以触发一些销毁后才会触发的逻辑，比如本地投射物中的生命周期结束时行为 、销毁的造物会掉落能量球
 * 在关卡实体上可以监听到【实体销毁时】以及【实体移除/销毁时】事件
 *
 * @en Destroying a specified entity will result in a destruction effect and can also trigger logic that only occurs after destruction, such as end-of-life behaviors in local projectiles or the dropping of energy orbs from destroyed creations.
 * @param targetEntity 所要销毁的实体（目标实体：实体）
 */
export declare function destroyEntity(targetEntity: Entity): void;

/**
 * 【创建实体】 Create Entity
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 根据GUID创建实体。要求预先将其布设在场景内
 *
 * @en Create an Entity by GUID. The Entity must be pre-placed in the Scene
 * @param targetGUID 该实体的标识（目标GUID：GUID）
 * @param unitTagIndexList 可决定该实体创建时携带的单位标签（单位标签索引列表：整数列表）
 */
export declare function createEntity(targetGUID: GUID, unitTagIndexList: int[]): void;

/**
 * 【创建元件】 Create Prefab
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 根据元件ID创建一个实体
 *
 * @en Create an Entity by Prefab ID
 * @param prefabID 该元件的标识（元件ID：元件ID）
 * @param location 绝对位置（位置：三维向量）
 * @param rotate 绝对旋转（旋转：三维向量）
 * @param ownerEntity 可决定该创建后实体是否归属于某个实体（拥有者实体：实体）
 * @param overwriteLevel 为否时，【等级】参数不生效（是否覆写等级：布尔值）
 * @param level 决定该实体创建时的等级（等级：整数）
 * @param unitTagIndexList 可决定该实体创建时携带的单位标签（单位标签索引列表：整数列表）
 * @returns 以该方式创建的实体没有GUID（创建后实体：实体）
 */
export declare function createPrefab(prefabID: PrefabId, location: Vec3, rotate: Vec3, ownerEntity: Entity, overwriteLevel: bool, level: int, unitTagIndexList: int[]): Entity;

/**
 * 【激活/关闭模型显示】 Activate/Disable Model Display
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 更改实体的模型可见性属性设置，从而使实体的模型可见/不可见
 *
 * @en Edit the Entity's Model Visibility attribute to make its Model visible or hidden
 * @param targetEntity 所要修改的实体（目标实体：实体）
 * @param activate “是”为使模型可见（是否激活：布尔值）
 */
export declare function activateDisableModelDisplay(targetEntity: Entity, activate: bool): void;

/**
 * 【移除实体】 Remove Entity
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 移除指定实体，与销毁实体不同的是，不会有销毁表现，也不会触发销毁后才会触发的逻辑 ，比如移除的造物不会掉落能量球
 * 移除实体不会触发【实体销毁时】事件，但可以触发【实体移除/销毁时】事件
 *
 * @en Removing a specified entity is different from destroying it; there will be no destruction effect, and it will not trigger any logic that would occur after destruction, such as end-of-life behaviors in local projectiles or the dropping of energy orbs from removed creations.
 * @param targetEntity 所要移除的实体（目标实体：实体）
 */
export declare function removeEntity(targetEntity: Entity): void;

/**
 * 【创建元件组】 Create Prefab Group
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 根据元件组索引创建该元件组内包含的实体
 *
 * @en Create the Entities contained in the Prefab Group by Prefab Group ID
 * @param prefabGroupID 该元件组的标识（元件组索引：整数）
 * @param location 元件组中心的绝对位置（位置：三维向量）
 * @param rotate 元件组中心的绝对旋转（旋转：三维向量）
 * @param ownerEntity 可决定创建后实体是否归属于某个实体（归属者实体：实体）
 * @param level 决定实体创建时的等级（等级：整数）
 * @param unitTagIndexList 可决定实体创建时携带的单位标签（单位标签索引列表：整数列表）
 * @param overwriteLevel 为否时，【等级】参数不生效（是否覆写等级：布尔值）
 * @returns 以该方式创建的实体没有GUID（创建后实体列表：实体列表）
 */
export declare function createPrefabGroup(prefabGroupID: int, location: Vec3, rotate: Vec3, ownerEntity: Entity, level: int, unitTagIndexList: int[], overwriteLevel: bool): Entity[];

/**
 * 【修改模型颜色和材质】 Edit Model Color & Material
 * 分类：执行节点 / 五、实体相关（V. Entity Related）
 *
 * 设置实体模型的【材质】功能、【叠加颜色】功能的开启与关闭，对具体【材质】【颜色叠加方式】【叠加颜色】进行修改
 *
 * @en Enables or disables the entity model's material and color blend settings, and modifies the assigned material, color blend mode, and override color.
 * @param targetEntity 目标实体（目标实体：实体）
 * @param overwriteColorConfigurations 是否覆写颜色配置（是否覆写颜色配置：布尔值）
 * @param enableCustomColor 是否启用自定义颜色（是否启用自定义颜色：布尔值）
 * @param fillColor 填充颜色（填充颜色：整数）
 * @param colorOpacity 颜色透明度（颜色透明度：浮点数）
 * @param colorBlendType 颜色叠加类型（颜色叠加类型：枚举）
 * @param overwriteMaterialConfigurations 是否覆写材质配置（是否覆写材质配置：布尔值）
 * @param enableCustomMaterial 是否启用自定义材质（是否启用自定义材质：布尔值）
 * @param fillMaterialType 填充材质类型（填充材质类型：枚举）
 */
export declare function editModelColorAndMaterial(targetEntity: Entity, overwriteColorConfigurations: bool, enableCustomColor: bool, fillColor: int, colorOpacity: float, colorBlendType: E.ColorBlendType, overwriteMaterialConfigurations: bool, enableCustomMaterial: bool, fillMaterialType: E.FillMaterialType): void;
