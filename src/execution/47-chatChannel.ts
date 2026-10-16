// 自动生成：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置聊天频道开关】 Set Chat Channel Switch
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置聊天频道的语音和文字开关
 *
 * @en Configure the voice and text toggles for the chat channel
 * @param channelIndex 频道索引（频道索引：整数）
 * @param voiceOverSwitch 语音开关（语音开关：布尔值）
 * @param textSwitch 文字开关（文字开关：布尔值）
 */
export declare function setChatChannelSwitch(channelIndex: int, voiceOverSwitch: bool, textSwitch: bool): void;

/**
 * 【设置玩家频道权限】 Set Player Channel Permissions
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置玩家频道权限
 *
 * @en Set player channel permissions
 * @param playerGUID 玩家GUID（玩家GUID：GUID）
 * @param channelIndex 频道索引（频道索引：整数）
 * @param join “是”则该频道指定玩家可用（是否加入：布尔值）
 */
export declare function setPlayerChannelPermissions(playerGUID: GUID, channelIndex: int, join: bool): void;

/**
 * 【设置玩家当前频道】 Set Player's Current Channel
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置玩家当前可用的频道，在列表中的频道该玩家可用，不在的该玩家不可用
 *
 * @en Set the Player's currently available channels. Channels in the list are available to the Player, and channels not in the list are unavailable
 * @param playerGUID 玩家GUID（玩家GUID：GUID）
 * @param channelIndexList 频道索引列表（频道索引列表：整数列表）
 */
export declare function setPlayersCurrentChannel(playerGUID: GUID, channelIndexList: int[]): void;

/**
 * 【设置玩家聊天语音范围】 Set Voice Chat Scope
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置目标玩家在频道列表中语音聊天的范围
 *
 * @en Set the voice chat range of the target player within the channel list
 * @param targetPlayer 目标玩家（目标玩家：实体）
 * @param channelList 频道列表（频道列表：整数列表）
 * @param effectiveRange 目标玩家可以听到同频道其他玩家语音的范围，不影响其他玩家可以听到目标玩家语音的范围。 范围：1-100m（生效范围：整数）
 * @param limitScope 为是时生效范围才有效，为否时无视生效范围内的配置（是否限制范围：布尔值）
 */
export declare function setVoiceChatScope(targetPlayer: Entity, channelList: int[], effectiveRange: int, limitScope: bool): void;

/**
 * 【设置玩家聊天文字权限】 Set Text Chat Permissions
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置目标玩家在频道列表中聊天文字的权限
 *
 * @en Set the target player's permission to use text chat in the channel list
 * @param targetPlayer 目标玩家（目标玩家：实体）
 * @param channelList 频道列表（频道列表：整数列表）
 * @param limitPermissions 为是则限制该玩家在对应频道列表的功能（是否限制权限：布尔值）
 */
export declare function setTextChatPermissions(targetPlayer: Entity, channelList: int[], limitPermissions: bool): void;

/**
 * 【设置玩家聊天语音权限】 Set Voice Chat Permissions
 * 分类：执行节点 / 四十七、聊天频道（XLVII. Chat Channel）
 *
 * 设置目标玩家在频道列表中语音聊天的权限
 *
 * @en Set the target player's permissions to use voice chat in the channel list
 * @param targetPlayer 目标玩家（目标玩家：实体）
 * @param channelList 频道列表（频道列表：整数列表）
 * @param restrictVoiceChatSpeak 为是则其他玩家无法听到目标玩家语音（是否限制发送语音：布尔值）
 * @param restrictVoiceChatListen 为是则目标玩家无法听到其他玩家语音（是否限制接收语音：布尔值）
 */
export declare function setVoiceChatPermissions(targetPlayer: Entity, channelList: int[], restrictVoiceChatSpeak: bool, restrictVoiceChatListen: bool): void;
