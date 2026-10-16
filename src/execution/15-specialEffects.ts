// 自动生成：执行节点 / 十五、特效（XV. Special Effects）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【播放限时特效】 Play Timed Effects
 * 分类：执行节点 / 十五、特效（XV. Special Effects）
 *
 * 以目标实体为基准，播放一个限时特效。需要有合法的目标实体以及挂接点
 *
 * @en Play a Timed Effect relative to the Target Entity. A valid Target Entity and Attachment Point are required
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param specialEffectsAsset 该特效的标识（特效资产：配置ID）
 * @param targetEntity 实体不存在会导致特效无法播放（目标实体：实体）
 * @param attachmentPointName 挂接点名称不存在会导致特效无法播放（挂接点名称：字符串）
 * @param moveWithTheTarget “是”会跟随目标实体运动（是否跟随目标运动：布尔值）
 * @param rotateWithTheTarget “是”会跟随目标实体旋转（是否跟随目标旋转：布尔值）
 * @param locationOffset 相对于目标实体指定挂接点的位置偏移（位置偏移：三维向量）
 * @param rotationOffset 相对于目标实体指定挂接点的旋转偏移（旋转偏移：三维向量）
 * @param zoomMultiplier 该特效的缩放倍率（缩放倍率：浮点数）
 * @param playBuiltInSoundEffect “是”则会同时播放自带的音效（是否播放自带的音效：布尔值）
 */
export declare function playTimedEffects(specialEffectsAsset: ConfigId, targetEntity: Entity, attachmentPointName: str, moveWithTheTarget: bool, rotateWithTheTarget: bool, locationOffset: Vec3, rotationOffset: Vec3, zoomMultiplier: float, playBuiltInSoundEffect: bool): void;

/**
 * 【挂载循环特效】 Mount Looping Special Effect
 * 分类：执行节点 / 十五、特效（XV. Special Effects）
 *
 * 以目标实体为基准，挂载一个循环特效。需要有合法的目标实体以及挂接点
 * 该节点会返回一个特效实例ID，可以将其存下。后续使用【清除循环特效】节点时，用这个特效实例ID来清除指定的循环特效
 *
 * @en Mount a Looping Effect relative to the Target Entity. A valid Target Entity and Attachment Point are required
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param specialEffectsAsset 该特效的标识（特效资产：配置ID）
 * @param targetEntity 实体不存在会导致特效无法播放（目标实体：实体）
 * @param attachmentPointName 挂接点名称不存在会导致特效无法播放（挂接点名称：字符串）
 * @param moveWithTheTarget “是”会跟随目标实体运动（是否跟随目标运动：布尔值）
 * @param rotateWithTheTarget “是”会跟随目标实体旋转（是否跟随目标旋转：布尔值）
 * @param locationOffset 相对于目标实体指定挂接点的位置偏移（位置偏移：三维向量）
 * @param rotationOffset 相对于目标实体指定挂接点的旋转偏移（旋转偏移：三维向量）
 * @param zoomMultiplier 该特效的缩放倍率（缩放倍率：浮点数）
 * @param playBuiltInSoundEffect 是则会播放自带的音效（是否播放自带的音效：布尔值）
 * @returns 挂载该特效时自动生成的实例ID（特效实例ID：整数）
 */
export declare function mountLoopingSpecialEffect(specialEffectsAsset: ConfigId, targetEntity: Entity, attachmentPointName: str, moveWithTheTarget: bool, rotateWithTheTarget: bool, locationOffset: Vec3, rotationOffset: Vec3, zoomMultiplier: float, playBuiltInSoundEffect: bool): int;

/**
 * 【清除循环特效】 Clear Looping Special Effect
 * 分类：执行节点 / 十五、特效（XV. Special Effects）
 *
 * 根据特效实例ID清除目标实体上的指定循环特效。【挂载循环特效】节点在成功挂载后，会生成一个特效实例ID
 *
 * @en Clear the specified Looping Effect on the Target Entity by Effect Instance ID. After a successful mount, the [Mount Looping Effect] node generates an Effect Instance ID
 * @param specialEffectInstanceID 【挂载循环特效】节点中自动生成的实例ID（特效实例ID：整数）
 * @param targetEntity 生效的实体（目标实体：实体）
 */
export declare function clearLoopingSpecialEffect(specialEffectInstanceID: int, targetEntity: Entity): void;

/**
 * 【根据特效资产清除特效】 Clear Special Effects Based on Special Effect Assets
 * 分类：执行节点 / 十五、特效（XV. Special Effects）
 *
 * 清除指定目标实体上所有使用该特效资产的特效。仅限循环特效
 *
 * @en Clear all Effects on the specified Target Entity that use the given Effect Asset. Applies to Looping Effects only
 * @param targetEntity 生效的实体（目标实体：实体）
 * @param specialEffectsAsset 该特效的标识（特效资产：配置ID）
 */
export declare function clearSpecialEffectsBasedOnSpecialEffectAssets(targetEntity: Entity, specialEffectsAsset: ConfigId): void;
