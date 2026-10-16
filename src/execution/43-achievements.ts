// 自动生成：执行节点 / 四十三、成就（XLIII. Achievements）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置成就进度计数】 Set Achievement Progress Tally
 * 分类：执行节点 / 四十三、成就（XLIII. Achievements）
 *
 * 设置指定实体上对应成就序号的成就进度计数
 *
 * @en Set the progress counter for the specified Achievement ID on the Target Entity
 * @param setEntity 设置实体（设置实体：实体）
 * @param achievementID 成就序号（成就序号：整数）
 * @param progressTally 修改后的进度计数为输入的值（进度计数：整数）
 */
export declare function setAchievementProgressTally(setEntity: Entity, achievementID: int, progressTally: int): void;

/**
 * 【增加成就进度计数】 Increase Achievement Progress Tally
 * 分类：执行节点 / 四十三、成就（XLIII. Achievements）
 *
 * 变更指定实体上对应成就序号的成就进度计数
 *
 * @en Change the progress counter for the specified Achievement ID on the Target Entity
 * @param changeEntity 变更实体（变更实体：实体）
 * @param achievementID 成就序号（成就序号：整数）
 * @param progressTallyIncreaseValue 变更后值=变更前值+增加值（进度计数增加值：整数）
 */
export declare function increaseAchievementProgressTally(changeEntity: Entity, achievementID: int, progressTallyIncreaseValue: int): void;
