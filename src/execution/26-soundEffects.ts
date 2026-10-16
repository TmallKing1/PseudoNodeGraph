// 自动生成：执行节点 / 二十六、音效（XXVI. Sound Effects）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【关闭指定音效播放器】 Close Specified Sound Effect Player
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 关闭指定目标实体上的音效播放器组件对应序号的音效播放器
 *
 * @en Disable the Sound Effect Player with the specified ID in the Sound Effect Player Component on the specified Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param sfxPlayerID 音效播放器序号（音效播放器序号：整数）
 */
export declare function closeSpecifiedSoundEffectPlayer(targetEntity: Entity, sfxPlayerID: int): void;

/**
 * 【启动/暂停指定音效播放器】 Start/Pause Specified Sound Effect Player
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 可以修改指定目标实体上的音效播放器组件对应序号的音效播放器状态，仅当该音效被设置为循环播放时有效，单次播放的音效该节点不生效
 *
 * @en Edit the state of the Sound Effect Player with the specified ID in the Sound Effect Player Component on the Target Entity. This node is only active when the sound effect is set to loop playback. It does not take effect for sound effects configured for single-playback.
 * @param targetEntity 目标实体（目标实体：实体）
 * @param sfxPlayerID 音效播放器序号（音效播放器序号：整数）
 * @param recover 是否恢复（是否恢复：布尔值）
 */
export declare function startPauseSpecifiedSoundEffectPlayer(targetEntity: Entity, sfxPlayerID: int, recover: bool): void;

/**
 * 【调整指定音效播放器】 Adjust Specified Sound Effect Player
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 可以调整指定目标实体上的音效播放器组件对应序号的音效播放器的音量和播放速度
 *
 * @en Adjust the volume and playback speed of the Sound Effect Player with the specified ID in the Sound Effect Player Component on the Target Entity
 * @param targetEntity 目标实体（目标实体：实体）
 * @param sfxPlayerID 音效播放器序号（音效播放器序号：整数）
 * @param volume 音量（音量：整数）
 * @param playbackSpeed 播放速度（播放速度：浮点数）
 */
export declare function adjustSpecifiedSoundEffectPlayer(targetEntity: Entity, sfxPlayerID: int, volume: int, playbackSpeed: float): void;

/**
 * 【添加音效播放器】 Add Sound Effect Player
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 动态添加一个音效播放器，需要单位持有音效播放器组件
 *
 * @en Dynamically add a Sound Effect Player. The Unit must have a Sound Effect Player Component
 * 注：节点图字符串只能整体赋值/替换、比较，或由【数据类型转换】得到；不支持拼接、截取、拆分、逐字符遍历、取长度。
 * @param targetEntity 目标实体（目标实体：实体）
 * @param soundEffectAssetIndex 音效资产索引（音效资产索引：整数）
 * @param volume 音量（音量：整数）
 * @param playbackSpeed 播放速度（播放速度：浮点数）
 * @param loopPlayback 是否循环播放（是否循环播放：布尔值）
 * @param loopIntervalTime 循环间隔时间（循环间隔时间：浮点数）
 * @param _3dSoundEffect 是否为3D音效（是否为3D音效：布尔值）
 * @param rangeRadius 范围半径（范围半径：浮点数）
 * @param attenuationMode 衰减方式（衰减方式：枚举）
 * @param attachmentPointName 挂接点名称（挂接点名称：字符串）
 * @param attachmentPointOffset 挂接点偏移（挂接点偏移：三维向量）
 * @returns 音效播放器序号（音效播放器序号：整数）
 */
export declare function addSoundEffectPlayer(targetEntity: Entity, soundEffectAssetIndex: int, volume: int, playbackSpeed: float, loopPlayback: bool, loopIntervalTime: float, _3dSoundEffect: bool, rangeRadius: float, attenuationMode: E.SoundAttenuationMode, attachmentPointName: str, attachmentPointOffset: Vec3): int;

/**
 * 【启动/暂停玩家背景音乐】 Start/Pause Player Background Music
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 修改对应玩家的背景音乐状态
 *
 * @en Edit the background music state for the specified Player
 * @param targetEntity 生效的玩家实体（目标实体：实体）
 * @param recover 是否恢复（是否恢复：布尔值）
 */
export declare function startPausePlayerBackgroundMusic(targetEntity: Entity, recover: bool): void;

/**
 * 【调整玩家背景音乐音量】 Adjust Player Background Music Volume
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 调整玩家背景音乐音量
 *
 * @en Adjust Player Background Music Volume
 * @param targetEntity 生效的玩家实体（目标实体：实体）
 * @param volume 音量（音量：整数）
 */
export declare function adjustPlayerBackgroundMusicVolume(targetEntity: Entity, volume: int): void;

/**
 * 【设置玩家背景音乐】 Set Player Background Music
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 设置玩家背景音乐相关参数
 *
 * @en Set player background music parameters
 * @param targetEntity 生效的玩家实体（目标实体：实体）
 * @param backgroundMusicIndex 背景音乐索引（背景音乐索引：整数）
 * @param startTime 开始时间（开始时间：浮点数）
 * @param endTime 结束时间（结束时间：浮点数）
 * @param volume 音量（音量：整数）
 * @param loopPlayback 是否循环播放（是否循环播放：布尔值）
 * @param loopInterval 循环播放间隔（循环播放间隔：浮点数）
 * @param playbackSpeed 播放速度（播放速度：浮点数）
 * @param enableFadeInOut 是否允许渐入渐出（是否允许渐入渐出：布尔值）
 */
export declare function setPlayerBackgroundMusic(targetEntity: Entity, backgroundMusicIndex: int, startTime: float, endTime: float, volume: int, loopPlayback: bool, loopInterval: float, playbackSpeed: float, enableFadeInOut: bool): void;

/**
 * 【玩家播放单次2D音效】 Player Plays One-Shot 2D Sound Effect
 * 分类：执行节点 / 二十六、音效（XXVI. Sound Effects）
 *
 * 玩家播放单次2D音效
 *
 * @en Player plays a one-shot 2D Sound Effect
 * @param targetEntity 生效的玩家实体（目标实体：实体）
 * @param soundEffectAssetIndex 音效资产索引（音效资产索引：整数）
 * @param volume 音量（音量：整数）
 * @param playbackSpeed 播放速度（播放速度：浮点数）
 */
export declare function playerPlaysOneShot2DSoundEffect(targetEntity: Entity, soundEffectAssetIndex: int, volume: int, playbackSpeed: float): void;
