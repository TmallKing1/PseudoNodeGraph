// 自动生成：执行节点 / 五十五、光标（LV. Cursor）
// 来源：https://act.mihoyo.com/ys/ugc/tutorial/detail/mhw66orrrfkm
/* eslint-disable */
import type { Entity, GUID, ConfigId, PrefabId, Faction, Vec3, int, float, bool, str, Dict, DictKey, NodeValue, Num, Unbranded, CustomVariableSnapshot, LocalVariable, OpaqueEnum } from '../core/types';
import type * as E from '../core/enums';
import type { SignalName, SignalParams } from '../core/signals';

/**
 * 【设置玩家光标是否常驻】 Set Player's Cursor to Always Visible
 * 分类：执行节点 / 五十五、光标（LV. Cursor）
 *
 * 设置指定玩家的光标是否常驻显示
 *
 * @en Sets whether the specified Player's cursor remains visible
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param alwaysShowCursor “是”则光标常驻显示（是否光标常驻：布尔值）
 */
export declare function setPlayersCursorToAlwaysVisible(playerEntity: Entity, alwaysShowCursor: bool): void;

/**
 * 【设置玩家光标点击可选取目标】 Enable Player's Cursor to Click Selectable Targets
 * 分类：执行节点 / 五十五、光标（LV. Cursor）
 *
 * 设置指定玩家光标点击时可选取的目标层级与最多选取数量
 *
 * @en Sets the layer filter and maximum number of targets that can be selected when the specified Player clicks with the cursor
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param cursorClickableLayerFilterID 光标可点击的层级筛选 id（光标可点击层级筛选id：整数）
 * @param maxSelectableTargets 光标最多可同时选取的目标数量（光标最多可选取目标：整数）
 */
export declare function enablePlayersCursorToClickSelectableTargets(playerEntity: Entity, cursorClickableLayerFilterID: int, maxSelectableTargets: int): void;

/**
 * 【设置玩家光标是否穿透UI控件】 Set Player's Cursor to Click Through UI Controls
 * 分类：执行节点 / 五十五、光标（LV. Cursor）
 *
 * 设置指定玩家光标点击是否能够穿透UI控件，对UI下方的对象生效
 *
 * @en Sets whether clicks from the specified Player's cursor can pass through UI Controls and affect objects behind them
 * @param playerEntity 生效的玩家（玩家实体：实体）
 * @param clickThroughUIControls “是”则光标点击穿透UI控件，作用于其下方的对象（是否穿透UI控件：布尔值）
 */
export declare function setPlayersCursorToClickThroughUIControls(playerEntity: Entity, clickThroughUIControls: bool): void;
